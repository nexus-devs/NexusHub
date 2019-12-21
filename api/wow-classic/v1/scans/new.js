const Endpoint = require('cubic-api/endpoint')
const TSMRequest = require(`${process.cwd()}/api/lib/tsm-request.js`)

class Scan extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Stores a new TSM scan in the database.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_scans_wow-classic'
    this.schema.url = '/wow-classic/v1/scans/new'
    this.schema.request = {
      body: {
        slug: 'anathema-alliance',
        region: 'EU',
        scanId: '1571761307',
        scannedAt: new Date(1571761307 * 1000)
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const slug = req.body.slug
    const region = req.body.region.toLowerCase()
    const scanId = parseInt(req.body.scanId)
    const scannedAt = new Date(req.body.scannedAt)
    const scannedAtHour = new Date(scannedAt.getTime())
    scannedAtHour.setMinutes(0)
    scannedAtHour.setSeconds(0)
    scannedAtHour.setMilliseconds(0)
    const scannedAtDay = new Date(scannedAtHour.getTime())
    scannedAtDay.setHours(0)

    const scanExistsAlready = await this.db.collection('scans').findOne({ slug, scanId })
    if (scanExistsAlready) {
      return res.send('Rejected. Scan already exists.')
    }

    const TSMReq = new TSMRequest()
    const scan = await TSMReq.get(`/realm/${slug}/scan/${scanId}`)
    if (!scan.success) {
      return res.send(`Rejected. Error from TSM: ${scan.error}`)
    }

    await this.db.collection('scans').insertOne({ slug, region, scanId, scannedAt })

    const bulk = this.db.collection('scanData').initializeUnorderedBulkOp()
    const bulkRegionPreinsertion = this.db.collection('regionData').initializeUnorderedBulkOp()
    const bulkRegion = this.db.collection('regionData').initializeUnorderedBulkOp()

    const hour = scannedAtHour.getHours()
    for (const obj of scan.data) {
      // Update scanData
      const update = {
        $push: {
          details: {
            $each: [{
              marketValue: obj.market_value,
              minBuyout: obj.min_buyout,
              numAuctions: obj.num_auctions,
              quantity: obj.quantity,
              hour
            }],
            $sort: { hour: 1 }
          }
        }
      }
      bulk.find({
        itemId: obj.item,
        scannedAt: scannedAtDay,
        slug
      }).upsert().updateOne(update)

      // Make sure the document exists ($ doesn't work with upsert sadly)
      const updateRegionPreinsertion = {
        $push: {
          details: {
            $each: [{
              marketValue: 0,
              minBuyout: 0,
              numAuctions: 0,
              quantity: 0,
              count: 0,
              hour
            }],
            $sort: { hour: 1 }
          }
        }
      }
      bulkRegionPreinsertion.find({
        itemId: obj.item,
        scannedAt: scannedAtDay,
        slug: region,
        'details.hour': { $ne: hour }
      }).upsert().updateOne(updateRegionPreinsertion)

      // Update regionData
      const updateRegion = {
        $inc: {
          'details.$.marketValue': obj.market_value,
          'details.$.minBuyout': obj.min_buyout,
          'details.$.numAuctions': obj.num_auctions,
          'details.$.quantity': obj.quantity,
          'details.$.count': 1
        }
      }
      bulkRegion.find({
        itemId: obj.item,
        scannedAt: scannedAtDay,
        slug: region,
        'details.hour': hour
      }).updateOne(updateRegion)
    }

    // Make sure hour docs are created before updating
    const bulkRegionOp = async () => {
      await bulkRegionPreinsertion.execute()
      await bulkRegion.execute()
    }

    if (scan.data.length) {
      const parallel = [bulk.execute(), bulkRegionOp()]
      await Promise.all(parallel)
    }

    res.send('added!')
  }
}

module.exports = Scan
