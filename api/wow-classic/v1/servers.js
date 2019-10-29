const Endpoint = require('cubic-api/endpoint')

/**
 * Provides a list of available servers
 */
class Servers extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get a list of all servers.'
    this.schema.url = '/wow-classic/v1/servers'
    this.schema.request = { url: '/wow-classic/v1/servers' }
    this.schema.response = {
      serversEU: [String],
      serversUS: [String]
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    // Just some samples for testing
    const serversEU = ['Aegwynn', 'Frostmane', 'Boulderfist', 'Lordaeron', 'Outland']
    const serversUS = ['Area 52', 'Auchindoun', 'Greymane', 'Duskwood', 'Proudmoore']
    res.send({ serversEU, serversUS })
  }
}

module.exports = Servers
