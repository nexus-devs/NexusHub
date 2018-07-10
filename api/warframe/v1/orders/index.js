const Endpoint = cubic.nodes.warframe.core.Endpoint

class Index extends Endpoint {
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

    if (req.query.all /** && req.user.scp.includes('write_root') **/) {
      res.send(await this.getAll())
    } else {
      const { result, discard } = await this.filter(item)
      res.send(result)
      this.discard(discard)
    }
  }

  async filter (item) {
    const orders = await this.db.collection('orders').find({ item: new RegExp(item, 'i') }).toArray()
    const discardAfter = (1000 * 60 * 3) + ((3000 - orders.length) * 10)
    const discard = []
    const result = []

    for (let order of orders) {
      if (order.source === 'Trade Chat') {
        const discarded = new Date() - discardAfter > order.createdAt
        discarded ? discard.push(order) : result.push(order)
      } else {
        result.push(order)
      }
    }

    for (let order of result) {
      if (order.source !== 'Trade Chat') {
        result.status = await (this.db.collection('users').findOne({ name: order.user })).status
      }
    }
    return { result, discard }
  }

  async discard (discard) {
    if (discard.length) {
      for (let discarded of discard) {
        await this.db.collection('orders').removeOne({ _id: discarded._id })
        delete discarded._id
      }
      await this.db.collection('orderHistory').insertMany(discard)
    }
  }

  async getAll () {
    return this.db.collection('orders').find({}, { user: 1, offer: 1, item: 1, component: 1 }).toArray()
  }
}

module.exports = Index
