const Endpoint = cubic.nodes.warframe.core.Endpoint

/**
 * Provide list of all items with their fundamental data.
 */
class List extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get a list of all items.'
    this.schema.url = '/warframe/v1/items'
    const economyData = {
      median: Number,
      min: Number,
      max: Number,
      offers: Number
    }
    this.schema.response = [{
      name: String,
      components: [{
        name: String,
        selling: { current: economyData, previous: economyData },
        buying: { current: economyData, previous: economyData },
        apiUrl: String,
        webUrl: String,
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
      name: 1,
      components: 1,
      imgUrl: 1,
      apiUrl: 1,
      webUrl: 1
    }).toArray()
    let result = []

    items.forEach(item => {
      result.push({
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
