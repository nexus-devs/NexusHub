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
  async main(req, res) {
    let items = await this.db.collection('items').find({}).toArray()
    let results = []

    // Remove unnecessary data
    items.forEach(item => {
      let result

      // Stats have been calculated before
      if (item.prices) {
        result = {
          name: item.name,
          components: item.prices
        }
      }

      // No stats have been created yet
      else {
        let components = []
        let defaultValues = {
          avg: null,
          median: null,
          min: null,
          max: null
        }

        item.components.forEach(comp => {
          components.push({
            name: comp.name,
            selling: defaultValues,
            buying: defaultValues,
            combined: defaultValues
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

module.exports = Prices
