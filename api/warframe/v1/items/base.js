const Endpoint = require('cubic-api/endpoint')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Item extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get data for a specific item with all its default attributes.'
    this.schema.url = '/warframe/v1/items/:item'
    this.schema.request = '/warframe/v1/items/nikana%20prime'
    const economyData = {
      median: Number,
      min: Number,
      max: Number,
      orders: Number
    }
    this.schema.response = {
      uniqueName: String,
      name: String,
      type: String,
      description: String,
      components: [{
        name: String,
        ducats: Number,
        prices: {
          selling: { current: economyData, previous: economyData },
          buying: { current: economyData, previous: economyData }
        },
        imgUrl: String
      }],
      wikiaUrl: String,
      apiUrl: String,
      imgUrl: String,
      webUrl: String
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const name = title(req.params.item)
    const item = await this.db.collection('items').findOne({ name })

    if (item) {
      delete item._id

      // Remove detailed price data to reduce traffic
      for (const component of item.components) {
        const clean = obj => {
          delete obj.current.hours
          delete obj.current.days
          delete obj.previous.hours
          delete obj.previous.days
        }
        if (component.prices && component.prices.buying) clean(component.prices.buying)
        if (component.prices && component.prices.selling) clean(component.prices.selling)
      }
      this.cache(item, 60)
      res.send(item)
    } else {
      const response = {
        error: 'Not found.',
        reason: `${item} could not be found. If you think we missed an item, message us at https://discord.gg/8mCNvKp.`
      }
      this.cache(response, 60)
      res.status(404).send(response)
    }
  }
}

module.exports = Item
