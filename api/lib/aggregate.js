const moment = require('moment')

/**
 * Helper for handling pre-compiled data, such as item prices, busy hours, etc.
 * Generally you'll probably need this if you wanna store data for every day
 * in the past.
 * Note: This assume that every saved document has a "createdAt" key for the
 * saved date, as well as a "scope" key for the time scope.
 */
class Aggregate {
  constructor (api, db) {
    this.api = api
    this.db = db
  }

  /**
   * Checks if the collection contains data for every day until now
   */
  async get (collection, timerange, fn) {
    const now = moment()
    const end = now.clone().subtract(timerange, 'days').startOf('day')
    const daysAgo = await this.daysFromLatest(collection, now, end, 'day')
    const existing = await this.db.collection(collection + 'Aggregation').find({
      createdAt: {
        $gte: end,
        $lte: now.clone().subtract(daysAgo, 'days').endOf('day')
      },
      scope: 'day'
    }).toArray()

    // Calculate data for remaining days. i > 0 because we'll calculate daily
    // statistics per hour additionally.
    // TODO: Make this run in parallel
    let additional = []

    for (let i = daysAgo - 1; i > 0; i--) {
      const data = await fn(i)
      additional.push(data)
    }

    // Calculate data for current day.
    for (let i = )


    if (additional.length) {
      await this.db.collection(collection + 'Aggregation').insert(additional)
    }
    return existing.concat(additional)
  }

  /**
   * Get the latest aggregation, so we know from which point in time to start
   * aggregating new data.
   */
  async daysFromLatest (collection, now, end, scope) {
    const latestAggregation = this.db.collection(collection + 'Aggregation').find({
      createdAt: {
        $gte: end.toDate(),
        $lte: now.toDate()
      },
      scope
    }).sort({
      createdAt: -1
    }).limit(1)

    if (latestAggregation) {
      const latestDate = new Date(latestAggregation.createdAt)
      return now.diff(moment(latestDate).startOf('day'), 'days')
    } else {
      return now.diff(end, 'days')
    }
  }
}

module.exports = Aggregate

/**
      const day = now.clone().subtract(i, 'days').startOf('day')
      const stored = await this.db.collection(collection).findOne({
        createdAt: day.toDate()
      })
      if (!stored) {
        // Look for oldest added data and skip loop to that point
        const oldest = await this.db.collection(collection).findOne({
          createdAt: {
            $gte:
          }
        }).sort({
          createdAt: 1,
        }).limit(1)
        const daysAgo = day.diff(moment(oldest.createdAt).startOf('day'), 'days')

        if (daysAgo < timerange) {
          i = daysAgo
        }

        // This assumes the check for history before the first day has been done
        // by now, (that's why we have the reverse for loop)
        const cursorDate = moment().subtract(i, 'days').startOf('day').toDate()
        const data = fn(cursorDate)
        await this.db.collection(collection + 'Aggregation').insert(data)
      }
      **/
