const Endpoint = require('cubic-api/endpoint')
const Orders = require('./index.js')
const Opm = require('./opm.js')
const User = require('../users/new.js')
const Prices = require('../items/prices.js')
const Cache = require(`${process.cwd()}/api/lib/cache.js`)
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Order extends Endpoint {
  constructor (options) {
    super(options)
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
        source: 'Trade Chat',
        createdAt: new Date()
      }
    }
    this.schema.response = String
    this.cache = new Cache()
  }

  async main (req, res) {
    const request = req.body
    const parallel = []
    const item = title(request.item)
    const _res = { send () {} }
    _res.status = () => res
    const runParallel = (fn) => {
      parallel.push(fn.bind(this)())
    }
    const options = {
      ws: this.ws,
      db: this.db,
      cache: this.cc
    }

    // Cast date from request into "real" date object
    request.createdAt = request.createdAt ? new Date(request.createdAt) : new Date()

    // Filter order by criteria (No duplicates, no stupid price, etc)
    if (this.cache.find(request)) {
      return res.send('Rejected. (Duplicate post)')
    }
    this.cache.add(request)
    const stored = await this.db.collection('items').findOne({ name: item })
    if (!stored) {
      return res.send(`Rejected. (${request.item} not found)`)
    }
    const component = stored.components.find(c => c.name === request.component)
    if (!component) {
      return res.send(`Rejected. (${request.component} is not a component)`)
    }
    const plat = component.prices ? component.prices[request.offer.toLowerCase()].current.avg : undefined
    const isRidiculous = request.price && plat ? request.price < plat * 0.3 || request.price > plat * 3 : false

    if (isRidiculous) {
      return res.send('Rejected. (Ridiculous price)')
    }

    // Process offer
    this.publish(request)
    await this.db.collection('activeOrders').insertOne(request)
    await this.db.collection('orders').insertOne(request)

    // Create user if they don't already exist
    runParallel(async () => {
      const user = new User({ ...options, ...{ url: `/warframe/v1/users/${request.user}` } })
      await user.addUser({
        name: request.user,
        online: true
      })
    })

    // Update OPM for this item
    runParallel(async () => {
      const opm = new Opm({ ...options, ...{ url: `/warframe/v1/orders/opm?item=${item}` } })
      const opmData = await opm.filter(item)
      opm.publish(opmData)
      opm.cache(opmData, 60)
    })

    // Update offer list
    runParallel(async () => {
      const orders = new Orders({ ...options, ...{ url: `/warframe/v1/orders?item=${item}` } })
      const result = await orders.find(item)
      orders.publish(result)
      orders.cache(result, 60 * 3)
    })

    // Update prices
    runParallel(async () => {
      const prices = new Prices({ ...options, ...{ url: `/warframe/v1/items/${item}/prices?component=${component.name}` } })
      const priceData = await prices.get(item, 30, stored, component.name)
      prices.cache(priceData, 60 * 60 * 24)
      prices.store(item, priceData, stored)

      // Cache default prices for *all* items as well, so we can get them in a
      // single request on the price page.
      const full = {
        item: stored.name,
        components: []
      }
      for (const component of stored.components) {
        const isNew = priceData.components[0] && component.name === priceData.components[0].name

        // Override new component, otherwise keep old stored data
        if (isNew) {
          full.components.push(priceData.components[0])
        } else {
          full.components.push({
            name: component.name,
            prices: component.prices
          })
        }
      }
      prices.cache(full, 60 * 60 * 24, null, `/warframe/v1/items/${item}/prices`)
    })

    await Promise.all(parallel)
    res.send('added!')
  }
}

module.exports = Order
