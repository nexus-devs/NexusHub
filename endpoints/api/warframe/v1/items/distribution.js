const Endpoint = require(blitz.config[blitz.id].endpointParent)
const _ = require("lodash")

/**
 * Provides Supply/Demand data for each item
 */
class Distribution extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Get item statistics between a specified time frame."
  }


  /**
   * Main method which is called by EndpointHandler on request
   */
  async main(req, res) {
    let items = await this.db.collection('items').find({}).toArray()

    // Remove unnecessary data
    items.forEach(item => {
      delete item.type
      delete item.prices
      delete item._id
      delete item.category
      delete item.ranks

      if (item.distribution) {
        item.components = item.distribution
        delete item.distribution
      } else {
        let components = []
        item.components.forEach(comp => {
          components.push({
            name: comp,
            supply: {
              count: 0,
              percentage: 0.5
            },
            demand: {
              count: 0,
              percentage: 0.5
            }
          })
        })
        item.components = components
        item.components.length === 0 ? item.components.push({
          name: "Set",
          supply: {
            count: 0,
            percentage: 0.5
          },
          demand: {
            count: 0,
            percentage: 0.5
          }
        }) : null
      }
    })

    this.cache(this.url, items, 60)
    res.send(items)
  }
}

module.exports = Distribution
