const _ = require('lodash')
const Endpoint = require('cubic-api/endpoint')
const request = require('requestretry').defaults({ fullResponse: false })
const { ObjectId } = require('mongodb')

class Order extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Removes outdated orders, updates online status of users from other platforms.'
    this.schema.scope = 'write_orders_warframe'
    this.schema.response = String
  }

  /**
   * Clears database from outdated orders. Orders are outdated on the following
   * conditions:
   * - More than ~10min old (Trade Chat)
   * - User not in-game (WFM/(Trade Chat))
   * - Order removed (WFM)
   * This also edits any edited orders on WFM
   */
  async main (req, res) {
    const orders = await this.db.collection('activeOrders').find().project({
      _id: 1,
      offer: 1,
      user: 1,
      price: 1,
      quantity: 1,
      createdAt: 1,
      wfmName: 1
    }).toArray()
    const setOnline = []
    const discard = []
    const update = []
    const items = []

    // Use regular for loop here because we have a rather big array and no
    // async in this loop.
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i]
      if (order.source === 'Warframe Market') this.applyOrderedItems(items, order)
      if (order.source === 'Trade Chat') this.applyOutdatedOrder(discard, order, orders)
    }

    // Get listings for all items, then set new online status and remove old orders
    for (const item of items) {
      await this.updateWfmListings(item, discard, update)
    }

    // Store new results
    const parallel = []
    parallel.push(this.discard(discard))
    parallel.push(this.update(update))
    parallel.push(this.setStatus(setOnline, true))
    parallel.push(this.setStatus(setOnline, false))

    await Promise.all(parallel)
    res.send('ok')
  }

  /**
   * Generate a list of all ordered items so we know what to scrape
   * from WFM's API
   */
  applyOrderedItems (items, order) {
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

  /**
   * Remove outdated trade chat order
   */
  applyOutdatedOrder (discard, order, orders) {
    const discardAfter = (1000 * 60 * 10) + ((100 - orders.length) * 1000 * 5)
    const discarded = new Date() - discardAfter > order.createdAt
    if (discarded) {
      discard.push(new ObjectId(order._id))
    }
  }

  /**
   * Delete or modify changed orders on Warframe Market
   */
  async updateWfmListings (item, discard, update) {
    const Orders = await request(`https://api.warframe.market/v1/items/${item.name}/orders`)
    let orders
    try {
      orders = JSON.parse(Orders).payload.orders
    } catch (err) {
      // The WFM API sometimes sends invalid JSON as a result of dropped
      // connections or something, so just continue with the next item
      return
    }

    // Discard closed/outdated orders orders and update modified ones
    for (const order of item.orders) {
      const discarded = this.applyOutdatedWfmOrder(discard, order, orders)
      if (!discarded) this.applyModifiedWfmOrder(update, order, orders)
    }
  }

  /**
   * Discard any outdated orders (closed/too old). If no user with the
   * appropriate item is matched, we can assume that the order is closed.
   */
  applyOutdatedWfmOrder (discard, order, orders) {
    const open = orders.find(o => {
      const matchesOffer = o.order_type === (order.offer === 'Selling' ? 'sell' : 'buy')
      const matchesUser = o.user.ingame_name === order.user
      const notExpired = new Date() - new Date(order.createdAt) < 1000 * 60 * 60 * 24 * 7
      return matchesOffer && matchesUser && notExpired
    })
    if (!open) {
      discard.push(new ObjectId(order._id))
      return true
    }
  }

  /**
   * Generate new order object as the result of changed data on Warframe
   * Market.
   */
  applyModifiedWfmOrder (update, order, orders) {
    const target = orders.find(o => {
      const matchesOffer = o.order_type === (order.offer === 'Selling' ? 'sell' : 'buy')
      const matchesUser = o.user.ingame_name === order.user
    })
    if (target) {
      const clone = _.cloneDeep(order)
      let modified

      // Modified price
      if (order.price !== o.platinum) {
        clone.price = o.platinum
        modified = true
      }

      // Modified quantity
      if (order.quantity !== o.quantity) {
        clone.quantity = o.quantity
        modified = true
      }

      // Modified online status
      /**const online = o.user.status === 'ingame'
      if (order.online && !online) {
        clone.online = false
        modified = true
      }
      if (!order.online && online) {
        clone.online = true
        modified = true
      }**/

      if (modified) update.push(clone)
    }
  }

  /**
   * Discard filtered results
   */
  async discard (discard) {
    if (discard.length) {
      await this.db.collection('activeOrders').remove({ _id: { $in: discard } })
    }
  }

  async update (update) {
    if (update.length) {
      await this.db.collection('activeOrders').updateMany({

      })
    }
  }
}

module.exports = Order
