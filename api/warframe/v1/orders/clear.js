const _ = require('lodash')
const Endpoint = require('cubic-api/endpoint')
const { ObjectId } = require('mongodb')
const Orders = require('./index.js')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Order extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Removes outdated orders, updates online status of users from other platforms.'
    this.schema.scope = 'write_orders_warframe'
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to filter',
        required: true
      }
    ]
    this.schema.request = '/warframe/v1/orders/clear?item=frost%20prime'
    this.schema.response = {
      discarded: Number,
      updated: Number
    }
  }

  /**
   * Clears database from outdated orders. Orders are outdated on the following
   * conditions:
   * - More than ~10min old (Trade Chat)
   * - User not in-game (WFM/(Trade Chat))
   * - Order removed (WFM)
   * This also edits any edited\ orders on WFM
   */
  async main (req, res) {
    const item = title(req.query.item)
    const orders = await this.db.collection('activeOrders').find({ item }).project({
      _id: 1,
      user: 1,
      price: 1,
      offer: 1,
      component: 1,
      quantity: 1,
      online: 1,
      createdAt: 1,
      source: 1,
      wfmName: 1
    }).toArray()
    if (!orders.length) {
      return res.send({ discarded: 0, updated: 0, total: 0 })
    }
    const discard = []
    const update = []
    const components = []

    // Gather components and their orders
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i]
      const found = components.find(c => c.name === order.component)

      if (found) {
        found.orders.push(order)
      } else {
        components.push({
          name: order.component,
          orders: [order]
        })
      }
    }

    // Process Components
    for (const component of components) {
      await this.clear(component, discard, update)
    }

    // Store new results
    const parallel = []
    parallel.push(this.discard(discard))
    parallel.push(this.update(update))
    await Promise.all(parallel)

    if (discard.length + update.length > 0) {
      const options = { ws: this.ws, db: this.db, cache: this.cc }
      const ordersEndpoint = new Orders({ ...options, ...{ url: `/warframe/v1/orders?item=${item}` } })
      const result = await ordersEndpoint.find(item)
      ordersEndpoint.publish(result)
      ordersEndpoint.cache(result, 60)
    }

    res.send({
      discarded: discard.length,
      updated: update.length,
      total: orders.length
    })
  }

  /**
   * Clear orders on a per-component basis
   */
  async clear (component, discard, update) {
    // const wfmOrder = component.orders.find(o => o.wfmName)
    // if (!wfmOrder) return
    // const wfmName = wfmOrder.wfmName
    // let wfmOrders

    // if (wfmName) {
    // const WfmOrders = await request(`https://api.warframe.market/v1/items/${wfmName}/orders`)
    // wfmOrders = JSON.parse(WfmOrders).payload.orders
    // }

    for (let i = 0; i < component.orders.length; i++) {
      const order = component.orders[i]

      // if (wfmName && order.source === 'Warframe Market') {
      //   const discarded = this.applyOutdatedWfmOrder(discard, order, wfmOrders)
      //   if (!discarded) this.applyModifiedWfmOrder(update, order, wfmOrders)
      // }

      if (order.source === 'Trade Chat') {
        this.applyOutdatedOrder(discard, order, component.orders)
      }
    }
  }

  /**
   * Remove outdated trade chat order
   */
  applyOutdatedOrder (discard, order, orders) {
    const discardAfter = (1000 * 60 * 10) + ((100 - orders.length) * 1000 * 5)
    const discarded = new Date() - order.createdAt > discardAfter
    if (discarded) {
      discard.push(new ObjectId(order._id))
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
      const notExpired = new Date() - order.createdAt < 1000 * 60 * 60 * 24 * 7
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
      return matchesOffer && matchesUser
    })
    if (target) {
      const clone = _.cloneDeep(order)
      let modified

      // Modified price
      if (order.price !== target.platinum) {
        clone.price = target.platinum
        modified = true
      }

      // Modified quantity
      if (order.quantity !== target.quantity) {
        clone.quantity = target.quantity
        modified = true
      }

      // Modified online status
      const online = target.user.status === 'ingame'
      if (order.online && !online) {
        clone.online = false
        modified = true
      }
      if (!order.online && online) {
        clone.online = true
        modified = true
      }

      if (modified) update.push(clone)
    }
  }

  /**
   * Discard filtered results
   */
  async discard (discard) {
    if (discard.length) {
      await this.db.collection('activeOrders').deleteMany({ _id: { $in: discard } })
    }
  }

  /**
   * Update modified results
   */
  async update (update) {
    if (update.length) {
      const bulk = this.db.collection('activeOrders').initializeUnorderedBulkOp()

      for (const object of update) {
        const _id = new ObjectId(object._id)
        delete object._id
        bulk.find({ _id }).updateOne({ $set: object })
      }
      return bulk.execute()
    }
  }
}

module.exports = Order
