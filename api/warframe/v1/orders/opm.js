const Endpoint = require('cubic-api/endpoint')
const moment = require('moment')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

/**
 * Orders per minute. This data is used for the 'active traders' chart.
 */
class Opm extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = "Orders per minute. This data is used for the 'active traders' chart."
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by. If no item is specified, the data for all items is returned.'
      }
    ]
    this.schema.response = {
      active: Number,
      intervals: [Number],
      sources: {
        tradeChat: Number,
        wfm: Number
      }
    }
    this.schema.pubsub = {
      url: '/warframe/v1/orders/opm',
      response: this.schema.response
    }
  }

  async main (req, res) {
    const item = req.query.item ? title(req.query.item) : undefined
    const data = await this.filter(item)
    res.send(data)
    this.cache(data, 5)
    this.publish(data)
  }

  async filter (item) {
    const now = moment()
    const queryStart = new Date(new Date() - 1000 * 60 * 25)
    const query = {
      ...{ createdAt: { $gte: queryStart } },
      ...(item ? { item } : {})
    }
    const parallel = []

    // Intervals
    parallel.push(this.db.collection('orders').aggregate([
      { $match: query },
      {
        $group: {
          _id: {
            $toDate: {
              $subtract: [
                { $toLong: '$createdAt' },
                { $mod: [{ $toLong: '$createdAt' }, 1000 * 60] }
              ]
            }
          },
          count: { $sum: 1 }
        }
      }
    ]).toArray())

    // Sources
    parallel.push(this.db.collection('orders').aggregate([
      { $match: query },
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 }
        }
      }
    ]).toArray())

    // Most traded item
    if (!item) {
      parallel.push(this.db.collection('orders').aggregate([
        { $match: { createdAt: { $gte: new Date(new Date() - 1000 * 60 * 5) } } },
        {
          $group: {
            _id: '$item',
            count: { $sum: 1 }
          }
        },
        {
          $sort: {
            count: -1
          }
        },
        { $limit: 4 }
      ]).toArray())
    }
    await Promise.all(parallel)

    const minutes = await parallel[0]
    const distribution = await parallel[1]
    const tc = distribution.find(e => e._id === 'Trade Chat')
    const tradechat = tc ? tc.count : 0
    const wfm = distribution.find(e => e._id === 'Warframe Market')
    const wfmarket = wfm ? wfm.count : 0
    const sources = wfmarket || tradechat ? {
      tradeChat: tradechat / (tradechat + wfmarket),
      wfm: wfmarket / (tradechat + wfmarket)
    } : {
      tradeChat: 0.5,
      wfm: 0.5
    }
    const items = item ? null : await parallel[2]
    const active = minutes.slice(0, 5).reduce((a, b) => a + b.count, 0)
    const intervals = []
    const mostTraded = []

    for (let i = 25; i; i--) {
      const minute = minutes.find(m => now.diff(moment(m._id), 'minutes') === i)
      intervals.push(minute ? minute.count : 0)
    }
    if (!item) {
      for (const item of items) {
        mostTraded.push({ item: item._id, amount: item.count })
      }
    }

    return { active, sources, intervals, ...(mostTraded.length ? { mostTraded } : {}) }
  }
}

module.exports = Opm
