const Endpoint = cubic.nodes.warframe.core.Endpoint
const Orders = require('./index.js')

class Order extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.method = 'DELETE'
    this.schema.scope = 'write_orders_warframe'
    this.schema.url = '/warframe/v1/orders'
    this.schema.request = {
      body: {
        user: '[DE]Glen',
        offer: 'Buying',
        item: 'Ammo Drum',
        component: 'Set',
        price: 900,
        rank: 0,
        quantity: 1,
        message: 'Hello, I\'m Glen and I\'d like to buy Ammo Drum for 900p. I won\'t ban you, promise.',
        source: 'Trade Chat',
        createdAt: new Date()
      }
    }
    this.schema.response = 'removed!'
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main (req, res) {
    const request = req.body
    const item = request.item
    const orders = new Orders(this.api, this.db, `/warframe/v1/orders?item=${item}`)
    await orders.discard(request.discard)
    const { result } = await orders.filter(item)
    orders.publish(result)
    orders.cache(result, 60 * 5)
    res.send('removed!')
  }
}

module.exports = Order
