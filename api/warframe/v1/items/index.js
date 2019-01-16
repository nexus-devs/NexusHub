const Endpoint = require('cubic-api/endpoint')

/**
 * Provide list of all items with their fundamental data.
 */
class List extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get a list of all items with their basic attributes.'
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
    let items = await this.db.collection('items').find().project({
      _id: 0,
      uniqueName: 1,
      name: 1,
      components: 1,
      imgUrl: 1,
      apiUrl: 1,
      webUrl: 1
    }).toArray()
    let result = []

    items.forEach(item => {
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
      result.push({
        uniqueName: item.uniqueName,
        name: item.name,
        components: item.components,
        apiUrl: item.apiUrl,
        webUrl: item.webUrl,
        imgUrl: item.imgUrl
      })
    })

    this.cache(result, 60)
    res.send(result)
  }
}

module.exports = List
