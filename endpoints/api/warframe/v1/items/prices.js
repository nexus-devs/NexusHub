const Endpoint = require(blitz.config[blitz.id].endpointParent)
const _ = require("lodash")

/**
 * Provides price data for each item
 */
class Prices extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Get a list of all item prices."
  }


  /**
   * Main method which is called by EndpointHandler on request
   */
  async main() {
    let items = await this.db.collection('items').find({}).toArray()

    // Remove unnecessary data
    items.forEach(item => {
      delete item.type
      delete item.distribution
      delete item._id
      delete item.category
      delete item.ranks

      if (item.prices) {
        item.components = item.prices
        delete item.prices
      } else {
        let components = []
        item.components.forEach(comp => {
          components.push({
            name: comp,
            avg: null,
            median: null,
            min: null,
            max: null
          })
        })
        item.components = components
        item.components.length === 0 ? item.components.push({
          name: "Set",
          avg: null,
          median: null,
          min: null,
          max: null
        }) : null
      }
    })

    this.cache(this.url, items, 60)
    return items
  }
}

module.exports = Prices
