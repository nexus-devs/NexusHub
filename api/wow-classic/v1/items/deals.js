const Endpoint = require('cubic-api/endpoint')

/**
 * Provides possible good deals (minBuyout/marketValue difference)
 */
class Deals extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get the best possible deals (Difference between minimum buyout and market value).'
    this.schema.url = '/wow-classic/v1/items/:server/deals'
    this.schema.request = { url: '/wow-classic/v1/items/anathema-alliance/deals' }
    this.schema.query = [
      {
        name: 'limit',
        default: 4,
        description: 'Number of possible deals to return.'
      },
      {
        name: 'skip',
        default: 0,
        description: 'Number of possible deals to skip.'
      },
      {
        name: 'min_quantity',
        default: 3,
        description: 'Filters out items with low quantity.'
      },
      {
        name: 'relative',
        default: false,
        description: 'Sorts by relative difference instead of absolute if set to true.'
      },
      {
        name: 'compare_with',
        default: '',
        description: 'If specified, returns best deals compared to another realm instead.'
      }
    ]
    this.schema.response = [{
      itemId: Number,
      name: String,
      uniqueName: String,
      icon: String,
      marketValue: Number,
      minBuyout: Number,
      dealDiff: Number,
      dealPercentage: Number
    }]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.params.server.toLowerCase()
    const limit = req.query.limit
    const skip = req.query.skip
    const minQuantity = req.query.min_quantity
    const relative = req.query.relative
    const compareWith = req.query.compare_with

    const server = await this.db.collection('server').findOne({ slug })
    if (!server) {
      const response = {
        error: 'Not found.',
        reason: `Server ${slug} could not be found.`
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }

    let aggregationPipeline = [
      { $match: { slug, minBuyout: { $gt: 0 }, quantity: { $gte: minQuantity } } },
      {
        $project: {
          _id: 0,
          itemId: 1,
          marketValue: 1,
          minBuyout: 1,
          dealDiff: { $subtract: ['$marketValue', '$minBuyout'] },
          dealPercentage: { $divide: [{ $subtract: ['$marketValue', '$minBuyout'] }, '$minBuyout'] }
        }
      }
    ]

    // On comparison, check which order slug <> compareWith is sorted, sort them accordingly
    // Then group them together, use $first as slug and $last as compareWith
    // Use marketValue as compareWith market value and minBuyout as slug market value
    if (compareWith) {
      const sortOrder = slug.localeCompare(compareWith)
      aggregationPipeline = [
        { $match: { $or: [{ slug }, { slug: compareWith }], quantity: { $gte: minQuantity } } },
        { $sort: { slug: sortOrder < 0 ? 1 : -1 } },
        {
          $group: {
            _id: '$itemId',
            comparisonMarketValue: { $last: '$marketValue' },
            marketValue: { $first: '$marketValue' }
          }
        },
        {
          $project: {
            _id: 0,
            itemId: '$_id',
            marketValue: 1,
            comparisonMarketValue: 1,
            dealDiff: { $subtract: ['$comparisonMarketValue', '$marketValue'] },
            dealPercentage: { $divide: [{ $subtract: ['$comparisonMarketValue', '$marketValue'] }, '$marketValue'] }
          }
        }
      ]
    }

    // We have to do this because skip doesn't accept 0 as a value.
    // The sort->skip->limit order is fine performance wise: https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/
    aggregationPipeline.push({ $sort: relative ? { dealPercentage: -1 } : { dealDiff: -1 } })
    if (skip) aggregationPipeline.push({ $skip: skip })
    aggregationPipeline.push({ $limit: limit })

    const data = await this.db.collection('currentData').aggregate(aggregationPipeline).toArray()

    // Add icon and name
    const meta = await this.db.collection('items').find({ itemId: { $in: data.map(i => i.itemId) } }).toArray()
    for (const metaEntry of meta) {
      const item = data.find(i => i.itemId === metaEntry.itemId)
      if (item) {
        item.name = metaEntry.name
        item.uniqueName = metaEntry.uniqueName
        item.icon = metaEntry.icon
        item.dealPercentage = Math.round(item.dealPercentage * 10000) / 10000 // Round to 4 digits
      }
    }

    // this.cache(data, 60)
    return res.send(data)
  }
}

module.exports = Deals
