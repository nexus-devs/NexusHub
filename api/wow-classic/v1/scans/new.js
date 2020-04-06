const Endpoint = require('cubic-api/endpoint')
const TSMRequest = require(`${process.cwd()}/api/lib/tsm-request.js`)
const moment = require('moment')

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
        scannedAt: 1571761307 * 1000 // getTime() so everything is correctly parsed in UTC
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const slug = req.body.slug
    const region = req.body.region.toLowerCase()
    const scanId = parseInt(req.body.scanId)

    // Parse in moment so we can use UTC painlessly
    const scannedAtMoment = moment(req.body.scannedAt).utc()
    const scannedAtDayMoment = scannedAtMoment.clone()
    scannedAtDayMoment.hour(0)
    scannedAtDayMoment.minute(0)
    scannedAtDayMoment.second(0)
    scannedAtDayMoment.millisecond(0)

    // Convert to JS Date for MongoDb
    const scannedAt = scannedAtMoment.toDate()
    const scannedAtDay = scannedAtDayMoment.toDate()

    const scanExistsAlready = await this.db.collection('scans').findOne({ slug, scanId })
    if (scanExistsAlready) {
      return res.send('Rejected. Scan already exists.')
    }

    const TSMReq = new TSMRequest()
    const scan = await TSMReq.get(`/realm/${slug}/scan/${scanId}`)
    if (!scan.success) {
      return res.status(500).send(`Rejected. Error from TSM: ${scan.error}`)
    }

    await this.db.collection('scans').insertOne({ slug, region, scanId, scannedAt })

    const bulk = this.db.collection('scanData').initializeUnorderedBulkOp()
    const bulkRegionPreinsertion = this.db.collection('regionData').initializeUnorderedBulkOp()
    const bulkRegion = this.db.collection('regionData').initializeUnorderedBulkOp()

    const emptyDetails = []
    for (let i = 0; i < 24; i++) {
      emptyDetails.push({ marketValue: 0, minBuyout: 0, numAuctions: 0, quantity: 0, count: 0, hour: i })
    }

    const hour = scannedAtMoment.hour()
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
              scannedAt
            }],
            $sort: { scannedAt: 1 }
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
        $setOnInsert: {
          itemId: obj.item,
          scannedAt: scannedAtDay,
          slug: region,
          details: emptyDetails
        }
      }
      bulkRegionPreinsertion.find({
        itemId: obj.item,
        scannedAt: scannedAtDay,
        slug: region
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
