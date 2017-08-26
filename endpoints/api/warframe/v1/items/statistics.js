const Endpoint = require(blitz.config[blitz.id].endpointParent)
const _ = require("lodash")

/**
 * Provides detailed item statistics for specific item
 */
class Statistics extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Get item statistics between a specified time frame."
    this.schema.url = "/warframe/v1/items/:item/statistics"
    this.schema.query = [{
        name: "component",
        default: "",
        required: true,
        description: "Specifies item component to look up. No component returns full set data."
      },
      {
        name: "timestart",
        default: () => {
          return new Date().getTime() // current time
        },
        description: "Returns data recorded between timestart and timeend."
      },
      {
        name: "timeend",
        default: () => {
          return new Date(new Date().setDate(new Date().getDate() - 7)).getTime() // 1 week ago
        },
        description: "Returns data recorded between timestart and timeend."
      },
      {
        name: "intervals",
        default: 7,
        description: "Intervals to split the time in."
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
      error: "Bad input.",
      reason: "Invalid time frame. Please make sure that timestart is greater than timeend."
    })
    if (intervals <= 0) res.status(400).send({
      error: "Bad input.",
      reaon: "Intervals must be greater than 0"
    })

    // Generate valid Query from input
    let query = this.generateQuery(item, component, timestart, timeend)

    // Get requests from mongodb
    let requests = await this.db.collection('requests').find(query).toArray()
    let purged = this.purge(requests, timestart, timeend, intervals)
    let stats = this.getStatistics(query, intervals, purged, res)

    if (Object.keys(stats).length > 0) {
      this.cache(this.url, stats, 86400)
    } else {
      let response = {
        error: "Could not find data for " + item + " " + component + ".",
        reason: "Nobody offers this item or it doesn't exist."
      }
      this.cache(this.url, response, 86400)
      res.status(404).send(response)
    }
    res.send(stats)
  }


  /**
   * Generate query from given params
   */
  generateQuery(item, component, timestart, timeend) {

    // Use same case pattern as requests
    item = this.title(item)
    component = this.title(component)

    // Query object
    let query = {
      item: item,
      createdAt: {
        $gte: new Date(timeend),
        $lte: new Date(timestart)
      }
    }

    // Append component if one is given
    if (component !== "") query.component = component

    return query
  }



  /**
   * Filters below/above average requests and user spam
   */
  purge(result, timestart, timeend, intervals) {
    let components = [] // { name, avg, count }

    // Filter too many requests from one user
    this.purgeSpam(result, components, timestart, timeend, intervals)

    // Filter too high/low from average
    this.purgeExtremes(result, components, timestart, timeend, intervals)

    return result
  }


  /**
   * Filter multiple requests from one user in single intervals
   */
  purgeSpam(result, components, timestart, timeend, intervals) {
    let intervalsSize = (timestart - timeend) / intervals
    let interval = 0
    let users = {} // use object for users. faster for spam-check

    for (let i = result.length - 1; i >= 0; i--) {
      let request = result[i]

      // Find which interval the request is located in
      let previousInterval = interval
      interval = Math.floor((request.createdAt.getTime() - timeend) / intervalsSize)

      // Hacky race condition fix when i outside of intervals
      interval = interval >= intervals ? intervals - 1 : interval
      users = interval > previousInterval ? {} : users // keep users object small, remove unnecessary data

      // Check if user is recorded to avoid double requests
      let spam = users[request.user] ? (users[request.user][request.item][request.component] ? true : false) : false
      let componentIndex = components.findIndex(x => x.name == request.component)

      // Component doesn't exist, create object
      if (componentIndex == -1) {
        componentIndex = components.push({
          name: request.component,
          intervals: []
        }) - 1

        // Fill intervals array
        for (let j = 0; j < intervals; j++) {
          components[componentIndex].intervals.push({
            median: [],
            count: 0
          })
        }
      }

      // User doesn't exist, create object
      if (!spam) {
        users[request.user] = {}
        users[request.user][request.item] = {}
        users[request.user][request.item][request.component] = {}

        if (request.price != null) {
          ++components[componentIndex].intervals[interval].count
          components[componentIndex].intervals[interval].median.push(request.price)
        }
      }

      // User does exist, purge
      else {
        result.splice(i, 1)
      }
    }
  }


  /**
   * Remove values above min/max limits
   */
  purgeExtremes(result, components, timestart, timeend, intervals) {
    let intervalsSize = (timestart - timeend) / intervals

    // Process median
    for (let i = 0; i < components.length; i++) {
      components[i].intervals.forEach(intvl => {
        intvl.median.sort(function(a, b) {
          return a - b
        })
        let medianLength = intvl.median.length

        if (medianLength > 1) {
          // Even number?
          if (medianLength % 2 != 0) {
            intvl.median = intvl.median[Math.floor(medianLength / 2)]
          } else {
            intvl.median = (intvl.median[medianLength / 2 - 1] + intvl.median[medianLength / 2]) / 2
          }
        } else {
          intvl.median = medianLength > 0 ? intvl.median[0] : 0
        }
      })
    }

    // Remove extremes based on median
    for (let i = result.length - 1; i >= 0; i--) {
      let request = result[i]
      let componentIndex = components.findIndex(x => x.name == request.component)

      // Find which intervals the request is located in
      let k = Math.floor((request.createdAt.getTime() - timeend) / intervalsSize)

      // Hacky race condition fix when i outside of intervals
      if (k >= intervals) k = intervals - 1

      if (componentIndex != -1 && request.price != null) {

        // Current price is 300% over average, purge
        if (request.price / components[componentIndex].intervals[k].median > 3) {
          result.splice(i, 1)
        }

        // Current price is 33% under average, purge
        else if (request.price / components[componentIndex].intervals[k].median < 0.33) {
          result.splice(i, 1)
        }
      }
    }
  }


  /**
   * Calculate queried item's statistics
   */
  getStatistics(query, intervals, result, res) {

    // Empty results?
    if (result.length <= 0) {
      res.status(404).send({
        error: "Could not find data.",
        reason: "Nobody offers this item or it doesn't exist."
      })
    }

    // Document to return
    let doc = {
      title: query.item,
      type: result[0].type,
      supply: {
        count: 0,
        percentage: 0
      },
      demand: {
        count: 0,
        percentage: 0
      },
      ignore: 0,
      components: []
    }

    // Accumulate data from all requests
    this.accumulate(query, intervals, result, doc)

    // Calculate Statistics from accumulated values
    this.process(doc)

    return doc
  }


  /**
   * Accumulate data from requests
   */
  accumulate(query, intervals, result, doc) {

    // Time window
    let timestart = query.createdAt.$lte.getTime()
    let timeend = query.createdAt.$gte.getTime()

    // Get Interval size
    let intervalsSize = (timestart - timeend) / intervals

    // Accumulate data for each request
    result.forEach(request => {
      let component = this.getComponent(doc, request, intervals)

      // Find which intervals the request is located in
      let i = Math.floor((request.createdAt.getTime() - timeend) / intervalsSize)

      // Hacky race condition fix when i outside of intervals
      if (i >= intervals) i = intervals - 1
      let intvl = component.intervals[i]

      // Request has price?
      let price = request.price
      if (price) {

        // Add to median array
        component.median.push(price)

        // Calculate avg, min, max
        intvl.avg += price

        // New min/max?
        if (price < intvl.min) intvl.min = price
        if (price > intvl.max) intvl.max = price
      }

      // No Price
      else ++intvl.ignore

      // Determine Offer Type
      if (request.offer === "Selling") ++intvl.supply.count
      else ++intvl.demand.count

      // Set Modified Interval in output doc
      let index = doc.components.findIndex(comp => comp.name == request.component)
      doc.components[index].intervals[i] = intvl
    })
  }


  /**
   * Add missing component to output document and return
   */
  getComponent(doc, request, intervals) {
    let index = doc.components.findIndex(comp => comp.name == request.component)
    let component = doc.components[index]

    // Component wasn't in doc => add
    if (!component) {
      component = {
        name: request.component,
        avg: null,
        median: [],
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY,
        supply: {
          count: 0,
          percentage: 0
        },
        demand: {
          count: 0,
          percentage: 0
        },
        ignore: 0,
        intervals: []
      }

      // Fill intervals array
      for (let j = 0; j < intervals; j++) {
        let sub = { // Helper obj for field creation
          avg: null,
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY,
          supply: {
            count: 0,
            percentage: 0
          },
          demand: {
            count: 0,
            percentage: 0
          },
          ignore: 0
        }
        component.intervals.push(sub)
      }

      // Push to original doc
      this.pushSorted(doc.components, component)
    }
    return component
  }


  /**
   * Pushes Component into array at correct position
   */
  pushSorted(components, component) {

    // Array empty? Just push
    if (components.length <= 0) components.push(component)

    // Not empty -> Push at correct position
    else {
      for (let i = 0; i < components.length; i++) {

        // Sort if necessary
        if (components[i].name > component.name) {
          components.splice(i, 0, component)
          break
        }

        // Add to end if no sorting needed
        if (i === components.length - 1) {
          components.push(component)
          break
        }
      }
    }
  }


  /**
   * Calculate Statistics from accumulated data
   */
  process(doc) {
    let offers = 0

    // Calculate data from each component's intervalss
    doc.components.forEach((component, i) => {
      this.processIntervals(doc, i, component, offers)
      this.processComponent(doc, component, offers)
      this.processMedian(doc, i, component)
    })
  }


  /**
   * Calculate Data for each Interval of component
   */
  processIntervals(doc, i, component, offers) {
    component.intervals.forEach((intvl, j) => {

      // Leave raw sum for component
      component.avg += intvl.avg ? intvl.avg : 0

      // Calculate avg and supply/demand percentages
      offers = intvl.supply.count + intvl.demand.count
      intvl.avg = intvl.avg / (offers - intvl.ignore)
      intvl.supply.percentage = intvl.supply.count / offers
      intvl.demand.percentage = intvl.demand.count / offers

      // New min/max?
      if (intvl.min < component.min) component.min = intvl.min
      if (intvl.max > component.max) component.max = intvl.max

      // Add intervals vars on component vars
      component.supply.count += intvl.supply.count
      component.demand.count += intvl.demand.count
      component.ignore += intvl.ignore

      // Delete ignore field
      delete intvl.ignore

      // Save in output doc
      doc.components[i].intervals[j] = intvl
    })
  }


  /**
   * Process Overall component stats from intervalss
   */
  processComponent(doc, component, offers) {

    // Determine demand/supply
    offers = component.supply.count + component.demand.count
    component.supply.percentage = component.supply.count / offers
    component.demand.percentage = component.demand.count / offers

    // Avg based on supply count
    component.avg = component.avg / (offers - component.ignore)

    // Add component vars to document vars
    doc.supply.count += component.supply.count
    doc.demand.count += component.demand.count
    doc.ignore += component.ignore

    // Calculate document supply/demand percentages
    offers = doc.supply.count + doc.demand.count
    if (offers > 0) {
      doc.supply.percentage = doc.supply.count / offers
      doc.demand.percentage = doc.demand.count / offers
    }

    // Delete ignore field
    delete doc.ignore
  }


  /**
   * Process Median from given component
   */
  processMedian(doc, i, component) {
    component.median.sort(function(a, b) {
      return a - b
    })
    let medianLength = component.median.length

    // Even number of requests?
    if (medianLength % 2 != 0) {
      component.median = component.median[Math.floor(medianLength / 2)]
    } else {
      component.median = (component.median[medianLength / 2 - 1] + component.median[medianLength / 2]) / 2
    }

    // Delete ignore filed
    delete component.ignore

    // Save in output doc
    doc.components[i] = component
  }


  /**
   * Title function for case sensitivity
   */
  title(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }
}

module.exports = Statistics
