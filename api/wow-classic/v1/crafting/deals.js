const Endpoint = require('cubic-api/endpoint')
const moment = require('moment')

/**
 * Provides possible crafting deals (most profit)
 */
class Deals extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get the most profitable crafting items.'
    this.schema.url = '/wow-classic/v1/crafting/:slug/deals'
    this.schema.request = { url: '/wow-classic/v1/crafting/anathema-alliance/deals' }
    this.schema.query = [
      {
        name: 'limit',
        default: 4,
        description: 'Number of possible deals to return.'
      }
    ]
    this.schema.response = [{
      itemId: Number,
      name: String,
      icon: String,
      profit: Number,
      amount: [Number, Number],
      requiredSkill: Number,
      category: String,
      reagents: [{
        itemId: Number,
        amount: Number
      }]
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

    const items = await this.db.collection('items').find({ createdBy: { $exists: true } }).toArray()

    // Get all item ids
    let queryItems = []
    for (const item of items) {
      queryItems.push(item.itemId)
      for (const cB of item.createdBy) {
        for (const r of cB.reagents) {
          queryItems.push(r.itemId)
        }
      }
    }
    queryItems = [...new Set(queryItems)]

    // Query range first to make better use of index
    const itemData = await this.db.collection('currentData').aggregate([
      { $match: { itemId: { $in: queryItems }, slug } }
    ]).toArray()
    if (!itemData.length) {
      return res.status(404).send({
        error: 'Not found.',
        reason: `Profitable crafting deals for ${slug} could not be found. Either there are no recent entries for that realm, or that realm doesn't exist.`
      })
    }

    const deals = []
    for (const item of items) {
      const itemDetails = itemData.find((i) => i.itemId === item.itemId)
      if (!itemDetails) continue

      for (const createdBy of item.createdBy) {
        let createdByCosts = 0
        let allReagentsExist = true

        for (const reagent of createdBy.reagents) {
          const reagentData = itemData.find((i) => i.itemId === reagent.itemId)
          if (reagentData) createdByCosts += reagentData.marketValue * reagent.amount
          else {
            allReagentsExist = false
            break
          }
        }
        if (!allReagentsExist) continue

        const itemProfit = itemDetails.marketValue * ((createdBy.amount[0] + createdBy.amount[1]) / 2)
        deals.push({
          itemId: item.itemId,
          name: item.name,
          icon: item.icon,
          profit: Math.round(itemProfit - createdByCosts),
          itemProfit,
          createdByCosts,
          ...createdBy
        })
      }
    }

    deals.sort((a, b) => b.profit - a.profit)

    return res.send(deals.slice(0, limit))
  }
}

module.exports = Deals
