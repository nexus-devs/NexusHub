const Endpoint = require('cubic-api/endpoint')
const TSMRequest = require(`${process.cwd()}/api/lib/tsm-request.js`)

/**
 * Saves current up-to-date item stats
 */
class Current extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Stores current stats from TSM.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_scans_wow-classic'
    this.schema.url = '/wow-classic/v1/scans/current'
    this.schema.request = {
      body: {
        slug: 'anathema-alliance',
        auctionHouseId: '367'
      }
    }
    this.schema.response = String
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.body.slug
    const auctionHouseId = parseInt(req.body.auctionHouseId)

    const TSMReq = new TSMRequest()
    await TSMReq.init()
    const oldData = await this.db.collection('currentData').find({ slug }).toArray()

    const bulk = this.db.collection('currentData').initializeUnorderedBulkOp()
    let atLeast1BulkOp = false

    let page = 1
    let totalPages = 1
    while (page <= totalPages) {
      let scan = {}
      try {
        scan = await TSMReq.get('pricing', `/ah/${auctionHouseId}?page=${page}&pageSize=100`)
        totalPages = scan.metadata.totalPages
      } catch (err) {
        return res.status(500).send(`Rejected. Error from TSM: ${err}`)
      }

      for (const entry of scan.items) {
        const storedEntry = oldData.find(i => i.itemId === entry.itemId)
        if (!storedEntry) {
          atLeast1BulkOp = true
          bulk.insert({
            itemId: entry.itemId,
            slug,
            previous: {},
            historicalValue: entry.historical,
            marketValue: entry.marketValue,
            minBuyout: entry.minBuyout,
            numAuctions: entry.numAuctions,
            quantity: entry.quantity
          })
          continue
        }
        storedEntry.updated = true

        const setObj = {}
        for (const tsmKey of ['historical', 'marketValue', 'minBuyout', 'numAuctions', 'quantity']) {
          const nexusKey = tsmKey === 'historical' ? 'historicalValue' : tsmKey

          if (entry[tsmKey] !== storedEntry[nexusKey]) {
            setObj['previous.' + nexusKey] = storedEntry[nexusKey]
            setObj[nexusKey] = entry[tsmKey]
          }
        }

        if (Object.keys(setObj).length) {
          atLeast1BulkOp = true
          bulk.find({ _id: storedEntry._id }).updateOne({ $set: setObj })
        }
      }

      page++
    }

    // Delete outdated entries
    for (const notUpdated of oldData.filter(d => !d.updated)) {
      atLeast1BulkOp = true
      bulk.find({ _id: notUpdated._id }).removeOne()
    }

    if (atLeast1BulkOp) await bulk.execute()

    return res.send('added!')
  }
}

module.exports = Current
