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
        slug: 'anathema-alliance'
      }
    }
    this.schema.response = String
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.body.slug

    const TSMReq = new TSMRequest()
    const parallel = []
    parallel.push(TSMReq.get(`/realm/${slug}/stats`))
    parallel.push(this.db.collection('currentData').find({ slug }).toArray())
    const [stats, oldData] = await Promise.all(parallel)

    if (!stats.success) {
      return res.status(500).send(`Rejected. Error from TSM: ${stats.error}`)
    }

    const bulk = this.db.collection('currentData').initializeUnorderedBulkOp()
    let atLeast1BulkOp = false

    // Upsert new data
    for (const entry of stats.data) {
      const storedEntry = oldData.find(i => i.itemId === entry.item)
      if (!storedEntry) {
        atLeast1BulkOp = true
        bulk.insert({
          itemId: entry.item,
          slug,
          previous: {},
          historicalValue: entry.historical_value,
          marketValue: entry.market_value,
          minBuyout: entry.min_buyout,
          numAuctions: entry.num_auctions,
          quantity: entry.quantity
        })
        continue
      }
      storedEntry.updated = true

      const setObj = {}
      for (const tsmKey of ['historical_value', 'market_value', 'min_buyout', 'num_auctions', 'quantity']) {
        const nexusKey = tsmKey.split('_').map((k, i) => i > 0 ? k.charAt(0).toUpperCase() + k.slice(1) : k).join('')

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
