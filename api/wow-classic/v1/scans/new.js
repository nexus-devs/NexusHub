const Endpoint = require('cubic-api/endpoint')
const request = require('request-promise')
const fs = require('fs')
const tsmKey = fs.readFileSync('/run/secrets/tsm-api-key', 'utf-8').trim()

class Scan extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Stores a new TSM scan in the database.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_scans_wow-classic'
    this.schema.url = '/wow-classic/v1/scans/new'
    this.schema.request = {
      body: {
        slug: 'arugal-alliance',
        region: 'EU',
        scanId: '1573439779',
        scannedAt: new Date()
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const slug = req.body.slug
    const region = req.body.region.toLowerCase()
    const scanId = req.body.scanId
    const scannedAt = new Date(req.body.scannedAt)

    const scanExistsAlready = await this.db.collection('scans').findOne({ slug, scanId })
    if (scanExistsAlready) {
      return res.send('Rejected. Scan already exists.')
    }

    const scan = await request({
      uri: `http://api2.tradeskillmaster.com/realm/${slug}/scan/${scanId}`,
      json: true,
      headers: { 'User-Agent': 'Request-Promise', 'X-API-Key': tsmKey }
    })
    if (!scan.success) {
      return res.send(`Rejected. Error from TSM: ${scan.error}`)
    }

    const parallel = []
    parallel.push(this.db.collection('scans').insertOne({ slug, scanId, scannedAt }))

    const scanData = scan.data.map((obj) => {
      delete obj.variant_id
      delete obj.pet_species
      return {
        slug,
        scannedAt,
        ...obj
      }
    })
    parallel.push(this.db.collection('scanData').insertMany(scanData))

    // Round date to current bracket
    /* const msH = 1000 * 60 * 60
    const bracketHour = new Date(Math.floor(scannedAt.getTime() / msH) * msH)
    const bulk = this.db.collection('regionData').initializeUnorderedBulkOp()

    // Update or insert regional data
    for (const obj of scanData) {
      bulk.find({
        item: obj.item,
        scannedAt: bracketHour,
        slug: region
      }).upsert().updateOne({
        $inc: {
          count: 1,
          marketValue: obj.market_value,
          minBuyout: obj.min_buyout,
          qty: obj.quantity,
          numAuctions: obj.num_auctions
        }
      })
    }
    parallel.push(bulk.execute()) */

    await Promise.all(parallel)

    res.send('added!')
  }
}

module.exports = Scan
