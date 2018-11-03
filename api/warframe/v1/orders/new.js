const Endpoint = cubic.nodes.warframe.core.Endpoint
const Orders = require('./index.js')
const Opm = require('./opm.js')
const User = require('../users/new.js')
const Prices = require('../items/prices.js')
const Detailed = require('./history.js')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Order extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Stores a new order to the database.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_orders_warframe'
    this.schema.url = '/warframe/v1/orders'
    this.schema.request = {
      body: {
        user: '[DE]Glen',
        offer: 'Buying',
        item: 'Nikana Prime',
        component: 'Set',
        price: 900,
        rank: 0,
        quantity: 1,
        message: 'Hello, I\'m Glen and I\'d like to buy Ammo Drum for 900p. I won\'t ban you, promise.',
        source: 'Trade Chat'
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const request = req.body
    const parallel = []
    const item = title(request.item)
    const stored = await this.db.collection('items').findOne({ name: item })
    const _res = { send () {} }
    _res.status = () => res
    const runParallel = (fn) => {
      parallel.push(fn.bind(this)())
    }

    // Item not found or price is ridiculous
    if (!stored) {
      return res.send(`Rejected. (${request.item} not found)`)
    }
    const component = stored.components.find(c => c.name === request.component)
    if (!component) {
      return res.send(`Rejected. (${request.component} is not a component)`)
    }
    const plat = component.prices[request.offer.toLowerCase()].current.median
    const isRidiculous = request.price && plat ? request.price < plat * 0.3 || request.price > plat * 3 : false

    if (isRidiculous) {
      return res.send('Rejected. (Ridiculous price)')
    }

    // Process offer
    request.createdAt = new Date()
    this.publish(request)
    await this.db.collection('activeOrders').insertOne(request)
    await this.db.collection('orders').insertOne(request)
    const opm = new Opm(this.api, this.db, `/warframe/v1/orders/opm?item=${item}`)

    // Create user if they don't already exist
    runParallel(async () => {
      const t0 = new Date()
      const user = new User(this.api, this.db, `/warframe/v1/users/${request.user}`)
      await user.addUser({
        name: request.user,
        online: true
      })
      console.log('user: ', new Date() - t0)
    })

    // Update OPM for this item
    runParallel(async () => {
      const t0 = new Date()
      const opmData = await opm.filter(item)
      console.log('opm-item: ', new Date() - t0)
      opm.publish(opmData)
      opm.cache(opmData, 60)
    })

    // Update OPM for all items
    runParallel(async () => {
      const t0 = new Date()
      const opmAll = new Opm(this.api, this.db, `/warframe/v1/orders/opm`)
      const opmDataAll = await opm.filter()
      console.log('opm-all: ', new Date() - t0)
      opmAll.publish(opmDataAll)
      opmAll.cache(opmDataAll, 60)
    })

    // Update offer list
    runParallel(async () => {
      const t0 = new Date()
      const orders = new Orders(this.api, this.db, `/warframe/v1/orders?item=${item}`)
      const { result, discard } = await orders.filter(item)
      console.log('orders: ', new Date() - t0)
      orders.publish(result)
      orders.cache(result, 60 * 3)
      orders.discard(discard)
    })

    // Update prices
    runParallel(async () => {
      const t0 = new Date()
      const prices = new Prices(this.api, this.db, `/warframe/v1/items/${item}/prices`)
      const priceData = await prices.get(item, 7, stored)
      console.log('prices: ', new Date() - t0)
      prices.cache(priceData, 60 * 60 * 24)
      prices.store(item, priceData, stored)
    })

    // Update detailed price data
    runParallel(async () => {
      const t0 = new Date()
      const detailed = new Detailed(this.api, this.db, `/warframe/v1/orders/history?item=${item}&component=${component.name}`)
      const history = await detailed.get(item, component.name)
      console.log('detailed: ', new Date() - t0)
      detailed.cache(history, 60 * 60)
    })

    await Promise.all(parallel)
    res.send('added!')
  }
}

module.exports = Order
