const Endpoint = require('cubic-api/endpoint')

/**
 * Provides basic item statistics for a specific item
 */
class Prices extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get basic item price statistics. Usage of this data for commerical purposes must be discussed with us before.'
    this.schema.url = '/wow-classic/v1/items/:slug/:item/prices'
    this.schema.request = { url: '/wow-classic/v1/items/anathema-alliance/2589/prices' }
    this.schema.query = [
      {
        name: 'timerange',
        default: 7,
        description: 'Time range to return data from.'
      }
    ]
    this.schema.response = [{
      scannedAt: Number,
      marketValue: Number,
      minBuyout: Number,
      qty: Number
    }]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const itemId = parseInt(req.params.item)
    const slug = req.params.slug
    const timerange = req.query.timerange

    // TODO: Change this from unix timestamps to ISODate
    const now = Math.floor(new Date().getTime() / 1000) // Unix timestamp
    const daysAgo = 60 * 60 * 24 * timerange
    let data = await this.db.collection('scanData').find({
      slug,
      item: itemId,
      scannedAt: { $gte: now - daysAgo }
    }).sort({ scannedAt: 1 }).toArray()

    if (!data.length) {
      return res.status(404).send({
        error: 'Not found.',
        reason: `Item with ID ${itemId} could not be found, or there is no scan data available.`
      })
    }

    data = data.map((x) => {
      return {
        scannedAt: x.scannedAt,
        marketValue: x.market_value,
        minBuyout: x.min_buyout,
        qty: x.quantity
      }
    })

    return res.send(data)
  }
}

module.exports = Prices
