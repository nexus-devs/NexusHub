const Endpoint = cubic.nodes.warframe.core.Endpoint
const moment = require('moment')

/**
 * Orders per minute. This data is used for the 'active traders' chart.
 */
class Opm extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = "Orders per minute. This data is used for the 'active traders' chart."
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by. If no item is specified, the data for all items is returned.'
      }
    ]
    this.schema.response = []
  }

  async main (req, res) {
    const item = req.query.item
    const { active, intervals, sources } = await this.filter(item)
    res.send({ active, intervals, sources })
    this.cache({ active, intervals, sources }, 60)
  }

  async filter (item) {
    const queryStart = new Date() - 1000 * 60 * 25
    const query = item ? {
      item: new RegExp('^' + item + '$', 'i'),
      createdAt: {
        $gte: new Date(queryStart)
      }
    } : {
      createdAt: {
        $gte: new Date(queryStart)
      }
    }
    const orders = await this.db.collection('orderHistory').find(query).toArray()
    const { intervals, sources } = this.getIntervals(orders)
    const mostTraded = item ? null : this.getMostTraded(orders)
    const active = orders.reverse().findIndex(o => new Date(o.createdAt) < new Date() - 1000 * 60 * 5) + 1 || orders.length

    return Object.assign({ active, intervals: intervals.reverse(), sources },
      !item ? { mostTraded } : {})
  }

  /**
   * Get intervals for bar chart
   */
  getIntervals (orders) {
    const queryStart = new Date() - 1000 * 60 * 25
    const queryEnd = new Date()
    const queryTotal = queryEnd - queryStart
    const intervals = []
    const n = 25
    let tradeChat = 0
    let wfm = 0

    for (let i = 2; i <= n; i++) {
      const intervalStart = moment(queryEnd - (queryTotal / n) * i).endOf('minute').valueOf()
      const intervalEnd = moment(queryEnd - (queryTotal / n) * (i - 1)).endOf('minute').valueOf()
      let quantity = 0

      for (let order of orders) {
        // TODO add list of most traded items if all items are selected
        if (order.createdAt < intervalEnd && order.createdAt > intervalStart) {
          quantity++

          if (i <= 5) {
            if (order.source === 'Trade Chat') {
              tradeChat++
            } else {
              wfm++
            }
          }
        }
      }
      intervals.push(quantity)
    }

    // Get percentage for order sources
    const sources = tradeChat || wfm ? {
      tradeChat: tradeChat / (tradeChat + wfm),
      wfm: wfm / (tradeChat + wfm)
    } : {
      tradeChat: 0.5,
      wfm: 0.5
    }

    return { intervals, sources }
  }

  /**
   * Get most traded items if no item is specified
   */
  getMostTraded (orders) {
    const items = []

    for (let order of orders) {
      const i = items.findIndex(o => o.item === order.item)

      if (new Date(order.createdAt) > new Date() - 1000 * 60 * 5) {
        if (i < 0) {
          items.push({
            item: order.item,
            amount: 1
          })
        } else {
          items[i].amount++
        }
      }
    }
    items.sort((a, b) => a.amount < b.amount ? 1 : -1)
    return items.slice(0, 4)
  }
}

module.exports = Opm
