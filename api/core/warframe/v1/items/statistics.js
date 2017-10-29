const Endpoint = require(blitz.config[blitz.id].endpointParent)
const _ = require('lodash')
const moment = require('moment')

/**
 * Provides detailed item statistics for specific item
 */
class Statistics extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get item statistics between a specified time frame.'
    this.schema.url = '/warframe/v1/items/:item/statistics'
    this.schema.query = [
      {
        name: 'timestart',
        default: () => {
          return moment().endOf('day').valueOf()
        },
        description: 'Returns data recorded between timestart and timeend.'
      },
      {
        name: 'timeend',
        default: () => {
          return moment().subtract(7, 'days').startOf('day').valueOf()
        },
        description: 'Returns data recorded between timestart and timeend.'
      },
      {
        name: 'intervals',
        default: 14,
        description: 'Intervals to split the time in.'
      },
      {
        name: 'region',
        default: '',
        description: 'Region to select requests from.'
      },
      {
        name: 'rank',
        default: null,
        description: 'Specified item rank in request'
      }
    ]
    this.schema.limit = {
      disable: false,
      interval: 5000,
      maxInInterval: 4
    }
  }


  /**
   * Main method which is called by EndpointHandler on request
   */
  async main(req, res) {
    const item = req.params.item
    const intervals = req.query.intervals
    const region = req.query.region
    const rank = req.query.rank
    let timestart = moment(new Date(req.query.timestart))
    let timeend = moment(new Date(req.query.timeend))

    // Switch time range if specified the wrong way around
    if (timestart.valueOf() < timeend.valueOf()) {
      let helper = timestart
      timestart = timeend
      timeend = helper
    }

    // Verify Interval size
    if (intervals <= 0) {
      const response = {
        error: 'Bad input.',
        reason: 'Intervals must be greater than 0.'
      }
      this.cache(response)
      return res.status(400).send(response)
    }

    // Get item from db
    let itemResult = await this.db.collection('items').findOne({
      name: new RegExp('^' + item + '$', 'i')
    })
    if (!itemResult) {
      let response = {
        error: 'Could not find data for ' + item + '.',
        reason: 'Item doesn\'t exist.',
      }
      this.cache(response, 60)
      return res.status(404).send(response)
    }

    // Get response data
    let { requests, multiplier } = await this.getRequests(item, region, rank, timestart, timeend, intervals)
    let stats = this.getStatistics(requests, timestart, timeend, intervals, itemResult, multiplier)

    // Send to client and cache
    this.cache(stats, 86400)
    res.send(stats)
  }


  /**
   * Get requests from the given parameters. If the timerange exceeds one week,
   * we split up the queries into smaller blocks that reach throughout the
   * timeframe but don't cover all requests. That means we'll need to extrapolate
   * the missing data, but also achieve near constant query times
   */
  async getRequests(item, region, rank, timestart, timeend, intervals) {
    const intervalCount = intervals > 14 ? 14 : intervals // no more than 14 queries
    const intervalRange = timestart.diff(timeend)
    let multiplier = 1

    // Standard timerange, only one query
    if (timestart.diff(timeend, 'days') < 8) {
      const { query, projection } = this.generateQuery(item, region, rank, timestart, timeend)
      const requests = await this.db.collection('requests').find(query, projection).toArray()
      return { requests, multiplier }
    }

    // More than 1 week -> split query
    else {
      const intervalSize = intervalRange / intervals
      const querySize = (1000 * 60 * 60 * 24 * 7) / intervals
      let requests = []

      for (let i = 0; i < intervals; i++) {
        // query start point for this interval is the full range divided by
        // number of intervals plus the percentage of the 'intervalSize leftover'
        // as derived from the current interval number.
        // The intervalSize leftover is the time we're skipping in each interval
        // but since we wanna start at timestart and end at the timeend, we need
        // to move the start of each query by a fraction of the leftover of
        // each interval, so the query ends at the full time range end.
        // For visualizing, compare the query time blocks with a flexbox grid
        // that's taking its space with justify-content: space-between
        // https://i-msdn.sec.s-msft.com/dynimg/IC682150.png
        const queryEnd = timeend.valueOf() + Math.floor(i * intervalSize + ((i / intervals) * (intervalSize - querySize)))
        const queryStart = queryEnd + querySize
        const { query, projection } = this.generateQuery(item, region, rank, queryStart, queryEnd)

        // Extrapolate data by simply duplicating the requests in the given timeframe
        requests = requests.concat(await this.db.collection('requests').find(query, projection).toArray())
        multiplier = Math.ceil(intervalSize / (queryStart - queryEnd))
      }

      return { requests, multiplier }
    }
  }


  /**
   * Generate query from given params
   */
  generateQuery(item, region, rank, timestart, timeend) {
    // Search query object
    let query = {
      item: new RegExp('^' + item + '$', 'i'),
      createdAt: {
        $gte: new Date(timeend),
        $lte: new Date(timestart)
      }
    }
    // Region allows array to be passed, so turn that into regex, otherwise use
    // raw string
    if (region) {
      query.region = region.includes(',') ? new RegExp(region.split(',').join('|'), 'i') : region
    }
    if (rank !== null) {
      query.rank = rank
    }

    // Limit keys that need to be returned
    let projection = {
      _id: 0,
      type: 0,
      region: 0
    }
    return { query, projection }
  }


  /**
   * Wrapper method for the statistics calculation
   *
   * Stage 1: Accumulate
   *      - Create all components and intervals based on the item list
   *      - Sort all requests into the corresponding intervals
   *
   * Stage 2: Process main parts (buying/selling only)
   *      - Purges the intervals
   *      - Calculate avg/median/min/max
   *      - Add to combined
   *
   * Stage 3: Process remainder and clean up
   *      - Calculate percentages for everything
   *      - Calculate avg/median/min/max for combined
   *      - Clean up unneeded fields (offer hasValues and median array)
   */
  getStatistics(result, timestart, timeend, intervals, itemResult, multiplier) {

    // Main document to return
    let doc = {
      name: itemResult.name,
      supply: {
        count: 0,
        hasValue: 0
      },
      demand: {
        count: 0,
        hasValue: 0
      },
      components: []
    }

    // Fill document with components and interval, then calculate stats
    this.createComponents(doc, itemResult, intervals)
    this.accumulate(timestart, timeend, intervals, result, doc)
    this.calculate(doc, multiplier)
    return doc
  }


  /**
   * Fills the document with all components and the intervals
   */
  createComponents(doc, itemResult, intervals) {
    itemResult.components.forEach(comp => {
      const data = {
        avg: null,
        median: null,
        min: null,
        max: null,
        offers: {
          count: 0,
          percentage: 0,
          hasValue: 0,
        },
        intervals: [],
        requests: [],
      }
      let component = {
        name: comp.name,
        buying: _.cloneDeep(data),
        selling: _.cloneDeep(data),
        combined: _.cloneDeep(data)
      }

      // Fill component with intervals
      const interval = _.cloneDeep(data)
      delete interval.intervals

      for (let i = 0; i < intervals; i++) {
        component.buying.intervals.push(_.cloneDeep(interval))
        component.selling.intervals.push(_.cloneDeep(interval))
        component.combined.intervals.push(_.cloneDeep(interval))
      }

      // Add to result
      doc.components.push(component)
    })
  }


  /**
   * Accumulates data from requests and add it into intervals
   */
  accumulate(timestart, timeend, intervals, result, doc) {
    let intervalSize = (timestart - timeend) / intervals

    result.forEach(request => {
      let componentIndex = doc.components.findIndex(comp => comp.name === request.component)

      if (componentIndex > -1) {
        let component = doc.components[componentIndex][request.offer.toLowerCase()]

        // Determine which interval the request is in
        let i = Math.floor((request.createdAt.getTime() - timeend) / intervalSize)
        if (i >= intervals) i = intervals - 1

        // Add request to interval
        component.intervals[i].requests.push({
          user: request.user,
          // Add hard upper limit here to avoid weird results with few offers
          price: request.price < 2000 ? request.price : null
        })
        if (request.price && request.price < 2000) {
          component.intervals[i].avg += request.price
          component.intervals[i].offers.hasValue++
        }
      }
    })
  }


  /**
   * Processes each interval and components main parts
   * Also purges spoofed requests
   * Avg, median, min, max, offer count
   */
  calculate(doc, multiplier) {
    doc.components.forEach(component => {
      this.calculateOfferType(component.selling, component, multiplier)
      this.calculateOfferType(component.buying, component, multiplier)

      // Calculate combined data
      this.calculateMedian(component.combined, multiplier)
      this.calculateAvg(component.combined, multiplier)
      delete component.combined.requests

      // Calculate interval data for combined
      component.combined.intervals.forEach(interval => {
        this.calculateMedian(interval, multiplier)
        this.calculateAvg(interval, multiplier)
        delete interval.requests
      })

      // Add supply/demand to root object
      doc.supply.count += component.selling.offers.count
      doc.supply.hasValue += component.selling.offers.hasValue
      doc.demand.count += component.buying.offers.count
      doc.demand.hasValue += component.buying.offers.hasValue
    })

    const offers = doc.supply.count + doc.demand.count
    doc.supply.percentage = doc.supply.count / offers
    doc.demand.percentage = doc.demand.count / offers
  }


  /**
   * Calculate Statistics for buying/selling and add to combined
   */
  calculateOfferType(type, component, multiplier) {
    type.intervals.forEach((interval, j) => {
      let users = {} // for spam check. Object is faster than Array lookup.

      // Get the standard deviation
      this.calculateAvg(interval, multiplier)
      this.calculateDeviation(interval, multiplier)
      interval.avg = 0 // Reset avg

      // Sort requests by price and get median
      interval.offers.count = interval.requests.length
      this.calculateMedian(interval, multiplier)
      interval.offers.count = 0
      interval.offers.hasValue = 0

      // Purge, then calculate stats for interval
      interval.requests.forEach((request, i) => {
        let price = request.price

        // Purge invalid offers (duplicates or too high/low)
        if (this.purgeSpam(users, request)) return
        if (this.purgeExtremes(interval, request)) return

        // Add to offers
        interval.offers.count++

        // Update accumulations with purged results
        if (price) {
          interval.avg += price
          interval.offers.hasValue++

          // New min/max?
          if (price < interval.min || !interval.min) interval.min = price
          if (price > interval.max) interval.max = price
        }
      })

      // Apply partitioned query multipliers
      interval.offers.count = interval.offers.count * multiplier
      interval.offers.hasValue = interval.offers.hasValue * multiplier

      // Calculate interval data and add to component/combined
      this.addToParent(type, interval)
      this.addToParent(component.combined.intervals[j], interval)
      this.calculateAvg(interval, multiplier)

      // Cleanup
      delete interval.requests
      delete interval.deviation
      delete interval.mean
    })

    // Add accumulations to combined and calculate component data from intervals
    this.addToParent(component.combined, type)
    this.calculateAvg(type, multiplier)
    this.calculateMedian(type, multiplier)
    delete type.requests
  }


  /**
   * Calculate standard deviation
   */
  calculateDeviation(interval, multiplier) {
    interval.deviation = 0

    // each request ^2
    interval.requests.forEach(request => {
      let price = request.price
      if (price)  interval.deviation += Math.pow(price - interval.avg, 2)
    })

    // Calculate standard deviation
    interval.deviation = interval.deviation / interval.offers.hasValue * multiplier
    interval.deviation = Math.sqrt(interval.deviation)
    interval.mean = interval.avg
  }


  /**
   * Calculate percentages for a given interval
   */
  calculatePercentages(interval, parent) {
    interval.offers.percentage = interval.offers.count / parent.offers.count
  }


  /**
   * Adds everything to the parent component
   */
  addToParent(parent, child) {
    parent.avg += child.avg
    parent.offers.count += child.offers.count
    parent.offers.hasValue += child.offers.hasValue

    if (child.min && (child.min < parent.min) || !parent.min) parent.min = child.min
    if (child.max > parent.max) parent.max = child.max

    parent.requests = parent.requests.concat(child.requests)
  }


  /**
   * Calculates the average of a given interval
   */
  calculateAvg(interval, multiplier) {
    interval.avg = interval.avg / interval.offers.hasValue * multiplier
  }


  /**
   * Calculates the median from a given interval with objects
   */
  calculateMedian(obj, multiplier) {
    obj.requests.sort((a, b) =>  a.price - b.price)
    const requests = obj.requests.slice(obj.requests.length - obj.offers.hasValue / multiplier, obj.requests.length)

    // Simple median calculation
    if (requests.length) {
      if (requests.length % 2 !== 0) {
        obj.median = requests[Math.floor(requests.length / 2)].price
      }
      else {
        obj.median = (requests[requests.length / 2 - 1].price + requests[requests.length / 2].price) / 2
      }
    }
  }


  /**
   * Checks if a user made multiple requests in the interval
   */
  purgeSpam(users, request) {

    // User already made a request
    if (users[request.user]) {
      return true
    }

    // User didn't make a request
    else {
      users[request.user] = 1
      return false
    }
  }


  /**
   * Checks if a user goes extremes under/over the median
   */
  purgeExtremes(interval, request) {
    if (request.price !== null && interval.mean !== null) {
      return request.price < (interval.mean - interval.deviation) || request.price > (interval.mean + interval.deviation)
    }
    /*if (request.price !== null && interval.median !== null) {
      let percentToMedian = request.price / interval.median
      return percentToMedian > 2 || percentToMedian < 0.66
    }*/
    return false
  }
}

module.exports = Statistics
