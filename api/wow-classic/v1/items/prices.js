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
      },
      {
        name: 'region',
        default: false,
        description: 'If true, slug is treated as a region.'
      }
    ]
    this.schema.response = {
      slug: String,
      itemId: Number,
      timerange: Number,
      data: [{
        marketValue: Number,
        minBuyout: Number,
        quantity: Number,
        scannedAt: String
      }]
    }
    this.schema.response = {}
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const itemId = parseInt(req.params.item)
    const slug = req.params.slug
    const timerange = req.query.timerange
    const region = req.query.region

    const daysAgo = 1000 * 60 * 60 * 24 * timerange
    const rawData = await this.db.collection(region ? 'regionData' : 'scanData').find({
      itemId,
      slug,
      scannedAt: { $gte: new Date(Date.now() - daysAgo) }
    }).sort({ scannedAt: 1 }).toArray()

    const data = []
    for (const day of rawData) {
      for (const hour of day.details) {
        if (region && hour.count <= 0) continue
        data.push({
          marketValue: !region ? hour.marketValue : Math.round(hour.marketValue / hour.count),
          minBuyout: !region ? hour.minBuyout : Math.round(hour.minBuyout / hour.count),
          quantity: !region ? hour.quantity : Math.round(hour.quantity / hour.count),
          scannedAt: new Date(day.scannedAt.getTime() + 1000 * 60 * 60 * hour.hour)
        })
      }
    }

    // TODO: Cache this
    return res.send({ slug, itemId, timerange, data })
  }
}

module.exports = Prices
