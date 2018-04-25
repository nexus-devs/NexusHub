const Endpoint = cubic.nodes.warframe.core.Endpoint

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class List extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get a list of all items.'
    this.schema.url = '/warframe/v1/items'
    this.schema.response = [{
      name: String,
      type: String,
      components: [ String ],
      apiUrl: String,
      webUrl: String,
      imgUrl: String
    }]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    let items = await this.db.collection('items').find({}).toArray()
    let result = []

    items.forEach(item => {
      let data = {
        name: item.name,
        type: item.type,
        components: item.components.map(c => c.name),
        apiUrl: item.apiUrl,
        webUrl: item.webUrl,
        imgUrl: item.imgUrl
      }
      result.push(data)
    })

    this.cache(result, 60)
    res.send(result)
  }
}

module.exports = List
