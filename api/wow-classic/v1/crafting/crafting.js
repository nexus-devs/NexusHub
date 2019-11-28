const Endpoint = require('cubic-api/endpoint')

/**
 * Provides crafting pricing information for an item
 */
class Crafting extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get crafting price information.'
    this.schema.url = '/wow-classic/v1/crafting/:slug/:item'
    this.schema.request = { url: '/wow-classic/v1/crafting/anathema-alliance/2589' }
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
    const item = parseInt(req.params.item)

    const items = await this.db.collection('items').find({
      $or: [
        { $and: [{ itemId: item }, { createdBy: { $exists: true } }] },
        { 'createdBy.reagents.itemId': item }
      ]
    }).toArray()

    const createdBy = []
    const reagentFor = []
    for (const entry of items) {
      if (entry.itemId === item) {
        createdBy.concat(entry.createdBy)
      } else {
        entry.createdBy = entry.createdBy.filter((x) => x.reagents.some((e) => e.itemId === item))
        const reagent = {
          itemId: entry.itemId,
          name: entry.name,
          icon: `https://wow.zamimg.com/images/wow/icons/large/${entry.icon}.jpg`,
          createdBy: entry.createdBy
        }
        reagentFor.push(reagent)
      }
    }

    return res.send({ itemId: item, slug, createdBy, reagentFor })
  }
}

module.exports = Crafting
