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
          marketValue: Number,
          minBuyout: Number,
          quantity: Number
        },
        previous: Object
      }
    }
    this.schema.response = {}
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const itemId = parseInt(req.params.item)
    const slug = req.params.slug

    const item = await this.db.collection('items').findOne({ itemId })
    if (!item) {
      return res.send({
        error: 'Not found.',
        reason: `Item with ID ${itemId} could not be found.`
      })
    }

    const stats = await this.db.collection('scanData').find({ slug, itemId }).sort({ scannedAt: -1 }).limit(2).toArray()

    // If one day doesn't have enough data, add last scan from the day before
    if (stats[0] && stats[0].details.length < 2) stats[0].details.unshift(stats[1].details[stats[1].details.length - 1])

    const statData = stats[0] ? stats[0].details.reverse().slice(0, 2).map(({ hour, ...props }) => props) : []

    const response = {
      server: slug,
      itemId,
      name: item.name,
      icon: `https://wow.zamimg.com/images/wow/icons/large/${item.icon}.jpg`,
      tags: [item.quality, item.class],
      requiredLevel: item.requiredLevel,
      itemLevel: item.itemLevel,
      sellPrice: item.sellPrice,
      stats: {
        current: statData[0] || null,
        previous: statData[1] || null
      }
    }

    return res.send(response)
  }
}

module.exports = Items
