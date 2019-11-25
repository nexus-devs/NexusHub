const Endpoint = require('cubic-api/endpoint')
const request = require('request-promise')
const fs = require('fs')
const tsmKey = fs.readFileSync('/run/secrets/tsm-api-key', 'utf-8').trim()

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
    return res.send({ itemId, timerange, data })
  }

  /**
   * Get prices for a single server
   */
  async getServerPrices (slug, itemId, timerange) {
    const daysAgo = 1000 * 60 * 60 * 24 * timerange

    const data = await this.db.collection('scanData').find({
      slug,
      item: itemId,
      scannedAt: { $gte: new Date(Date.now() - daysAgo) }
    }).sort({ scannedAt: 1 }).toArray()

    return data.map((x) => {
      return {
        scannedAt: x.scannedAt,
        marketValue: x.market_value,
        minBuyout: x.min_buyout,
        qty: x.quantity
      }
    })
  }

  /**
   * Get prices for an entire region
   */
  async getRegionPrices (slug, itemId, timerange) {
    const daysAgo = 1000 * 60 * 60 * 24 * timerange

    const reqServer = await request({
      uri: 'http://api2.tradeskillmaster.com/realms',
      json: true,
      headers: { 'User-Agent': 'Request-Promise', 'X-API-Key': tsmKey }
    })
    const servers = reqServer.data.filter((x) => x.region === slug.toUpperCase())

    slug = { $in: servers.map((x) => x.slug) }

    // Group results by hour brackets
    const data = await this.db.collection('scanData').aggregate([
      { $match: { slug, item: itemId, scannedAt: { $gte: new Date(Date.now() - daysAgo) } } }, {
        $group: {
          _id: {
            $toDate: {
              $concat: [
                { $toString: { $year: '$scannedAt' } },
                '-',
                { $toString: { $month: '$scannedAt' } },
                '-',
                { $toString: { $dayOfMonth: '$scannedAt' } },
                ' ',
                { $toString: { $hour: '$scannedAt' } },
                ':00'
              ]
            }
          },
          marketValue: { $avg: '$market_value' },
          minBuyout: { $avg: '$min_buyout' },
          qty: { $avg: '$quantity' }
        }
      }
    ]).sort({ _id: 1 }).toArray()

    return data.map((x) => {
      x.scannedAt = x._id
      delete x._id
      x.marketValue = Math.round(x.marketValue)
      x.minBuyout = Math.round(x.minBuyout)
      x.qty = Math.round(x.qty)
      return x
    })
  }
}

module.exports = Prices
