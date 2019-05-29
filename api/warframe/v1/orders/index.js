const Endpoint = require('cubic-api/endpoint')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Orders extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Returns all open orders for a specified item. Usage of this data for commerical purposes must be discussed with us before.'
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

  async main (req, res) {
    const item = req.query.item
    const result = await this.find(title(item))
    res.send(result)
    this.cache(result, 60)
  }

  async find (item) {
    return this.db.collection('activeOrders').find({ item, online: true }).toArray()
  }
}

module.exports = Orders
