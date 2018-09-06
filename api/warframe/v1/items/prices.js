const Endpoint = cubic.nodes.warframe.core.Endpoint

/**
 * Provides detailed item statistics for specific item
 */
class Prices extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get item statistics between now and a specified time range.'
    this.schema.url = '/warframe/v1/items/:item/prices'
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    res.send({ 'yo': 'ya' })
  }
}

module.exports = Prices
