const Endpoint = require('cubic-api/endpoint')

/**
 * Provide list of all items with their fundamental data.
 */
class List extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get a list of all items with their basic attributes. For tradable items this also includes prices.'
    this.schema.url = '/warframe/v1/items'
    this.schema.response = [{
      uniqueName: String,
      name: String,
      components: [{
        name: String,
        imgUrl: String
      }],
      apiUrl: String,
      webUrl: String,
      imgUrl: String
    }]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const items = await this.db.collection('items').find().project({
      _id: 0,
      uniqueName: 1,
      name: 1,
      'components.name': 1,
      'components.imgUrl': 1,
      'components.prices': 1,
      'components.prices.buying.current.orders': 1,
      'components.prices.buying.current.min': 1,
      'components.prices.buying.current.max': 1,
      'components.prices.buying.current.median': 1,
      'components.prices.buying.previous.orders': 1,
      'components.prices.buying.previous.min': 1,
      'components.prices.buying.previous.max': 1,
      'components.prices.buying.previous.median': 1,
      'components.prices.selling.current.orders': 1,
      'components.prices.selling.current.min': 1,
      'components.prices.selling.current.max': 1,
      'components.prices.selling.current.median': 1,
      'components.prices.selling.previous.orders': 1,
      'components.prices.selling.previous.min': 1,
      'components.prices.selling.previous.max': 1,
      'components.prices.selling.previous.median': 1,
      imgUrl: 1,
      apiUrl: 1,
      webUrl: 1
    }).toArray()

    this.cache(items, 60)
    res.send(items)
  }
}

module.exports = List
