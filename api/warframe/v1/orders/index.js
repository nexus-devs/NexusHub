const Endpoint = cubic.nodes.warframe.core.Endpoint

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
    this.schema.response = []
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

    if (req.query.all /** && req.user.scp.includes('write_root') **/) {
      res.send(await this.getAll())
    } else {
      const { result, discard } = await this.filter(item, offline)
      res.send(result)
      this.discard(discard)
      this.cache(result, 1000 * 60 * 10)
    }
  }

  /**
   * Filter by outdated trade chat offers or online status on trading sites
   */
  async filter (item, offline) {
    const orders = await this.db.collection('orders').find({ item: new RegExp(`^${item}$`, 'i') }).toArray()
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
      delete order.apiName

      if (order.source !== 'Trade Chat') {
        const user = await this.db.collection('users').findOne({ name: order.user })
        order.online = user.online
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
        await this.db.collection('orders').removeOne({ _id: discarded._id })
        delete discarded._id
      }
    }
  }

  /**
   * Admin method required for the warframe.market scraper to reduce number of
   * requests that are required.
   */
  async getAll () {
    const orders = await this.db.collection('orders').find().toArray()

    // Reduce output size. TODO: This should be done through query projections,
    // but for some reason it just doesn't work.
    for (let order of orders) {
      order = {
        user: order.user,
        item: order.item,
        apiName: order.apiName,
        offer: order.offer,
        source: order.source,
        createdAt: order.createdAt
      }
    }
    return orders
  }
}

module.exports = Orders
