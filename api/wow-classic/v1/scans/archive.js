const Endpoint = require('cubic-api/endpoint')

/**
 * Archives old scans condensed in another Db
 */
class Current extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Archives scans older than 6 months. The hour details will be averaged for each day and stored in a different collection.'
    this.schema.scope = 'write_scans_wow-classic'
    this.schema.method = 'POST'
    this.schema.url = '/wow-classic/v1/scans/archive'
    this.schema.request = {
      body: {
        batchSize: 10000,
        batchAmount: 10,
        regionSize: 1500,
        regionAmount: 1
      }
    }
    this.schema.response = String
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const collection = this.db.collection('scanData')
    const archive = this.db.collection('archivedScanData')
    const regionCollection = this.db.collection('regionData')
    const regionArchive = this.db.collection('archivedRegionData')

    const daysAgo = 1000 * 60 * 60 * 24 * 30 * 6 // 6 months
    const query = { scannedAt: { $lt: new Date(Date.now() - daysAgo) } }
    const batchSize = req.body.batchSize
    const batchAmount = req.body.batchAmount
    const regionSize = req.body.regionSize
    const regionAmount = req.body.regionAmount

    const [archivedDocs, archivedRegionDocs] = await Promise.all([
      this.archive(collection, archive, query, batchSize, batchAmount),
      this.archive(regionCollection, regionArchive, query, regionSize, regionAmount)
    ])

    return res.send(`archived ${archivedDocs + archivedRegionDocs} (${archivedDocs} scanData / ${archivedRegionDocs} regionData) documents!`)
  }

  async archive (collection, archive, query, batchSize, batchAmount) {
    let count = 0
    let docCounter = 0

    while (count < batchAmount) {
      const batch = await collection.find(query).limit(batchSize).toArray()
      if (batch.length === 0) break
      docCounter += batch.length

      await Promise.all([this.insertAndModifyBatch(archive, batch), this.deleteBatch(collection, batch)])
      count++
    }

    return docCounter
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
        const divider = detail.hour || 1
        newDoc.marketValue += Math.round(detail.marketValue / divider * (1 / doc.details.length))
        newDoc.minBuyout += Math.round(detail.minBuyout / divider * (1 / doc.details.length))
        newDoc.numAuctions += Math.round(detail.numAuctions / divider * (1 / doc.details.length))
        newDoc.quantity += Math.round(detail.quantity / divider * (1 / doc.details.length))
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
