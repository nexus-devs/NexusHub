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
    this.schema.response = {
      itemId: Number,
      slug: String,
      createdBy: [Object],
      reagentFor: [{
        itemId: Number,
        name: String,
        icon: String,
        marketValue: Number,
        amount: [Number, Number],
        requiredSkill: Number,
        category: String,
        reagents: [{
          itemId: Number,
          amount: Number,
          icon: String,
          marketValue: Number
        }]
      }]
    }
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

    let createdBy = []
    const reagentFor = []
    const itemStorage = {}

    // Add raw data to return arrays, also to storage for later data processing
    for (const entry of items) {
      if (entry.itemId === item) {
        createdBy = createdBy.concat(entry.createdBy)
      } else {
        entry.createdBy = entry.createdBy.filter((x) => x.reagents.some((e) => e.itemId === item))
        const reagent = {
          itemId: entry.itemId,
          name: entry.name,
          icon: `https://wow.zamimg.com/images/wow/icons/large/${entry.icon}.jpg`
        }
        if (!itemStorage[entry.itemId] || !Object.keys(itemStorage[entry.itemId]).length) itemStorage[entry.itemId] = reagent
        reagentFor.push({ ...reagent, createdBy: entry.createdBy })
      }

      for (const e of entry.createdBy) {
        for (const x of e.reagents) if (!itemStorage[x.itemId]) itemStorage[x.itemId] = {}
      }
    }

    // Get missing item meta and price data
    const parallel = []
    parallel.push(this.db.collection('items').find({
      itemId: { $in: Object.keys(itemStorage).filter((key) => !Object.keys(itemStorage[key]).length).map((v) => parseInt(v)) }
    }).toArray())
    for (const i of Object.keys(itemStorage).map((v) => parseInt(v))) {
      parallel.push(this.db.collection('scanData').findOne({ itemId: i, slug }, { sort: { scannedAt: -1 } }))
    }
    const [metaData, ...priceData] = await Promise.all(parallel)

    // Convert price data
    for (const priceEntry of priceData) {
      if (!priceEntry) continue
      const newest = priceEntry.details[priceEntry.details.length - 1]
      priceEntry.marketValue = newest.marketValue
    }

    // Merge missing data
    for (const i of Object.keys(itemStorage).map((v) => parseInt(v))) {
      const entryMeta = metaData.find((x) => x.itemId === i)
      const entryPrice = priceData.find((x) => x ? x.itemId === i : false)
      itemStorage[i] = { ...itemStorage[i], ...entryMeta, ...entryPrice }
    }

    // Apply missing data
    const applyData = (applyItem = undefined) => {
      return (cby) => {
        const reagents = cby.reagents.map((r) => {
          const storage = itemStorage[r.itemId]
          return {
            ...r,
            name: storage.name,
            icon: `https://wow.zamimg.com/images/wow/icons/large/${storage.icon}.jpg`,
            marketValue: storage.marketValue ? storage.marketValue : null
          }
        })
        return { ...applyItem, ...cby, reagents }
      }
    }
    const applyReagentFor = (r) => {
      if (itemStorage[r.itemId].marketValue) r.marketValue = itemStorage[r.itemId].marketValue
      return r.createdBy.map(applyData({
        itemId: r.itemId,
        name: r.name,
        icon: r.icon,
        marketValue: r.marketValue
      }))
    }

    return res.send({
      itemId: item,
      slug,
      createdBy: createdBy.map(applyData()),
      reagentFor: [].concat(...reagentFor.map(applyReagentFor))
    })
  }
}

module.exports = Crafting
