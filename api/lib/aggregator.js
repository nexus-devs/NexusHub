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
 * { ...query, ...{ createdAt: 1, scope: 1 } }
 */
class Aggregator {
  constructor (db) {
    this.db = db
  }

  /**
   * Checks if the collection contains data for every day until now.
   * Quick rundown on params, since they're not necessarily obvious:
   *
   * collection: Collection to query in. We'll use collection + 'Aggregation' to save compiled data
   * query: query object to identify pre-aggregated documents by.
   * timerange: array of [firstDay, lastDay] as integers. If firstDay is > 0, we won't calculate hours.
   * aggregateFn: Aggregation function which is run for every day/hour that's not calculated yet. Returned data will be stored.
   * params: Aggregation function parameters as object.
   */
  async get (collection, query, timerange, aggregateFn, params) {
    // Dates are confusing, so we'll correct any order issue that may occur.
    // This switches the values so the first value is where we start and
    // the second value is how many days ago we'll stop.
    timerange = timerange[0] > timerange[1] ? [timerange[1], timerange[0]] : timerange
    const start = moment.utc().subtract(timerange[0], 'days')
    const parallel = [
      this.getDaily(collection, query, timerange, aggregateFn, params, start),
      this.getHourly(collection, query, timerange, aggregateFn, params, start)
    ]
    await Promise.all(parallel)

    // Note: We await here not to actually wait, but to get the actual promise value.
    // No idea why JS is weird like this.
    const { days, additionalDays } = await parallel[0]
    const { hours, additionalHours } = await parallel[1]

    // Store newly calculated aggregation and remove old hourly data.
    const additional = additionalDays.before.concat(additionalDays.after)
      .concat(additionalHours.before).concat(additionalHours.after)

    await this.cleanup(query, additional, collection, timerange, start)

    // Parse into more usable shape for users, rather than what we need for
    // the database.
    const all = additionalDays.before.concat(days).concat(additionalDays.after)
      .concat(additionalHours.before).concat(hours).concat(additionalHours.after)

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
  async getHourly (collection, query, timerange, aggregateFn, params, start) {
    if (timerange[0] === 0) {
      const hoursEnd = start.clone().startOf('day')
      const hoursTimerange = [0, start.clone().diff(hoursEnd, 'hours')]
      const { existing: hours, additional: additionalHours } = await this.getData(collection, query, hoursTimerange, aggregateFn, params, start, 'hour')
      return { hours, additionalHours }
    } else {
      return { hours: [], additionalHours: { before: [], after: [] } }
    }
  }

  /**
   * Wrapper function that gets data for given time scope
   */
  async getData (collection, query, timerange, aggregateFn, params, start, scope) {
    const past = timerange[0] > 0
    const range = timerange[1] - timerange[0]
    const end = start.clone().subtract(range, scope + 's').startOf(scope)
    const timeCovered = await this.getTimeCovered(collection, query, start, end, scope)
    if (scope === 'hour' && timeCovered[1] === range) timeCovered[1]-- // Always recalculate current hour
    const existing = timeCovered[1] > 0 ? await this.getExisting(collection, query, timeCovered, end, scope) : []
    const additional = {
      before: [],
      after: []
    }
    const parallel = []

    // Get data before covered range
    if (timeCovered[0] <= range) {
      for (let i = 0; i < timeCovered[0]; i++) {
        parallel.push(this.getNonExisting(query, aggregateFn, params, scope, end, additional.before, i))
      }
    }

    // Get data after covered range. i <= range when the scope is an hour because
    // we'll always want to recalculate the current hour.
    for (let i = timeCovered[1] + 1; past || scope === 'hour' ? i <= range : i < range; i++) {
      parallel.push(this.getNonExisting(query, aggregateFn, params, scope, end, additional.after, i))
    }
    await Promise.all(parallel)
    return { existing, additional }
  }

  /**
   * Get the oldest to latest aggregations, so we know from which point in time
   * to start aggregating new data.
   */
  async getTimeCovered (collection, query, start, end, scope) {
    const find = async (order) => (await this.db.collection(collection + 'Aggregation').find({
      ...{
        createdAt: { $gte: end.toDate(), $lte: start.toDate() },
        scope
      },
      ...query
    }).sort({
      createdAt: order
    }).limit(1).toArray())[0]
    const oldestAggregation = await find(1)
    const latestAggregation = oldestAggregation ? await find(-1) : null // Don't find nothing twice

    // -1 because the algorithm will go with result[1] + 1 until timerange.
    // So with no time being covered, we'll want to start from 0.
    const result = [0, -1]

    if (oldestAggregation) {
      result[0] = moment(oldestAggregation.createdAt).endOf(scope).diff(end, scope + 's')
    }
    if (latestAggregation) {
      result[1] = moment(latestAggregation.createdAt).endOf(scope).diff(end, scope + 's')
    }

    return result
  }

  /**
   * Get existing aggregation data.
   */
  async getExisting (collection, query, covered, end, scope) {
    return this.db.collection(collection + 'Aggregation').find({
      ...{
        createdAt: {
          $gte: end.clone().add(covered[0], scope + 's').startOf(scope).toDate(),
          $lte: end.clone().add(covered[1], scope + 's').endOf(scope).toDate()
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
  async cleanup (query, additional, collection, timerange, now) {
    const end = now.clone().subtract(timerange, 'days').startOf('day')

    if (additional.length) {
      this.db.collection(collection + 'Aggregation').deleteMany({
        ...query,
        ...{
          scope: 'hours',
          createdAt: { $lte: end.toDate() }
        }
      })
      let currentHour
      if (additional[additional.length - 1].scope === 'hour') {
        currentHour = additional.pop()
      }

      // Additional might be down to zero if only the last hour was new
      if (additional.length) {
        await this.db.collection(collection + 'Aggregation').insertMany(additional)
      }

      // Upsert current hour since it'll always get recalculated.
      if (currentHour) {
        await this.db.collection(collection + 'Aggregation').updateOne({
          ...query,
          ...{
            scope: 'hours',
            createdAt: currentHour.createdAt
          }
        }, {
          $set: currentHour
        }, {
          upsert: true
        })
      }
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
        const id = typeof group._id === 'string' ? group._id.toLowerCase() : group._id.toString()
        const target = groups.find(g => g.id === id)

        if (target) {
          target.data.push(group)
        } else {
          groups.push({ id, data: [group] })
        }
      }
    }

    // Get average, min, max, sum for all days + hours
    for (const group of groups) {
      if (!result.sum[group.id]) result.sum[group.id] = {}
      if (!result.min[group.id]) result.min[group.id] = {}
      if (!result.max[group.id]) result.max[group.id] = {}
      if (!result.avg[group.id]) result.avg[group.id] = {}

      for (const key of Object.keys(group.data[0])) {
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
   * Retrieves min/max/avg/sum values for every key of the entirety of all
   * returned aggregations. This makes it super easy to get some "overview"
   * data from all days combined.
   *
   * `schema` should describe how to parse each key, for example:
   * { orders: 'sum', median: 'avg', min: 'min', max: 'max' }
   * This gets us the sum of all orders, average of all medians, the minimum
   * of all min values and the maximum of all max values.
   *
   * As you might see, this allows for a great deal of flexibility, with queries
   * that get you the least orders at any day through { orders: 'min' }, or even
   * something like getting the highest minimum value through { min: 'max' }
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
        day[key] = Math.round(_.meanBy(hours.filter(h => h[key]), h => h[key]))
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

  /**
   * Generates 'empty' values for the keys specified in the schema, when no other
   * value could be generated.
   */
  generateDefault (schema) {
    const res = {}

    for (const key of Object.keys(schema)) {
      res[key] = schema[key] === 'sum' ? 0 : null
    }
    return res
  }
}

module.exports = Aggregator
