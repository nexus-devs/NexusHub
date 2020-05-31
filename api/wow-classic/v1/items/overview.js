const Endpoint = require('cubic-api/endpoint')

/**
 * Provides basic item statistics for all items on a specific server
 */
class Overview extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get basic stats for all items on a server. Usage of this data for commercial purposes must be discussed with us before.'
    this.schema.url = '/wow-classic/v1/items/:server'
    this.schema.request = { url: '/wow-classic/v1/items/anathema-alliance' }
    const priceObj = {
      marketValue: Number,
      historicalValue: Number,
      minBuyout: Number,
      numAuctions: Number,
      quantity: Number
    }
    this.schema.response = {
      slug: String,
      data: [{
        itemId: Number,
        previous: priceObj,
        ...priceObj
      }]
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.params.server.toLowerCase()

    const server = await this.db.collection('server').findOne({ slug })
    if (!server) {
      const response = {
        error: 'Not found.',
        reason: `Server ${slug} could not be found.`
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }

    const data = await this.db.collection('currentData').find({ slug }).toArray()
    for (const entry of data) {
      delete entry._id
      delete entry.slug
      if (!entry.previous || !Object.keys(entry.previous).length) {
        entry.previous = {
          marketValue: null,
          historicalValue: null,
          minBuyout: null,
          numAuctions: null,
          quantity: null
        }
      }
    }

    const response = { slug, data }

    this.cache(response, 60)
    return res.send(response)
  }
}

module.exports = Overview
