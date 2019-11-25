const Endpoint = require('cubic-api/endpoint')

/**
 * Provides basic item statistics for a specific item
 */
class Items extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get basic item stats. Usage of this data for commercial purposes must be discussed with us before.'
    this.schema.url = '/wow-classic/v1/items/:slug/:item'
    this.schema.request = { url: '/wow-classic/v1/items/anathema-alliance/2589' }
    this.schema.response = {
      itemId: Number,
      name: String,
      icon: String,
      tags: [String],
      requiredLevel: Number,
      itemLevel: Number,
      sellPrice: Number,
      stats: {
        current: {
          qty: Number,
          minBuyout: Number,
          marketValue: Number
        },
        previous: Object
      }
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const itemId = parseInt(req.params.item)
    const slug = req.params.slug

    const item = await this.db.collection('items').findOne({ itemId })
    if (!item) {
      return res.status(404).send({
        error: 'Not found.',
        reason: `Item with ID ${itemId} could not be found.`
      })
    }

    const daysAgo = 1000 * 60 * 60 * 24 * 2 // max 2 days old
    const stats = await this.db.collection('scanData').find({
      slug,
      item: itemId,
      scannedAt: { $gte: new Date(Date.now() - daysAgo) }
    }).sort({ scannedAt: 1 }).toArray()

    const middle = Math.ceil(stats.length / 2)
    const previousStats = stats.slice(0, middle)
    const currentStats = stats.slice(middle, stats.length)

    const reducer = (length) => {
      return (acc, cV) => {
        acc.marketValue += cV.market_value * (1 / length)
        acc.minBuyout += cV.min_buyout * (1 / length)
        acc.qty += cV.quantity * (1 / length)
        return acc
      }
    }
    const previous = previousStats.reduce(reducer(previousStats.length), { marketValue: 0, minBuyout: 0, qty: 0 })
    const current = currentStats.reduce(reducer(currentStats.length), { marketValue: 0, minBuyout: 0, qty: 0 })
    for (const k of Object.keys(previous)) {
      previous[k] = Math.round(previous[k])
      current[k] = Math.round(current[k])
    }

    const response = {
      itemId,
      name: item.name,
      icon: `https://wow.zamimg.com/images/wow/icons/large/${item.icon}.jpg`,
      tags: [item.quality, item.class],
      requiredLevel: item.requiredLevel,
      itemLevel: item.itemLevel,
      sellPrice: item.sellPrice,
      stats: { current, previous }
    }

    return res.send(response)
  }
}

module.exports = Items
