const Endpoint = require('cubic-api/endpoint')
const Aggregator = require(`${process.cwd()}/api/lib/aggregator.js`)
const _ = require('lodash')
const moment = require('moment')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Activity extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Trade activity, used for "busy hours". Returned hours are in UTC, so shift the array depending on your offset.'
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by. If no item is specified, the data for all items is returned.'
      }, {
        name: 'timerange',
        default: 30,
        description: 'Days from now to the last order.'
      }
    ]
    this.schema.response = [{
      day: {
        number: Number,
        name: String
      },
      hours: [Number]
    }]
  }

  /**
   * Entrypoint for EndpointController
   */
  async main (req, res) {
    const item = req.query.item ? title(req.query.item) : ''
    const timerange = req.query.timerange + 1
    const data = await this.get(item, timerange)

    this.cache(data, 60 * 60)
    res.send(data)
  }

  /**
   * Main processign method
   */
  async get (item, timerange) {
    const aggregator = new Aggregator(this.db)
    const aggregate = this.aggregate.bind(this)
    const query = { name: `${item || 'all'} Activity` }
    const params = { item }
    const data = await aggregator.get('orders', query, [1, timerange], aggregate, params)
    const days = new Array(7)

    // Get every hour per day
    for (let i = 0; i < data.days.length; i++) {
      const now = moment.utc().subtract(i + 1, 'days')
      const time = {
        number: now.isoWeekday(),
        name: now.format('dddd')
      }
      const day = days[i % 7]

      // No activity - add empty
      if (!data.days[i].length) {
        if (!day) {
          days[i % 7] = { day: time, hours: [] }
        }
        continue
      }

      // Does have activity
      for (const hour of data.days[i]) {
        if (day) {
          day.hours.push(hour)
        } else {
          days[i % 7] = { day: time, hours: [hour] }
        }
      }
    }

    // Get average hour value per day
    const result = []

    for (const day of days) {
      if (day) {
        const hours = []

        for (let i = 0; i < 24; i++) {
          const avg = _.meanBy(day.hours, h => h._id === i ? h.orders : null)
          hours.push(Math.round(avg))
        }
        result.push({ day: day.day, hours })
      }

      // Sort by day
      result.sort((a, b) => {
        return a.day.number > b.day.number ? 1 : -1
      })
    }

    return result
  }

  /**
   * Aggregate function which is run on every day/hour through the aggregator
   */
  async aggregate (start, end, params) {
    const { item } = params
    const result = await this.db.collection('orders').aggregate([
      {
        $match: {
          ...{
            createdAt: { $gte: start.toDate(), $lte: end.toDate() }
          },
          ...(item ? { item } : {})
        }
      },
      {
        $project: {
          createdAt: 1,
          hour: { $hour: '$createdAt' }
        }
      },
      {
        $group: {
          _id: '$hour',
          orders: { $sum: 1 }
        }
      }
    ]).toArray()

    return result
  }
}

module.exports = Activity
