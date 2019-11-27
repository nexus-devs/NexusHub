const Endpoint = require('cubic-api/endpoint')
const fs = require('fs')

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
      itemId: Number,
      timerange: Number,
      data: [{
        scannedAt: Number,
        marketValue: Number,
        minBuyout: Number,
        qty: Number
      }]
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const itemId = parseInt(req.params.item)
    const slug = req.params.slug.toLowerCase()
    const timerange = req.query.timerange
    const region = req.query.region

    const daysAgo = 1000 * 60 * 60 * 24 * timerange

    let data = await this.db.collection(region ? 'regionData' : 'scanData').find({
      slug,
      item: itemId,
      scannedAt: { $gte: new Date(Date.now() - daysAgo) }
    }).sort({ scannedAt: 1 }).toArray()

    data = data.map((x) => {
      if (!region) {
        return {
          scannedAt: x.scannedAt,
          marketValue: x.market_value,
          minBuyout: x.min_buyout,
          qty: x.quantity
        }
      } else {
        return { // Region return (calc avg values)
          scannedAt: x.scannedAt,
          marketValue: Math.round(x.marketValue / x.count),
          minBuyout: Math.round(x.minBuyout / x.count),
          qty: Math.round(x.qty / x.count)
        }
      }
    })

    if (!data.length) {
      return res.status(404).send({
        error: 'Not found.',
        reason: `Item with ID ${itemId} could not be found, or there is no scan data available.`
      })
    }

    // TODO: Cache this (especially region)
    return res.send({ server: slug, itemId, timerange, data })
  }
}

module.exports = Prices
