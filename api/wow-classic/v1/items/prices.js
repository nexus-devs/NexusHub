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
        scannedAt: Number
      }]
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const itemId = parseInt(req.params.item)
    const slug = req.params.slug
    const timerange = req.query.timerange
    const region = req.query.region

    const data = region ? await this.getRegionPrices(slug, itemId, timerange) : await this.getServerPrices(slug, itemId, timerange)

    if (!data.length) {
      return res.status(404).send({
        error: 'Not found.',
        reason: `Item with ID ${itemId} could not be found, or there is no scan data available.`
      })
    }

    // TODO: Cache this (especially region)
    return res.send({ slug, itemId, timerange, data })
  }

  /**
   * Get prices for a single server
   */
  async getServerPrices (slug, itemId, timerange) {
    const daysAgo = 1000 * 60 * 60 * 24 * timerange

    const rawData = await this.db.collection('scanData').find({
      itemId,
      slug,
      scannedAt: { $gte: new Date(Date.now() - daysAgo) }
    }).sort({ scannedAt: 1 }).toArray()

    const data = []
    for (const day of rawData) {
      for (const hour of Object.keys(day.details).map((x) => parseInt(x))) {
        const d = day.details[hour]
        data.push({
          marketValue: d.marketValue,
          minBuyout: d.minBuyout,
          quantity: d.quantity,
          scannedAt: new Date(day.scannedAt.getTime() + 1000 * 60 * 60 * hour)
        })
      }
    }

    return data
  }

  /**
   * Get prices for an entire region
   */
  async getRegionPrices (slug, itemId, timerange) {
    const daysAgo = 1000 * 60 * 60 * 24 * timerange

    // Group results by hour brackets
    const data = await this.db.collection('scanData').aggregate([
      { $match: { itemId, scannedAt: { $gte: new Date(Date.now() - daysAgo) }, region: slug } },
      { $project: { scannedAt: 1, details: { $objectToArray: '$details' } } },
      { $unwind: '$details' },
      {
        $group: {
          _id: { $add: ['$scannedAt', { $multiply: [{ $toInt: '$details.k' }, 1000 * 60 * 60] }] },
          marketValue: { $avg: '$details.v.marketValue' },
          minBuyout: { $avg: '$details.v.minBuyout' },
          quantity: { $avg: '$details.v.quantity' }
        }
      }
    ]).sort({ _id: 1 }).toArray()

    return data.map((x) => {
      x.scannedAt = x._id
      delete x._id
      x.marketValue = Math.round(x.marketValue)
      x.minBuyout = Math.round(x.minBuyout)
      x.quantity = Math.round(x.quantity)
      return x
    })
  }
}

module.exports = Prices
