const Endpoint = require('cubic-api/endpoint')

/**
 * Provides basic information about the last saved scan.
 */
class ScansLast extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get basic information about the last saved scan.'
    this.schema.url = '/wow-classic/v1/scans/latest/:server'
    this.schema.request = { url: '/wow-classic/v1/scans/latest/anathema-alliance' }
    this.schema.response = {
      scanId: Number,
      scannedAt: String
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.params.server.toLowerCase()
    const scan = await this.db.collection('scans').findOne({ slug }, { projection: { _id: 0, scanId: 1, slug: 1, scannedAt: 1 }, sort: { scannedAt: -1 } })

    const server = await this.db.collection('server').findOne({ slug })
    if (!server) {
      const response = {
        error: 'Not found.',
        reason: `Server ${slug} could not be found.`
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }

    if (scan) {
      this.cache(scan, 60)
      res.send(scan)
    }
    else {
      const response = {
        error: 'Not found.',
        reason: `Scans for ${slug} could not be found.`
      }
      this.cache(response, 60)
      res.send(response)
    }
  }
}

module.exports = ScansLast
