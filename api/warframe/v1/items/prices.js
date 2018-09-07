const Endpoint = cubic.nodes.warframe.core.Endpoint
const moment = require('moment')

/**
 * Provides detailed item statistics for specific item
 */
class Prices extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get item statistics between now and a specified time range.'
    this.schema.url = '/warframe/v1/items/:item/prices'
    this.schema.query = [
      {
        name: 'timerange',
        default: 7,
        description: 'Time range from now in the past, in days.'
      },
      {
        name: 'region',
        default: '',
        description: 'Region to select requests from.'
      }
    ]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const item = req.params.item
    const region = req.query.region
    const timerange = req.query.timerange
    const timeNow = moment()

    // Get item from db
    let itemResult = await this.db.collection('items').findOne({
      name: new RegExp('^' + item + '$', 'i')
    })
    if (!itemResult) {
      let response = {
        error: 'Could not find data for ' + item + '.',
        reason: 'Item doesn\'t exist.'
      }
      this.cache(response, 60)
      return res.status(404).send(response)
    }

    this.getPrices(timeNow, timerange, item)

    res.send({ 'yo': 'ya' })
  }

  /**
   * Main function: fetches item prices
   */
  async getPrices (timeNow, timerange, item) {
    // Get either pre-saved prices, or generate them if they don't exist
    for (let i = 1; i <= timerange; i++) {
      const dayCursor = timeNow.subtract(i, 'days').startOf('day')
      let cursorResult = await this.db.collection('items_presaves').findOne({
        name: new RegExp('^' + item + '$', 'i'),
        createdAt: dayCursor
      })
    }
  }
}

module.exports = Prices
