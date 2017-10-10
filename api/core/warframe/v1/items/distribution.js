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
    let results = []

    // Remove unnecessary data
    items.forEach(item => {
      let result

      // Supply/Demand has been calculated before
      if (item.distribution) {
        result = {
          name: item.name,
          components: item.distribution
        }
      }

      // No Supply/Demand calculation occured before => use default values
      else {
        let components = []

        item.components.forEach(comp => {
          components.push({
            name: comp.name,
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

        result = {
          name: item.name,
          components
        }
      }
      results.push(result)
    })

    this.cache(results, 60)
    res.send(results)
  }
}

module.exports = Distribution
