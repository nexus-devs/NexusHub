const Endpoint = cubic.nodes.warframe.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Returns all open orders for a speciified item component.'
    this.schema.url = '/warframe/v1/orders'
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by.',
        required: true
      }
    ]
    this.schema.response = []
  }

  /**
   * Find all orders, check which ones are still valid (if trade chat orders)
   * and remove those that aren't. Removed orders are put into the offerHistory
   * collection instead. Offers from other sources are managed through websocket
   * listeners.
   */
  async main (req, res) {
    const item = req.query.item
    const { result, discard } = await this.filter(item)
    res.send(result)
    this.discard(discard)
  }

  async filter (item) {
    const orders = await this.db.collection('orders').find({ item: new RegExp(item, 'i') }).toArray()
    const discardAfter = (1000 * 60 * 3) + ((3000 - orders.length) * 10)
    const discard = []
    const result = []

    for (let offer of orders) {
      if (offer.source === 'Trade Chat') {
        const discarded = new Date() - discardAfter > offer.createdAt
        discarded ? discard.push(offer) : result.push(offer)
      }
    }
    return { result, discard }
  }

  async discard (discard) {
    if (discard.length) {
      for (let discarded of discard) {
        this.db.collection('orders').removeOne({ _id: discarded._id })
        delete discarded._id
      }
      this.db.collection('orderHistory').insertMany(discard)
    }
  }
}

module.exports = Index
