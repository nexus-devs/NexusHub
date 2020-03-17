const Endpoint = require('cubic-api/endpoint')

/**
 * Provides a list of available servers
 */
class Servers extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get a list of all servers with their region and slug.'
    this.schema.url = '/wow-classic/v1/servers/full'
    this.schema.request = { url: '/wow-classic/v1/servers/full' }
    this.schema.response = [{
      slug: String,
      name: String,
      region: String
    }]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const servers = await this.db.collection('server').find().toArray()

    const response = servers.filter(s => s.faction === 'Alliance').map(s => {
      return {
        slug: s.slug.split('-').slice(0, -1).join('-'),
        name: s.name.split('-').slice(0, -1).join('-'),
        region: s.region
      }
    })
    response.sort((a, b) => a.slug.localeCompare(b.name))

    this.cache(response, 60 * 60)
    res.send(response)
  }
}

module.exports = Servers
