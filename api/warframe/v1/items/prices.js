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
        name: 'intervals',
        default: 14,
        description: 'Intervals to split the time in.'
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
    const intervals = req.query.intervals
    const region = req.query.region
    const timerange = req.query.timerange
    const timeNow = moment()

    // Verify Interval size
    if (intervals <= 0) {
      const response = {
        error: 'Bad input.',
        reason: 'Intervals must be greater than 0.'
      }
      this.cache(response)
      return res.status(400).send(response)
    }

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

    res.send({ 'yo': 'ya' })
  }
}

module.exports = Prices
