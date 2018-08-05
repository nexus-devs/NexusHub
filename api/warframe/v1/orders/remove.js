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
        item: 'nikana_prime_set',
        discard: [{ _id: '5b62bb90c1778d2b40f0c995' }]
      }
    }
    this.schema.response = 'deleted!'
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
    res.send('deleted!')
  }
}

module.exports = Order
