const Endpoint = cubic.nodes.warframe.core.Endpoint
const Aggregator = require(`${process.cwd()}/api/lib/aggregator.js`)
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
const _ = require('lodash')

/**
 * Provides detailed item statistics for specific item
 */
class Prices extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get item price statistics in a specified timerange. Also returns the previousParallel period as comparison to the given timerange.'
    this.schema.url = '/warframe/v1/items/:item/prices'
    this.schema.query = [
      {
        name: 'timerange',
        default: 7,
        description: 'Days from now to the last order.'
      }
    ]
    this.schema.request = { url: '/warframe/v1/items/nikana prime/prices' }
    const economyData = {
      median: Number,
      min: Number,
      max: Number,
      orders: Number
    }
    this.schema.response = {
      name: String,
      components: [{
        prices: {
          selling: { current: economyData, previous: economyData },
          buying: { current: economyData, previous: economyData }
        }
      }]
    }
    this.schema.pubsub = {
      url: '/warframe/v1/items/:item/prices',
      response: this.schema.response
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const name = title(req.params.item)
    const timerange = req.query.timerange
    const item = await this.db.collection('items').findOne({ name })
    if (!item) {
      let response = {
        error: `Could not find data for ${item}.`,
        reason: 'Item doesn\'t exist.'
      }
      this.cache(response, 60)
      return res.status(404).send(response)
    }

    const data = await this.get(name, timerange, item)
    this.store(name, data, item)
    this.cache(data, 60 * 60 * 24)
    this.publish(data)
    res.send(data)
  }

  /**
   * Processing entrypoint.
   */
  async get (name, timerange, item) {
    const aggregator = new Aggregator(this.db)
    const currentParallel = []
    const previousParallel = []
    const aggregate = this.aggregate.bind(this)

    for (const component of item.components) {
      if (!component.tradable) continue

      const query = { name: `${name} ${component.name} Prices` }
      const params = { item: name, component: component.name }
      currentParallel.push(aggregator.get('orders', query, [0, timerange], aggregate, params))
      previousParallel.push(aggregator.get('orders', query, [timerange, timerange * 2], aggregate, params))
    }
    const current = await Promise.all(currentParallel)
    const previous = await Promise.all(previousParallel)
    const data = this.parse(item, current, previous, aggregator)

    return data
  }

  /**
   * Parse data into final response format.
   */
  parse (item, current, previous, aggregator) {
    const res = {
      name: item.name,
      components: []
    }
    const schema = {
      orders: 'sum',
      min: 'min',
      max: 'max',
      median: 'avg'
    }
    for (const component of item.components) {
      if (!component.tradable) continue
      const targetCurrent = current.find(c => c.name === `${item.name} ${component.name} Prices`)
      const targetPrevious = previous.find(c => c.name === `${item.name} ${component.name} Prices`)
      const buying = {
        current: aggregator.reduce(targetCurrent, 'buying', schema),
        previous: aggregator.reduce(targetPrevious, 'buying', schema)
      }
      const selling = {
        current: aggregator.reduce(targetCurrent, 'selling', schema),
        previous: aggregator.reduce(targetPrevious, 'selling', schema)
      }
      res.components.push({
        name: component.name,
        prices: {
          buying,
          selling
        }
      })
    }
    return res
  }

  /**
   * Actual aggregation logic for price statistics.
   */
  async aggregate (start, end, params) {
    const { combined, buying, selling } = await this.getMedians(start, end, params)
    const { item, component } = params
    const result = await this.db.collection('orders').aggregate([
      { $match: {
        item,
        component,
        createdAt: { $gte: start.toDate(), $lte: end.toDate() },
        price: { $gte: combined * 0.3, $lte: combined * 3 }
      } },
      { $group: {
        _id: '$offer',
        orders: { $sum: 1 },
        min: { $min: '$price' },
        max: { $max: '$price' }
      } }
    ]).toArray()

    // Add medians, parse into more useful format
    if (result.length) {
      const buyers = result.find(r => r._id === 'Buying')
      const sellers = result.find(r => r._id === 'Selling')

      if (sellers) sellers.median = selling
      if (buyers) buyers.median = buying
    }
    return result
  }

  /**
   * Get median which will be used to filter min/max prices as well as for the
   * general advertised price.
   */
  async getMedians (start, end, params) {
    const { item, component } = params
    const query = {
      item,
      component,
      createdAt: { $gte: start.toDate(), $lt: end.toDate() },
      price: { $ne: null }
    }
    const combined = await this.getMedian(query)
    const buying = await this.getMedian({ ...{ offer: 'Buying' }, ...query })
    const selling = await this.getMedian({ ...{ offer: 'Selling' }, ...query })

    return { combined, buying, selling }
  }

  /**
   * Get the median for buying/selling/all. We count the orders first so we can
   * skip right ahead to the order in the center in order to reduce network traffic.
   */
  async getMedian (query) {
    const count = await this.db.collection('orders').find(query).count()

    if (!count) {
      return null
    }
    else {
      const medianOffer = await this.db.collection('orders').find(query).sort({ price: 1 }).skip(count / 2 - 1).limit(1).toArray()
      return medianOffer[0].price
    }
  }

  /**
   * Apply new data to item list
   */
  async store (name, data, stored) {
    const modified = _.cloneDeep(data)

    // Remove days/hours since we won't need that on the list.
    for (const component of modified.components) {
      delete component.prices.buying.current.days
      delete component.prices.buying.current.hours
      delete component.prices.buying.previous.days
      delete component.prices.buying.previous.hours
      delete component.prices.selling.current.days
      delete component.prices.selling.current.hours
      delete component.prices.selling.previous.days
      delete component.prices.selling.previous.hours
    }

    // Merge with original components
    for (const component of stored.components) {
      const modifiedComponent = modified.components.find(c => c.name === component.name)
      if (modifiedComponent) {
        component.prices = modifiedComponent.prices
      }
    }

    await this.db.collection('items').update({
      name
    }, {
      $set: {
        components: stored.components
      }
    })
  }
}

module.exports = Prices
