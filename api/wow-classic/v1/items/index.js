const Endpoint = require('cubic-api/endpoint')

/**
 * Provides basic item statistics for a specific item
 */
class Items extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get basic item stats. Usage of this data for commercial purposes must be discussed with us before.'
    this.schema.url = '/wow-classic/v1/items/:server/:item'
    this.schema.request = { url: '/wow-classic/v1/items/anathema-alliance/2589' }
    this.schema.response = {
      itemId: Number,
      name: String,
      uniqueName: String,
      icon: String,
      tags: [String],
      requiredLevel: Number,
      itemLevel: Number,
      sellPrice: Number,
      vendorPrice: Number,
      itemLink: String,
      tooltip: [{
        label: String
      }],
      stats: {
        current: {
          marketValue: Number,
          minBuyout: Number,
          quantity: Number
        },
        previous: Object
      }
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    let itemId = parseInt(req.params.item)
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

    const item = await this.db.collection('items').findOne(itemId ? { itemId } : { uniqueName: req.params.item.toLowerCase() })
    if (!item) {
      const response = {
        error: 'Not found.',
        reason: `Item ${req.params.item} could not be found.`
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }
    if (!itemId) itemId = item.itemId // Set ID if API call was made with unique name

    const stats = await this.db.collection('currentData').findOne({ itemId, slug })
    const previous = stats ? stats.previous : null
    if (stats) {
      delete stats.previous
      delete stats._id
      delete stats.itemId
      delete stats.slug
    }

    const response = {
      server: slug,
      itemId,
      name: item.name,
      uniqueName: item.uniqueName,
      icon: `https://wow.zamimg.com/images/wow/icons/large/${item.icon}.jpg`,
      tags: [item.quality, item.class],
      requiredLevel: item.requiredLevel,
      itemLevel: item.itemLevel,
      sellPrice: item.sellPrice,
      vendorPrice: item.vendorPrice || null,
      tooltip: item.tooltip,
      itemLink: item.itemLink,
      stats: {
        current: stats || null,
        previous
      }
    }

    this.cache(response, 60)
    return res.send(response)
  }
}

module.exports = Items
