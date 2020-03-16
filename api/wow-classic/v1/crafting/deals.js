const Endpoint = require('cubic-api/endpoint')

/**
 * Provides possible crafting deals (most profit)
 */
class Deals extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get the most profitable crafting items.'
    this.schema.url = '/wow-classic/v1/crafting/:server/deals'
    this.schema.request = { url: '/wow-classic/v1/crafting/anathema-alliance/deals' }
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
      }
    ]
    this.schema.response = [{
      itemId: Number,
      name: String,
      uniqueName: String,
      icon: String,
      profit: Number,
      itemProfit: Number,
      createdByCosts: Number,
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
    const slug = req.params.server.toLowerCase()
    const limit = req.query.limit
    const skip = req.query.skip
    const minQuantity = req.query.min_quantity

    const server = await this.db.collection('server').findOne({ slug })
    if (!server) {
      const response = {
        error: 'Not found.',
        reason: `Server ${slug} could not be found.`
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }

    const [rawItems, phases] = await Promise.all([
      this.db.collection('items').find({ createdBy: { $exists: true } }).toArray(),
      this.db.collection('contentPhases').find({ releaseDate: { $lte: new Date() } }).project({ _id: 0 }).sort({ contentPhase: -1 }).toArray()
    ])
    const currentPhase = phases[0].contentPhase

    // Filter out items that aren't craftable yet
    const items = rawItems.filter(i => {
      for (const cB of i.createdBy) {
        if (!cB.contentPhase || cB.contentPhase <= currentPhase) return true
      }
      return false
    })
    console.log(rawItems.map(i => i.itemId).filter(x => !items.map(i => i.itemId).includes(x)))

    // Get all item ids
    let queryItems = []
    for (const item of items) {
      queryItems.push(item.itemId)
      for (const cB of item.createdBy) {
        for (const r of cB.reagents) queryItems.push(r.itemId)
      }
    }
    queryItems = [...new Set(queryItems)]

    // Query range first to make better use of index
    const [itemData, itemMetaData] = await Promise.all([
      this.db.collection('currentData').find({ itemId: { $in: queryItems }, slug, quantity: { $gte: minQuantity } }).toArray(),
      this.db.collection('items').find({ itemId: { $in: queryItems } }).toArray()
    ])

    const deals = []
    for (const item of items) {
      const itemDetails = itemData.find((i) => i.itemId === item.itemId)
      if (!itemDetails) continue

      for (const createdBy of item.createdBy) {
        let createdByCosts = 0
        let allReagentsExist = true

        for (const reagent of createdBy.reagents) {
          const reagentData = itemData.find((i) => i.itemId === reagent.itemId)
          const reagentMetaData = itemMetaData.find(i => i.itemId === reagent.itemId)
          if (reagentData) createdByCosts += Math.min(reagentData.marketValue, reagentMetaData.vendorPrice || Infinity) * reagent.amount
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
          uniqueName: item.uniqueName,
          icon: item.icon,
          profit: Math.round(itemProfit - createdByCosts),
          itemProfit,
          createdByCosts,
          ...createdBy
        })
      }
    }

    deals.sort((a, b) => b.profit - a.profit)

    const response = deals.slice(skip, skip + limit)
    this.cache(response, 60)
    return res.send(response)
  }
}

module.exports = Deals
