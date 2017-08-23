const Endpoint = require(blitz.config[blitz.id].endpointParent)
const _ = require("lodash")

/**
 * Provides basic item properties
 */
class Base extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Get item statistics between a specified time frame."
    this.schema.url = "/warframe/v1/items/:item"
  }


  /**
   * Main method which is called by EndpointHandler on request
   */
  async main(item) {
    let doc = await this.db.collection('items').findOne({
      name: new RegExp("^" + item + "$", "i")
    })
    if (doc) {
      // Remove unnecessary data
      delete doc.prices
      delete doc.distribution
      delete doc._id

      this.cache(this.url, doc, 60)
      return doc
    } else {
      this.cache(this.url, item + " not found.", 60)
      return item + " not found."
    }
  }
}

module.exports = Base
