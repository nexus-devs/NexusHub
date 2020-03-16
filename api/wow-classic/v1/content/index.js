const Endpoint = require('cubic-api/endpoint')

/**
 * Provides a basic overview of all content phases
 */
class ContentPhases extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get a basic overview of all content phases.'
    this.schema.url = '/wow-classic/v1/content'
    this.schema.request = { url: '/wow-classic/v1/content' }
    this.schema.response = [{
      contentPhase: Number,
      description: String,
      releaseDate: String
    }]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const phases = await this.db.collection('contentPhases').find().project({ _id: 0 }).sort({ contentPhase: 1 }).toArray()

    this.cache(phases, 60 * 60)
    return res.send(phases)
  }
}

module.exports = ContentPhases
