const Endpoint = cubic.nodes.warframe.core.Endpoint
const Orders = require('./index.js')
const User = require('../users/new.js')
const _ = require('lodash')

class Order extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.method = 'POST'
    // this.schema.scope = 'write_requests_warframe' // DEBUG uncomment this if you see this.
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
    this.schema.response = 'added!'
    this.schema.pubsub = {
      url: '/warframe/v1/orders',
      body: this.schema.request
    }
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main (req, res) {
    const request = req.body

    // Process offer
    request.createdAt = new Date()
    this.publish(_.cloneDeep(request), '/warframe/v1/orders')
    this.db.collection('orders').insertOne(request)
    res.send('added!')

    // Create user if they don't already exist
    const user = new User(this.api, this.db, `warframe/v1/users/${request.user}`)
    await user.addUser({
      name: request.user,
      online: true
    })

    // Update offer list
    const item = request.item
    const orders = new Orders(this.api, this.db, `/warframe/v1/orders?item=${item}`)
    const { result, discard } = await orders.filter(item)
    orders.publish(result)
    orders.cache(result, 1000 * 60 * 5)
    orders.discard(discard)
  }
}

module.exports = Order
