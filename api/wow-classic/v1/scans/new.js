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
        scanId: '1573439779',
        scannedAt: new Date()
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const slug = req.body.slug
    const scanId = req.body.scanId
    const scannedAt = req.body.scannedAt

    const scanExistsAlready = await this.db.collection('scans').findOne({ slug, scanId }, { projection: { slug: 1, scanId: 1 } })
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

    await this.db.collection('scans').insertOne({ slug, scanId, scannedAt, data: scan.data })

    res.send('added!')
  }
}

module.exports = Scan
