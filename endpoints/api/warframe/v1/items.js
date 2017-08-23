const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class List extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Get a list of all items."
  }


  /**
   * Main method which is called by EndpointHandler on request
   */
  async main() {
    let result = await this.db.collection('items').find({}).toArray()

    // Remove unnecessary data
    result.forEach(item => {
      delete item.distribution
      delete item.prices
      delete item._id
    })

    this.cache(this.url, result, 60)
    return result
  }
}

module.exports = List
