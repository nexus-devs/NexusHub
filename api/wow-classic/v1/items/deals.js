const Endpoint = require('cubic-api/endpoint')
const moment = require('moment')

/**
 * Provides possible good deals (minBuyout/marketValue difference)
 */
class Deals extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get the best possible deals.'
    this.schema.url = '/wow-classic/v1/items/:slug/deals'
    this.schema.request = { url: '/wow-classic/v1/items/anathema-alliance/deals' }
    this.schema.query = [
      {
        name: 'limit',
        default: 4,
        description: 'Number of possible deals to return.'
      }
    ]
    this.schema.response = [{
      itemId: Number,
      marketValue: Number,
      minBuyout: Number,
      dealDiff: Number
    }]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.params.slug
    const limit = req.query.limit

    const lastScan = await this.db.collection('scans').findOne({ slug }, { sort: { scannedAt: -1 } })
    if (!lastScan) {
      return res.status(404).send({
        error: 'Not found.',
        reason: `Scans for ${slug} could not be found. Either there are no scans for that realm, or that realm doesn't exist.`
      })
    }

    // Break down to day (use moment because of utc)
    const scannedAt = moment(lastScan.scannedAt).utc().hour(0).minute(0).second(0).millisecond(0).toDate()

    const data = await this.db.collection('scanData').aggregate([
      { $match: { slug, scannedAt } },
      {
        $project: {
          _id: 0,
          itemId: 1,
          marketValue: { $let: { vars: { lastElem: { $arrayElemAt: ['$details', -1] } }, in: '$$lastElem.marketValue' } },
          minBuyout: { $let: { vars: { lastElem: { $arrayElemAt: ['$details', -1] } }, in: '$$lastElem.minBuyout' } },
          dealDiff: {
            $let: {
              vars: { lastElem: { $arrayElemAt: ['$details', -1] } },
              in: { $subtract: ['$$lastElem.marketValue', '$$lastElem.minBuyout'] }
            }
          }
        }
      },
      { $sort: { dealDiff: -1 } },
      { $limit: limit }
    ]).toArray()

    if (!data.length) {
      return res.status(404).send({
        error: 'Not found.',
        reason: `Deals for ${slug} could not be found. Either there are no recent entries for that realm, or that realm doesn't exist.`
      })
    }

    return res.send(data)
  }
}

module.exports = Deals
