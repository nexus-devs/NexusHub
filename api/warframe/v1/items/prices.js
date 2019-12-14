const Endpoint = require('cubic-api/endpoint')
const Aggregator = require(`${process.cwd()}/api/lib/aggregator.js`)
const _ = require('lodash')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

/**
 * Provides detailed item statistics for specific item
 */
class Prices extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get item price statistics in a specified timerange. Also returns the previous period as comparison to the given timerange. Usage of this data for commerical purposes must be discussed with us before.'
    this.schema.url = '/warframe/v1/items/:item/prices'
    this.schema.query = [
      {
        name: 'timerange',
        default: 30,
        description: 'Days from now to the last order.'
      }, {
        name: 'component',
        description: 'Item component to limit prices by.'
      }, {
        name: 'source',
        description: '"Trade Chat" or "Warframe Market".'
      }, {
        name: 'platform',
        description: 'PC, PS4 or XB1.'
      }
    ]
    this.schema.request = { url: '/warframe/v1/items/nikana prime/prices' }
    const economyData = {
      median: Number,
      min: Number,
      max: Number,
      orders: Number
    }
    const previousEconomyData = _.cloneDeep(economyData)
    economyData.days = economyData.hours = previousEconomyData.days = [_.cloneDeep(economyData)]
    this.schema.response = {
      name: String,
      components: [{
        name: String,
        prices: {
          selling: { current: economyData, previous: previousEconomyData },
          buying: { current: economyData, previous: previousEconomyData }
        }
      }]
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const name = title(req.params.item)
    const timerange = req.query.timerange
    const component = req.query.component
    const source = req.query.source ? title(req.query.source) : req.query.source
    const platform = req.query.platform
    const item = await this.db.collection('items').findOne({ name })
    if (!item) {
      const response = {
        error: `Could not find data for ${item}.`,
        reason: 'Item doesn\'t exist.'
      }
      this.cache(response, 60)
      return res.status(404).send(response)
    }

    const data = await this.get(name, timerange, item, component, source, platform)
    this.store(name, data)
    this.cache(data, 60 * 60)
    res.send(data)
  }

  /**
   * Processing entrypoint.
   */
  async get (name, timerange, item, componentName, source, platform) {
    const aggregator = new Aggregator(this.db)
    const currentParallel = []
    const previousParallel = []
    const aggregate = this.aggregate.bind(this)
    const get = async (component) => {
      const query = { name: `${name} ${component.name} Prices` }
      const params = { item: name, component: component.name, stored: component }
      if (source) {
        query.name += ` ${source}`
        params.source = source
      }
      if (platform) {
        query.name += ` ${platform}`
        params.platform = platform
      }
      currentParallel.push(aggregator.get('orders', query, [0, timerange - 1], aggregate, params))
      previousParallel.push(aggregator.get('orders', query, [timerange, timerange * 2 - 1], aggregate, params))
    }

    // Specific component selected? Only get data for that one.. Obviously...
    // .. Definitely didn't happen that I missed that part and it recalculated
    // data for every component before. But oh boy, tfw you suddenly have a 5x
    // performance improvement when you figure it out.
    if (componentName) {
      const component = item.components.find(c => c.name.toLowerCase() === componentName.toLowerCase())
      if (component && component.tradable) {
        get(component)
      }
    } else {
      for (const component of item.components) {
        if (!component.tradable) continue
        get(component)
      }
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

    for (const currentData of current) {
      const previousData = previous.find(c => c.name === currentData.name)
      const buying = {
        current: aggregator.reduce(currentData, 'buying', schema),
        previous: aggregator.reduce(previousData, 'buying', schema)
      }
      const selling = {
        current: aggregator.reduce(currentData, 'selling', schema),
        previous: aggregator.reduce(previousData, 'selling', schema)
      }
      const name = currentData.name.replace(item.name + ' ', '')
        .replace(' Prices', '')
        .replace(' Trade Chat', '')
        .replace(' Warframe Market', '')
        .replace(' PC', '')
        .replace(' XB1', '')
        .replace(' PS4', '')
      res.components.push({ name, prices: { buying, selling } })
    }
    return res
  }

  /**
   * Actual aggregation logic for price statistics.
   */
  async aggregate (start, end, params) {
    const median = this.getMedian(params.stored)
    const query = {
      item: params.item,
      component: params.component
    }
    if (params.source) query.source = params.source
    if (params.platform) query.platform = params.platform
    const result = await this.db.collection('orders').aggregate([
      {
        $match: {
          ...{
            createdAt: { $gte: start.toDate(), $lte: end.toDate() }
          },
          ...query,
          ...(median ? { price: { $gte: median * 0.3, $lte: median * 3 } } : {})
        }
      },
      {
        $group: {
          _id: '$offer',
          orders: { $sum: 1 },
          median: { $avg: '$price' },
          min: { $min: '$price' },
          max: { $max: '$price' }
        }
      }
    ]).toArray()

    return result
  }

  /**
   * Get median from stored values
   */
  getMedian (component) {
    if (component.prices) {
      const buying = component.prices.buying.current.median
      const selling = component.prices.selling.current.median
      return Math.round((selling + buying) / (selling && buying ? 2 : 1))
    }
  }

  /**
   * Apply new data to item list
   */
  async store (name, data) {
    for (const component of data.components) {
      await this.db.collection('items').updateOne({
        name,
        'components.name': component.name
      }, {
        $set: {
          'components.$.prices': component.prices
        }
      })
    }
  }
}

module.exports = Prices
