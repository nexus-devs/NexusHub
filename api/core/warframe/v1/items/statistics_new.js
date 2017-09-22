const Endpoint = require(blitz.config[blitz.id].endpointParent)
const _ = require('lodash')

/**
 * Provides detailed item statistics for specific item
 */
class Statistics extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get item statistics between a specified time frame.'
    this.schema.url = '/warframe/v1/items/:item/statistics_new'
    this.schema.query = [{
        name: 'component',
        default: '',
        required: true,
        description: 'Specifies item component to look up. No component returns full set data.'
      },
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
        default: 7,
        description: 'Intervals to split the time in.'
      }
    ]
  }


  /**
   * Main method which is called by EndpointHandler on request
   */
  async main(req, res) {
    const item = req.params.item
    const component = req.query.component
    const timestart = req.query.timestart
    const timeend = req.query.timeend
    const intervals = req.query.intervals

    // Check if params are valid
    if (timestart < timeend) res.status(400).send({
      error: 'Bad input.',
      reason: 'Invalid time frame. Please make sure that timestart is greater than timeend.'
    })
    if (intervals <= 0) res.status(400).send({
      error: 'Bad input.',
      reason: 'Intervals must be greater than 0'
    })

    // Get item from db
    let itemResult = await this.db.collection('items').findOne({
      name: new RegExp('^' + item + '$', 'i')
    })
    if (!itemResult) {
      let response = {
        error: 'Could not find data for ' + item + ' ' + component + '.',
        reason: 'Item doesn\'t exist.',
      }
      this.cache(response, 1)
      res.status(404).send(response)
    }

    // Generate valid Query from input
    let query = this.generateQuery(item, component, timestart, timeend)

    // Get requests from mongodb
    let requests = await this.db.collection('requests').find(query).toArray()
    let stats = this.getStatistics(requests, res, query, intervals, itemResult)

    if (typeof stats === 'object' && Object.keys(stats).length > 0) {
      this.cache(stats, 1)
      res.send(stats)
    } else {
      let response = {
        error: 'Could not find data for ' + item + ' ' + component + '.',
        reason: 'Nobody offers this item.'
      }
      this.cache(response, 1)
      res.status(404).send(response)
    }
  }


  /**
   * Generate query from given params
   */
  generateQuery(item, component, timestart, timeend) {
    let query = {
      item: new RegExp('^' + item + '$', 'i'),
      createdAt: {
        $gte: new Date(timeend),
        $lte: new Date(timestart)
      }
    }

    // Append component if one is given
    if (component !== '') {
      query.component = new RegExp('^' + component + '$', 'i')
    }

    return query
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
   *      - Clean up unneeded fields (offer ignores and median array)
   */
  getStatistics(result, res, query, intervals, itemResult) {

    // Empty results?
    if (result.length <= 0) {
      return res.status(404).send({
        error: 'Could not find data.',
        reason: 'Nobody offers this item or it doesn\'t exist.'
      })
    }

    // Main document to return
    let doc = {
      item: itemResult.name,

      buying: {
        avg: null,
        median: null,
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY,

        offers: {
          count: 0,
          percentage: 0,
          ignore: 0,
        },
        components: [],
        requests: [],
      },

      selling: {
        avg: null,
        median: null,
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY,

        offers: {
          count: 0,
          percentage: 0,
          ignore: 0,
        },
        components: [],
        requests: [],
      },

      combined: {
        avg: null,
        median: null,
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY,

        offers: {
          count: 0,
          percentage: 1,
          ignore: 0,
        },
        components: [],
        requests: [],
      }
    }

    // Time window
    let timestart = query.createdAt.$lte.getTime()
    let timeend = query.createdAt.$gte.getTime()

    // Fill document with components and intervals
    this.createComponents(doc, itemResult, intervals)

    // Accumulate data from requests into intervals
    this.accumulate(timestart, timeend, intervals, result, doc)

    // Process the main parts
    this.process(doc.buying, doc.combined)
    this.process(doc.selling, doc.combined)

    // Calculate percentages
    this.processCombined(doc.buying, doc.combined, false)
    this.processCombined(doc.selling, doc.combined, false)

    // Calculate combined
    this.processCombined(doc.combined, doc.combined, true)

    return doc
  }


  /**
   * Fills the document with all components and the intervals
   */
  createComponents(doc, itemResult, intervals) {

    let components = [
      [],
      [],
      []
    ]

    // Create full component array in buying
    for (let i = 0; i < 3; i++) {

      itemResult.components.forEach(entry => {

        // Create component
        let component = {
          name: entry.name,

          avg: null,
          median: null,
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY,

          offers: {
            count: 0,
            percentage: 0,
            ignore: 0,
          },

          intervals: [],
          requests: [],
        }

        // Fill component with intervals
        for (let i = 0; i < intervals; i++) {

          // Create interval
          let interval = {
            avg: null,
            median: null,
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY,

            offers: {
              count: 0,
              percentage: 0,

              ignore: 0,
            },

            requests: [],
          }

          // Add interval to component
          component.intervals.push(interval)
        }

        // Push to component array
        components[i].push(component)
      })
    }

    // Add to buying/selling/combined
    doc.buying.components = doc.buying.components.concat(components[0])
    doc.selling.components = doc.selling.components.concat(components[1])
    doc.combined.components = doc.combined.components.concat(components[2])
  }


  /**
   * Accumulates data from requests and add it into intervals
   */
  accumulate(timestart, timeend, intervals, result, doc) {

    // Get interval size
    let intervalsSize = (timestart - timeend) / intervals

    // Accumulate
    result.forEach(request => {

      // Get doc for current request
      let requestDoc = doc

      // Determine buying/selling
      if (request.offer === 'Selling') {

        // Set to selling
        requestDoc = doc.selling
      } else {

        // Set to buying
        requestDoc = doc.buying
      }

      // Get current component
      let index = requestDoc.components.findIndex(comp => comp.name === request.component)
      if (index > -1) {

        let component = requestDoc.components[index]

        // Get fitting interval
        let i = Math.floor((request.createdAt.getTime() - timeend) / intervalsSize)

        // Hacky race condition fix when i outside of intervals
        if (i >= intervals) i = intervals - 1
        let intvl = component.intervals[i]

        // Add request to interval
        let req = {}
        req.user = request.user
        req.price = request.price
        intvl.requests.push(req)
      }
    })
  }


  /**
   * Processes each interval and components main parts
   * Also purges spoofed requests
   * Avg, median, min, max, offer count
   */
  process(doc, combined) {

    doc.components.forEach(component => {

      // Find corresponding combined component
      let combinedComponentIndex = combined.components.findIndex(comp => comp.name === component.name)
      let combinedComponent = combined.components[combinedComponentIndex]

      component.intervals.forEach((interval, j) => {

        // User object for user spoofing check
        let users = {}

        // Boolean to check if values aren't null anymore
        let nullArrayReached = false

        // Sort requests after price
        this.sortRequests(interval)

        interval.requests.forEach((request, i) => {

          let price = request.price

          // Check for user spoof
          if (this.purgeUserSpam(users, request))
            return

          // Check if the null segment is over
          if (!nullArrayReached && price !== null) {

            nullArrayReached = true

            // Calculate median
            this.calculateMedianObjectArray(interval, i)
          }

          // Check for price spoof
          if (this.purgeExtremes(interval, request))
            return

          // Add to offers
          interval.offers.count++

            // Add to avg, min, max
            if (price !== null) {

              // Add to avg
              interval.avg += price

              // New min/max?
              if (price < interval.min) interval.min = price
              if (price > interval.max) interval.max = price

              // Add to component median
              component.requests.push(price)

              // Add to combined median
              if (combinedComponentIndex > -1) combinedComponent.requests.push(price)
            }

          // Or to ignore
          else
            interval.offers.ignore++
        })


        // Add interval to component
        this.addToParent(component, interval)

        // Add interval to combined interval
        this.addToParent(combinedComponent.intervals[j], interval)

        // Calculate interval avg
        this.calculateAvg(interval)
      })


      // Add component to doc
      this.addToParent(doc, component)

      // Add component to combined component
      this.addToParent(combinedComponent, component)

      // Calculate component median
      this.calculateMedian(component)

      // Push requests to doc
      doc.requests = doc.requests.concat(component.requests)

      // Calculate component avg
      this.calculateAvg(component)
    })


    // Add to combined doc
    this.addToParent(combined, doc)

    // Calculate doc median
    this.calculateMedian(doc)

    // Push requests to combined
    combined.requests = combined.requests.concat(doc.requests)

    // Calculate doc avg
    this.calculateAvg(doc)
  }


  /**
   * Processes the percentages for each interval and component
   * Also calculates the combined part and cleans up
   */
  processCombined(doc, combined, calculate) {

    // Calculate main doc percentages
    this.calculatePercentages(doc, combined)

    doc.components.forEach(component => {

      // Calculate component percentages
      this.calculatePercentages(component, doc)

      component.intervals.forEach(interval => {

        // Calculate interval percentages
        this.calculatePercentages(interval, component)

        // Calculate combined interval avg/median
        if (calculate) {
          this.calculateAvg(interval)
          this.calculateMedian(interval)
        }

        // Clean up interval
        delete interval.requests
        delete interval.offers.ignore
      })

      // Calculate combined component avg/median
      if (calculate) {
        this.calculateAvg(component)
        this.calculateMedian(component)
      }

      // Clean up component
      delete component.requests
      delete component.offers.ignore
    })

    // Calculate combined component avg/median
    if (calculate) {
      this.calculateAvg(doc)
      this.calculateMedian(doc)
    }

    // Clean up doc
    delete doc.requests
    delete doc.offers.ignore
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

    // Add avg and offers
    parent.avg += child.avg
    parent.offers.count += child.offers.count
    parent.offers.ignore += child.offers.ignore

    // New component min/max?
    if (child.min < parent.min) parent.min = child.min
    if (child.max > parent.max) parent.max = child.max
  }


  /**
   * Sorts the requests array after prices
   */
  sortRequests(interval) {

    interval.requests.sort((a, b) => {
      if (typeof a === 'object')
        return a.price - b.price

      else
        return a - b
    })
  }


  /**
   * Calculates the average from a given interval
   */
  calculateAvg(interval) {

    interval.avg = interval.avg / (interval.offers.count - interval.offers.ignore)
  }


  /**
   * Calculates the median from a given interval with numbers
   */
  calculateMedian(interval) {

    this.sortRequests(interval)

    let medianLength = interval.requests.length

    // More than one value in array
    if (medianLength > 1) {

      // Odd?
      if (medianLength % 2 !== 0)
        interval.median = interval.requests[Math.floor(medianLength / 2)]

      // Even?
      else
        interval.median = (interval.requests[medianLength / 2 - 1] + interval.requests[medianLength / 2]) / 2

    // Only one value
    } else
      interval.median = medianLength > 0 ? interval.requests[0] : null
  }

  /**
   * Calculates the median from a given interval with objects
   */
  calculateMedianObjectArray(interval, start) {

    let medianLength = interval.requests.length - start

    // More than one value in array
    if (medianLength > 1) {

      // Odd?
      if (medianLength % 2 !== 0)
        interval.median = interval.requests[start + Math.floor(medianLength / 2)].price

      // Even?
      else
        interval.median = (interval.requests[start + medianLength / 2 - 1].price + interval.requests[start + medianLength / 2].price) / 2

      // Only one value
    } else
      interval.median = medianLength > 0 ? interval.requests[start].price : null
  }


  /**
   * Checks if a user made multiple requests in the interval
   */
  purgeUserSpam(users, request) {

    // User already made a request
    if (users[request.user])
      return true

    // User didn't made a request
    else {
      users[request.user] = {}
      return false
    }
  }


  /**
   * Checks if a user goes extremes under/over the median
   */
  purgeExtremes(interval, request) {

    // Can extremes actually be checked?
    if (request.price !== null && interval.median !== null) {

      // Check if 300% over or 33% under median
      let percentToMedian = request.price / interval.median
      return (percentToMedian > 3) || (percentToMedian < 0.33)
    }

    return false
  }


}

module.exports = Statistics
