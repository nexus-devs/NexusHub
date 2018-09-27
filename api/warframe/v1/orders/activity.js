const Endpoint = cubic.nodes.warframe.core.Endpoint
const Aggregator = require(`${process.cwd()}/api/lib/aggregator.js`)
const _ = require('lodash')
const moment = require('moment')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Activity extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
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
        name: String,
        number: Number
      },
      hours: [ Number ]
    }]
  }

  /**
   * Entrypoint for EndpointController
   */
  async main (req, res) {
    const item = req.query.item ? title(req.query.item) : ''
    const timerange = req.query.timerange + 1
    const data = await this.get(item, timerange)
    // TODO put some cache here
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
    const data = await aggregator.get('orders', query, [1, timerange + 1], aggregate, params)
    const days = new Array(7)

    // Get every hour per day
    for (let i = 0; i < data.days.length; i++) {
      if (!data.days[i].length) continue

      for (const hour of data.days[i]) {
        const day = days[i % 7]

        if (day) {
          day.hours.push(hour)
        } else {
          const now = moment.utc().subtract(i + 1, 'days')
          const day = {
            number: now.isoWeekday(),
            name: now.format('dddd')
          }
          days[i % 7] = { day, hours: [hour] }
        }
      }
    }

    // Get average hour value per day
    const result = []

    for (let day of days) {
      if (day) {
        const hours = []

        for (let i = 0; i < 24; i++) {
          const avg = _.meanBy(day.hours, h => h._id === i ? h.orders : null)
          hours.push(Math.round(avg))
        }
        result.push({ day: day.day, hours })
      }
    }

    // Sort by day
    result.sort((a, b) => {
      return a.day.number > b.day.number ? 1 : -1
    })

    return result
  }

  /**
   * Aggregate function which is run on every day/hour through the aggregator
   */
  async aggregate (start, end, params) {
    const { item } = params
    const result = await this.db.collection('orders').aggregate([
      { $match: {
        ...{
          createdAt: { $gte: start.toDate(), $lte: end.toDate() }
        },
        ...(item ? { item } : {})
      } },
      { $project: {
        createdAt: 1,
        hour: { $hour: '$createdAt' }
      } },
      { $group: {
        _id: '$hour',
        orders: { $sum: 1 }
      } }
    ]).toArray()

    return result
  }
}

module.exports = Activity
