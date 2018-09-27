const Endpoint = cubic.nodes.warframe.core.Endpoint
const Aggregator = require(`${process.cwd()}/api/lib/aggregator.js`)
const _ = require('lodash')
const moment = require('moment')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Activity extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Trade activity, used for "busy hours". Returned hours are in UTC, so shift the array depending on your offset.'
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by. If no item is specified, the data for all items is returned.'
      }, {
        name: 'timerange',
        default: 7,
        description: 'Days from now to the last order.'
      }
    ]
    this.schema.response = String
  }

  /**
   * Entrypoint for EndpointController
   */
  async main (req, res) {
    res.send('ok')
  }
}

module.exports = Activity
