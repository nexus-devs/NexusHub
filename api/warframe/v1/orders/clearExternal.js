const Endpoint = require('cubic-api/endpoint')
const request = require('requestretry').defaults({ fullResponse: false })
const { ObjectId } = require('mongodb')

class Order extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Removes outdated orders, updates online status of users from other platforms.'
    this.schema.method = 'GET'
    this.schema.scope = 'write_orders_warframe'
    this.schema.response = String
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main (req, res) {
    const orders = await this.db.collection('activeOrders').find({
      source: 'Warframe Market'
    }).project({
      _id: 1,
      offer: 1,
      user: 1,
      createdAt: 1,
      wfmName: 1
    }).toArray()
    const setOnline = []
    const setOffline = []
    const discard = []

    // Get a list of all items in active orders, so we can just get the listings
    const items = []

    for (const order of orders) {
      const item = items.find(i => i.name === order.wfmName)
      if (!item) {
        items.push({
          name: order.wfmName,
          orders: [ order ]
        })
      } else {
        item.orders.push(order)
      }
    }

    // Get listings for all items, then set new online status and remove old orders
    for (const item of items) {
      const WfmOrders = await request(`https://api.warframe.market/v1/items/${item.name}/orders`)
      let wfmOrders
      try {
        wfmOrders = JSON.parse(WfmOrders).payload.orders
      } catch (err) {
        // The WFM API sometimes sends invalid JSON as a result of dropped
        // connections or something, so just continue with the next item
        continue
      }

      for (const order of item.orders) {
        let online

        const open = wfmOrders.find(o => {
          const matchesOffer = o.order_type === (order.offer === 'Selling' ? 'sell' : 'buy')
          const matchesUser = o.user.ingame_name === order.user
          const notExpired = new Date() - new Date(order.createdAt) < 1000 * 60 * 60 * 24 * 3
          online = o.user.status === 'ingame'
          return matchesOffer && matchesUser && online && notExpired
        })

        // Update user status if the order is still open, otherwise discard
        if (open) {
          const queued = setOnline.find(u => u === order.user)
          if (!queued) setOnline.push(order.user)
        } else {
          const queued = setOffline.find(u => u === order.user)
          if (!queued && !online) setOffline.push(order.user)
          discard.push(new ObjectId(order._id))
        }
      }
    }

    // Store new results
    const parallel = []
    parallel.push(this.discard(discard))
    parallel.push(this.setStatus(setOnline, true))
    parallel.push(this.setStatus(setOnline, false))

    await Promise.all(parallel)
    res.send('ok')
  }

  /**
   * Discard filtered results
   */
  async discard (discard) {
    if (discard.length) {
      await this.db.collection('activeOrders').remove({ _id: { $in: discard } })
    }
  }

  /**
   * Set user's online status
   */
  async setStatus (users, online) {
    if (users.length) {
      await this.db.collection('users').updateMany({
        name: { $in: users }
      }, {
        $set: { online }
      })
    }
  }
}

module.exports = Order
