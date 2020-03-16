const Endpoint = require('cubic-api/endpoint')

/**
 * Provides the current active content phase
 */
class ContentPhase extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get the currently active content phase.'
    this.schema.url = '/wow-classic/v1/content/active'
    this.schema.request = { url: '/wow-classic/v1/content/active' }
    this.schema.response = {
      contentPhase: Number,
      description: String,
      releaseDate: String
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const phases = await this.db.collection('contentPhases').find({
      releaseDate: { $lte: new Date() }
    }).project({ _id: 0 }).sort({ contentPhase: -1 }).toArray()
    const response = phases[0]

    this.cache(response, 60 * 60)
    return res.send(response)
  }
}

module.exports = ContentPhase
