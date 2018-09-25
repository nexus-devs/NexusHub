const Endpoint = cubic.nodes.warframe.core.Endpoint
const { ObjectId } = require('mongodb')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Orders extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Returns all open orders for a specified item component.'
    this.schema.url = '/warframe/v1/orders'
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by.',
        required: true
      }, {
        name: 'all',
        description: 'Return all active orders. Won\'t work for public API users.',
        default: false
      }, {
        name: 'offline',
        description: 'Whether offline users should be included.',
        default: false
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
      createdAt: String,
      online: Boolean
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

    if (req.query.all && req.user.scp.includes('write_root')) {
      res.send(await this.getAll())
    } else {
      const { result, discard } = await this.filter(item, offline)
      res.send(result)
      this.discard(discard)
      this.cache(result, 60 * 60 * 24)
    }
  }

  /**
   * Filter by outdated trade chat offers or online status on trading sites
   */
  async filter (item, offline) {
    const orders = await this.db.collection('activeOrders').find({ item: title(item) }).toArray()
    const discardAfter = (1000 * 60 * 10) + ((3000 - orders.length) * 10)
    const discard = []
    const online = []
    const all = []

    for (let order of orders) {
      if (order.source === 'Trade Chat') {
        const discarded = new Date() - discardAfter > order.createdAt
        discarded ? discard.push(order) : all.push(order)
      } else {
        all.push(order)
      }
    }

    for (let order of all) {
      if (order.source !== 'Trade Chat') {
        const user = await this.db.collection('users').findOne({ name: order.user })
        order.online = user ? user.online : false
      }
      if ((!offline && order.online) || order.source === 'Trade Chat') {
        online.push(order)
      }
    }
    return { result: offline ? all : online, discard }
  }

  /**
   * Discard filtered results
   */
  async discard (discard) {
    if (discard.length) {
      for (let discarded of discard) {
        await this.db.collection('activeOrders').deleteOne({ _id: new ObjectId(discarded._id) })
        delete discarded._id
      }
    }
  }

  /**
   * Admin method required for the warframe.market scraper to reduce number of
   * requests that are required.
   */
  async getAll () {
    const orders = await this.db.collection('activeOrders').find().project({ component: 0 }).toArray()
    return orders
  }
}

module.exports = Orders
