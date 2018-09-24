const moment = require('moment')
const _ = require('lodash')

/**
 * Helper for handling pre-compiled data, such as item prices, busy hours, etc.
 * Generally you'll probably need this if you wanna store data for every day
 * in the past.
 * Note: This assume that every saved document has a "createdAt" key for the
 * saved date.
 *
 * You will also have to ensure the following compound index for `${collection}Aggregation`:
 * { ...query, { createdAt: 1, scope: 1 } }
 */
class Aggregator {
  constructor (db) {
    this.db = db
  }

  /**
   * Checks if the collection contains data for every day until now.
   * Quick rundown on params, since they're not necessarily obvious:
   * collection: Collection to query in. We'll use collection + 'Aggregation' to save compiled data
   * query: query object to identify target documents.
   * timerange: array of [firstDay, lastDay] as integers. If firstDay is > 0, we won't calculate hours.
   * aggregateFn: Aggregation function which is run within every day/hour that's not calculated yet. Returned data will be stored.
   * params: Aggregation function parameters as object.
   */
  async get (collection, query, timerange, aggregateFn, params) {
    // Dates are confusing, so we'l correct any order issue that may occur.
    // This simply switches the values so the first value is where we start and
    // the second value is how many days ago we'll stop.
    timerange = timerange[0] > timerange[1] ? [timerange[1], timerange[0]] : timerange
    const now = moment().subtract(timerange[0], 'days')
    const parallel = [
      this.getDaily(collection, query, timerange, aggregateFn, params, now),
      this.getHourly(collection, query, timerange, aggregateFn, params, now)
    ]
    await Promise.all(parallel)

    // Note: We await here not to actually wait, but to get the actual promise value.
    // No idea why JS is weird like this.
    const { days, additionalDays } = await parallel[0]
    const { hours, additionalHours } = await parallel[1]

    // Store newly calculated aggregation and remove old hourly data.
    const additional = additionalDays.concat(additionalHours)
    await this.cleanup(additional, collection, timerange, now)

    // Parse into more usable shape for users, rather than what we need for
    // the database.
    const all = days.concat(additionalDays).concat(hours).concat(additionalHours)
    return this.parse(all, query)
  }

  /**
   * Get daily data up to current day. From there we calculate in hours.
   */
  async getDaily (collection, query, timerange, aggregateFn, params, now) {
    const { existing: days, additional: additionalDays } = await this.getData(collection, query, timerange, aggregateFn, params, now, 'day')
    return { days, additionalDays }
  }

  /**
   * Calculate hours, but only if we're not starting in the past.
   */
  async getHourly (collection, query, timerange, aggregateFn, params, now) {
    if (timerange[0] === 0) {
      const hoursEnd = now.clone().startOf('day')
      const hoursTimerange = [0, now.clone().diff(hoursEnd, 'hours')]
      const { existing: hours, additional: additionalHours } = await this.getData(collection, query, hoursTimerange, aggregateFn, params, now, 'hour')
      return { hours, additionalHours }
    } else {
      return { hours: [], additionalHours: [] }
    }
  }

  /**
   * Wrapper function that gets data for given time scope
   */
  async getData (collection, query, timerange, aggregateFn, params, now, scope) {
    const range = timerange[1] - timerange[0]
    const past = timerange[0] > 0
    const end = now.clone().subtract(timerange[1], scope + 's').startOf(scope)
    const timeCovered = await this.getTimeCovered(collection, query, now, end, scope)
    const existing = await this.getExisting(collection, query, timeCovered, end, scope)
    const additional = []
    const parallel = []

    for (let i = timeCovered + 1; past || scope === 'hour' ? i <= range : i < range; i++) {
      parallel.push(this.getNonExisting(query, aggregateFn, params, scope, end, additional, i))
    }
    await Promise.all(parallel)

    return { existing, additional }
  }

  /**
   * Get the latest aggregation, so we know from which point in time to start
   * aggregating new data.
   */
  async getTimeCovered (collection, query, start, end, scope) {
    const latestAggregation = (await this.db.collection(collection + 'Aggregation').find({
      ...{
        createdAt: { $gte: end.toDate(), $lte: start.toDate() },
        scope
      },
      ...query
    }).sort({
      createdAt: -1
    }).limit(1).toArray())[0]

    if (latestAggregation) {
      const latestDate = new Date(latestAggregation.createdAt)
      return moment(latestDate).endOf(scope).diff(end, scope + 's')
    } else {
      return 0
    }
  }

  /**
   * Get existing aggregation data.
   */
  async getExisting (collection, query, covered, end, scope) {
    return this.db.collection(collection + 'Aggregation').find({
      ...{
        createdAt: {
          $gte: end.toDate(),
          $lte: end.clone().add(covered, scope + 's').endOf(scope).toDate()
        },
        scope
      },
      ...query
    }).toArray()
  }

