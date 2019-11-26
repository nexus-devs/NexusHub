const Endpoint = require('cubic-api/endpoint')

/**
 * Provides possible good deals (minBuyout/marketValue difference)
 */
class Deals extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get the best possible deals.'
    this.schema.url = '/wow-classic/v1/items/:slug/deals'
    this.schema.request = { url: '/wow-classic/v1/items/anathema-alliance/deals' }
    this.schema.response = {}
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    return res.send('no deal')
  }
}

module.exports = Deals
