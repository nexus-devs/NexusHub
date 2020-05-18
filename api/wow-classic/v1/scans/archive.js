const Endpoint = require('cubic-api/endpoint')

/**
 * Archives old scans condensed in another Db
 */
class Current extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Archives scans older than 6 months. The hour details will be averaged for each day and stored in a different collection.'
    // this.schema.scope = 'write_scans_wow-classic'
    this.schema.url = '/wow-classic/v1/scans/archive'
    this.schema.response = String
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const collection = this.db.collection('scanData')
    const archive = this.db.collection('archivedData')
    const daysAgo = 1000 * 60 * 60 * 24 // * 30 * 6 // 6 months
    const query = { scannedAt: { $lt: new Date(Date.now() - daysAgo) } }
    const batchSize = 10000

    const wholeCount = await collection.find(query).count()
    let count = wholeCount
    while (count > 0) {
      const batch = await collection.find(query).limit(batchSize).toArray()

      await Promise.all([this.insertAndModifyBatch(archive, batch), this.deleteBatch(collection, batch)])

      count = await collection.find(query).count()
    }

    return res.send(`archived ${wholeCount} documents!`)
  }

  async insertAndModifyBatch (collection, batch) {
    const bulk = collection.initializeUnorderedBulkOp()
    batch.forEach((doc) => {
      const newDoc = {
        itemId: doc.itemId,
        slug: doc.slug,
        scannedAt: doc.scannedAt,
        marketValue: 0,
        minBuyout: 0,
        numAuctions: 0,
        quantity: 0
      }

      for (const detail of doc.details) {
        newDoc.marketValue += Math.round(detail.marketValue * (1 / doc.details.length))
        newDoc.minBuyout += Math.round(detail.minBuyout * (1 / doc.details.length))
        newDoc.numAuctions += Math.round(detail.numAuctions * (1 / doc.details.length))
        newDoc.quantity += Math.round(detail.quantity * (1 / doc.details.length))
      }

      bulk.insert(newDoc)
    })
    await bulk.execute()
  }

  async deleteBatch (collection, batch) {
    const bulk = collection.initializeUnorderedBulkOp()
    batch.forEach((doc) => {
      bulk.find({ _id: doc._id }).removeOne()
    })
    await bulk.execute()
  }
}

module.exports = Current