  /**
   * Aggregate data for not-yet-covered days/hours.
   */
  async getNonExisting (query, aggregateFn, params, scope, end, additional, i) {
    const aggregateStart = end.clone().add(i, scope + 's').startOf(scope)
    const aggregateEnd = aggregateStart.clone().endOf(scope)
    const data = await aggregateFn(aggregateStart, aggregateEnd, params)

    additional.push({
      ...{
        data,
        createdAt: new Date(aggregateStart.toDate()),
        scope
      },
      ...query
    })
  }

  /**
   * Store new data and remove old hourly data.
   */
  async cleanup (additional, collection, timerange, now) {
    const end = now.clone().subtract(timerange, 'days').startOf('day')

    if (additional.length) {
      this.db.collection(collection + 'Aggregation').remove({
        scope: 'hours',
        createdAt: { $lte: end.toDate() }
      })
      // Remove last (current) hour, so we always force that one to update.
      if (additional[additional.length - 1].scope === 'hours') {
        additional.pop()
      }
      await this.db.collection(collection + 'Aggregation').insertMany(additional)
    }
  }

  /**
   * Parse into more usable shape for users, rather than what we need for
   * the database.
   */
  parse (all, query) {
    let data = {
      ...{
        avg: {},
        days: [],
        hours: []
      },
      ...query
    }

    // Calculate averages for returned data.
    data = { ...data, ...this.parseValues(all, data) }

    // Get day/hour entries
    for (const entry of all) {
      if (entry.scope === 'day') data.days.push(entry.data)
      if (entry.scope === 'hour') data.hours.push(entry.data)
    }
    return data
  }

  /**
   * Get average, min, max, sum values for individual days. I can't imagine
   * you'd use this aggregator without the intent of getting these values in the
   * end, so we'll just automate it here.
   */
  parseValues (all, data) {
    const groups = []
    const result = {
      sum: {},
      min: {},
      max: {},
      avg: {}
    }

    // Aggregate all Groups
    for (const entry of all) {
      for (const group of entry.data) {
        const id = group._id.toLowerCase()
        const target = groups.find(g => g.id === id)

        if (target) {
          target.data.push(group)
        } else {
          groups.push({ id, data: [group] })
        }
      }
    }

    // Get average, min, max, sum for all days + hours
    for (let group of groups) {
      if (!result.sum[group.id]) result.sum[group.id] = {}
      if (!result.min[group.id]) result.min[group.id] = {}
      if (!result.max[group.id]) result.max[group.id] = {}
      if (!result.avg[group.id]) result.avg[group.id] = {}

      for (let key of Object.keys(group.data[0])) {
        if (typeof group.data[0][key] !== 'number') continue

        result.sum[group.id][key] = _.sumBy(group.data, d => d[key])
        result.min[group.id][key] = _.minBy(group.data, d => d[key])[key]
        result.max[group.id][key] = _.maxBy(group.data, d => d[key])[key]
        result.avg[group.id][key] = Math.round(_.meanBy(group.data, d => d[key]))
      }
    }

    return result
  }

  /**
   * EXPERIMENTAL: Retrieves parsed values for certain aggregation groups by
   * min/max/avg/sum. I'm not sure if this actually makes sense for many
   * endpoints, but who knows, it's there now and we need it for prices.
   */
  reduce (full, group, schema) {
    const res = {}

    // Summarized values from each day
    // `full` is equal to the results from parseValues
    for (const key of Object.keys(schema)) {
      const data = full[schema[key]][group]

      if (data) {
        res[key] = data[key]
      } else {
        res[key] = this.generateDefault(schema)[key]
      }
    }

    // Adding each day/hour as well
    res.days = full.days.map(i => this.getIntervalByGroup(i, group, schema))
    res.hours = full.hours.map(i => this.getIntervalByGroup(i, group, schema))

    // Add hours as day
    if (res.hours.length) {
      res.days.push(this.reduceHours(res.hours, schema))
    }

    return res
  }

  /**
   * Reduce data from hours into a day
   */
  reduceHours (hours, schema) {
    const day = {}

    for (const key of Object.keys(schema)) {
      const val = schema[key]

      if (val === 'sum') {
        day[key] = _.sumBy(hours, h => h[key])
      }
      else if (val === 'min') {
        const min = _.minBy(hours, h => h[key])
        day[key] = min ? min[key] : null
      }
      else if (val === 'max') {
        const max = _.maxBy(hours, h => h[key])
        day[key] = max ? max[key] : null
      }
      else if (val === 'avg') {
        day[key] = Math.round(_.meanBy(hours, h => h[key]))
      }
    }

    return day
  }

  /**
   * Days are stored as [<group1>, <group2>], so we assign them individually
   * to the parent object.
   */
  getIntervalByGroup (i, group, schema) {
    const data = i.find(e => e._id ? e._id.toLowerCase() === group : false)

    if (data) {
      delete data._id
      return data
    } else {
      return this.generateDefault(schema)
    }
  }

  generateDefault (schema) {
    const res = {}

    for (const key of Object.keys(schema)) {
      res[key] = schema[key] === 'sum' ? 0 : null
    }
    return res
  }
}

module.exports = Aggregator
