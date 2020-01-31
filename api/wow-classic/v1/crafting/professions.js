const Endpoint = require('cubic-api/endpoint')

/**
 * Provides basic information for all professions
 */
class Professions extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get information about all professions.'
    this.schema.url = '/wow-classic/v1/crafting/professions'
    this.schema.request = { url: '/wow-classic/v1/crafting/professions' }
    this.schema.response = [{
      name: String,
      icon: String
    }]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const professions = await this.db.collection('professions').find({}).project({ _id: 0 }).toArray()
    if (!professions.length) {
      const response = {
        error: 'Not found.',
        reason: 'Professions could not be fetched.'
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }

    this.cache(professions, 60 * 60)
    return res.send(professions)
  }
}

module.exports = Professions
