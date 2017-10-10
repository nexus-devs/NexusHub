const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class List extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Get a list of all items."
    this.schema.url = "/warframe/v1/items"
    this.schema.query = [
      {
        name: 'data',
        default: '',
        description: 'Specify a key in the original object to query. By default, we omit prices and distribution.'
      }
    ]
  }


  /**
   * Main method which is called by EndpointHandler on request
   */
  async main(req, res) {
    let items = await this.db.collection('items').find({}).toArray()
    let targetData = req.query.data
    let result = []

    items.forEach(item => {
      let data = {
        name: item.name,
        type: item.type,
        description: item.description
      }

      // Price data from default time range on statistics endpoint
      if (targetData.toLowerCase() === 'prices') {
        data.components = item[targetData] || []

        // Apply default values if no data was found
        if (!item[targetData]) {
          let defaultValues = {
            avg: null,
            median: null,
            min: null,
            max: null
          }

          item.components.forEach(comp => {
            data.components.push({
              name: comp.name,
              selling: defaultValues,
              buying: defaultValues,
              combined: defaultValues
            })
          })
        }
      }

      // Supply/Demand
      if (targetData.toLowerCase() === 'distribution') {
        data.components = item[targetData] || []

        // Apply default values if no data was found
        if (!item[targetData]) {
          let defaultValues = {
            supply: {
              count: 0,
              percentage: 0.5
            },
            demand: {
              count: 0,
              percentage: 0.5
            }
          }
          item.components.forEach(comp => {
            data.components.push(defaultValues)
          })
        }
      }

      result.push(data)
    })

    this.cache(result, 60)
    res.send(result)
  }
}

module.exports = List
