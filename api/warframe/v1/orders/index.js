const Endpoint = cubic.nodes.warframe.core.Endpoint
const { ObjectId } = require('mongodb')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Orders extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Returns all open orders for a specified item.'
    this.schema.url = '/warframe/v1/orders'
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by.',
        required: true
      }
    ]
    this.schema.request = { url: '/warframe/v1/orders?item=Nikana%20Prime' }
    this.schema.response = [{
      _id: String,
      user: String,
      offer: String,
      item: String,
      component: String,
      price: Number,
      quantity: Number,
      source: String,
      createdAt: String
    }]
    this.schema.pubsub = {
      url: '/warframe/v1/orders',
      response: this.schema.response
    }
  }

  /**
   * Find all orders, check which ones are still valid (if trade chat orders)
   * and remove those that aren't. Removed orders are put into the orderHistory
   * collection instead. Orders from other sources are managed through websocket
   * listeners.
   */
  async main (req, res) {
    const item = req.query.item
    const offline = req.query.offline
    const { result, discard } = await this.filter(item, offline)

    res.send(result)
    this.discard(discard)
    this.cache(result, 60 * 60 * 24)
  }

  /**
   * Filter by outdated trade chat offers or online status on trading sites
   */
  async filter (item, offline) {
    const orders = await this.db.collection('activeOrders').find({ item: title(item) }).toArray()
    const discardAfter = (1000 * 60 * 10) + ((3000 - orders.length) * 10)
    const usercheck = []
    const discard = []
    const result = []

    // Clear chat orders directly, store active users in array so we can query
    // them all at once later on and compare.
    for (let order of orders) {
      if (order.source === 'Trade Chat') {
        const discarded = new Date() - discardAfter > order.createdAt
        if (discarded) {
          discard.push(new ObjectId(order._id))
        } else {
          const exists = result.find(o => o.user === order.user && o.item === order.item && o.component === order.component)
          if (!exists) result.push(order)
        }
      } else {
        if (!usercheck.includes(order.user)) usercheck.push(order.user)
      }
    }

    // Second pass, get users and remove offline orders
    const users = await this.db.collection('users').find({ name: { $in: usercheck } }).toArray()

    for (let order of orders) {
      if (order.source !== 'Trade Chat') {
        const exists = result.find(o => o.user === order.user && o.item === order.item && o.component === order.component)
        const user = users.find(u => u.name === order.user)
        if (!exists && user && user.online) result.push(order)
      }
    }

    return { result, discard }
  }

  /**
   * Discard filtered results
   */
  async discard (discard) {
    if (discard.length) {
      await this.db.collection('activeOrders').remove({ _id: { $in: discard } })
    }
  }
}

module.exports = Orders
