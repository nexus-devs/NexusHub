const Endpoint = require(blitz.config[blitz.id].endpointParent)
const _ = require('lodash')

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
          return new Date().getTime() // current time
        },
        description: 'Returns data recorded between timestart and timeend.'
      },
      {
        name: 'timeend',
        default: () => {
          return new Date(new Date().setDate(new Date().getDate() - 7)).getTime() // 1 week ago
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
        default: '.*',
        description: 'Region to select requests from.'
      },
    ]
    this.schema.limit = {
      disable: false,
      interval: 5000,
      maxInInterval: 5
    }
  }


  /**
   * Main method which is called by EndpointHandler on request
   */
  async main(req, res) {
    const item = req.params.item
    const intervals = req.query.intervals
    const region = req.query.region
    let timestart = req.query.timestart
    let timeend = req.query.timeend

    // Switch time range if specified the wrong way around
    if (timestart < timeend) {
      timestart = req.query.timeend
      timeend = req.query.timestart
    }

    // Verify Interval size
    if (intervals <= 0) {
      const response = {
        error: 'Bad input.',
        reason: 'Intervals must be greater than 0'
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

    // Generate valid Query from input
    let { query, projection } = this.generateQuery(item, region, timestart, timeend)

    // Get requests from mongodb
    let requests = await this.db.collection('requests').find(query, projection).toArray()
    let stats = this.getStatistics(requests, query, intervals, itemResult)

    // Send to client and cache
    this.cache(stats, 86400)
    res.send(stats)
  }


  /**
   * Generate query from given params
   */
  generateQuery(item, region, timestart, timeend) {
    let query = {
      item: new RegExp('^' + item + '$', 'i'),
      createdAt: {
        $gte: new Date(timeend),
        $lte: new Date(timestart)
      },
      region: new RegExp('^' + region + '$', 'i'),
    }
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
  getStatistics(result, query, intervals, itemResult) {

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

    // Time window
    let timestart = query.createdAt.$lte.getTime()
    let timeend = query.createdAt.$gte.getTime()

    // Fill document with components and interval, then calculate stats
    this.createComponents(doc, itemResult, intervals)
    this.accumulate(timestart, timeend, intervals, result, doc)
    this.calculate(doc)
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
          price: request.price
        })
        if (request.price) {
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
  calculate(doc) {
    doc.components.forEach(component => {
      this.calculateOfferType(component.selling, component)
      this.calculateOfferType(component.buying, component)

      // Calculate combined data
      this.calculateMedian(component.combined)
      this.calculateAvg(component.combined)
      delete component.combined.requests

      // Calculate interval data for combined
      component.combined.intervals.forEach(interval => {
        this.calculateMedian(interval)
        this.calculateAvg(interval)
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
  calculateOfferType(type, component) {
    type.intervals.forEach((interval, j) => {
      let users = {} // for spam check. Object is faster than Array lookup.

      // Sort requests by price and get median
      interval.offers.count = interval.requests.length
      this.calculateMedian(interval)
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

      // Calculate interval data and add to component/combined
      this.addToParent(type, interval)
      this.addToParent(component.combined.intervals[j], interval)
      this.calculateAvg(interval)
      delete interval.requests
    })

    // Add accumulations to combined and calculate component data from intervals
    this.addToParent(component.combined, type)
    this.calculateAvg(type)
    this.calculateMedian(type)
    delete type.requests
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
  calculateAvg(interval) {
    interval.avg = interval.avg / interval.offers.hasValue
  }


  /**
   * Calculates the median from a given interval with objects
   */
  calculateMedian(obj) {
    obj.requests.sort((a, b) =>  a.price - b.price)
    const requests = obj.requests.slice(obj.offers.count - obj.offers.hasValue, obj.requests.length)

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
    if (request.price !== null && interval.median !== null) {
      let percentToMedian = request.price / interval.median
      return (percentToMedian > 2) || (percentToMedian < 0.66)
    }
    return false
  }
}

module.exports = Statistics
