const mongodb = require('mongodb').MongoClient
const _ = require('lodash')
const TSMRequest = require(`${process.cwd()}/api/lib/tsm-request.js`)
const staging = process.env.NEXUS_STAGING

class Hook {
  /**
   * Ensure database indices are set up correctly
   */
  async verifyIndices () {
    cubic.log.verbose('Core      | verifying wow-classic indices')
    const config = cubic.config.api
    const db = await mongodb.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    const verify = async (db, col, index, expire = false) => {
      if (expire && staging) await db.db(config.overrideEndpoint['/wow-classic'].mongoDb).collection(col).createIndex({ scannedAt: 1 }, { expireAfterSeconds: 60 * 60 * 24 * 7 })
      return db.db(config.overrideEndpoint['/wow-classic'].mongoDb).collection(col).createIndex(index, { background: true })
    }

    // Scan Data
    await verify(db, 'scans', {
      slug: 1,
      scannedAt: -1
    }, true)
    await verify(db, 'scanData', { // Regular price fetching
      itemId: 1,
      slug: 1,
      scannedAt: -1
    }, true)
    await verify(db, 'scanData', { // Archiving
      scannedAt: -1
    }, true)

    // Archived Data
    await verify(db, 'archivedScanData', {
      itemId: 1,
      slug: 1,
      scannedAt: -1
    })
    await verify(db, 'archivedRegionData', {
      itemId: 1,
      scannedAt: -1,
      slug: 1
    })

    // Region Data
    await verify(db, 'regionData', {
      itemId: 1,
      scannedAt: -1,
      slug: 1
    }, true)
    await verify(db, 'regionData', { // Archiving
      scannedAt: -1
    }, true)

    // Item Data
    await verify(db, 'items', {
      itemId: 1
    })
    await verify(db, 'items', {
      'createdBy.reagents.itemId': 1
    })

    // Current Data
    await verify(db, 'currentData', {
      itemId: 1,
      slug: 1,
      quantity: 1
    })
    await verify(db, 'currentData', {
      slug: 1,
      quantity: 1
    })

    await db.close()
  }

  /**
   * Add item list on startup
   */
  async verifyItemList () {
    const ItemDb = require('wow-classic-items')
    const config = cubic.config.api
    const url = config.mongoUrl
    const mongo = await mongodb.connect(url, { useNewUrlParser: true })
    const db = mongo.db(config.overrideEndpoint['/wow-classic'].mongoDb)
    const items = new ItemDb.Items({ iconSrc: false })
    const professions = new ItemDb.Professions()

    const parallel = []
    parallel.push(this._verifyCollection(db, 'items', items, 'itemId'))
    parallel.push(this._verifyCollection(db, 'professions', professions, 'name'))
    await Promise.all(parallel)

    await mongo.close()
  }

  /**
   * Add server list on startup
   */
  async verifyServerList () {
    const config = cubic.config.api
    const url = config.mongoUrl
    const mongo = await mongodb.connect(url, { useNewUrlParser: true })
    const db = mongo.db(config.overrideEndpoint['/wow-classic'].mongoDb)

    const TSMReq = new TSMRequest()
    await TSMReq.init()
    if (!TSMReq.tsmToken) return

    const reqRealms = await TSMReq.get('realm', '/realms')
    const regionLookup = {
      13: 'US',
      14: 'EU'
    }

    const regions = reqRealms.items.filter(r => [13, 14].includes(r.regionId))
    const data = []
    for (const region of regions) {
      for (const realm of region.realms) {
        const realmSlug = realm.name
          .replace(/'/g, '')
          .replace(/ /g, '-')
          .toLowerCase()

        for (const auctionHouse of realm.auctionHouses) {
          const auctionHouseSlug = auctionHouse.type.toLowerCase()
          const slug = `${realmSlug}-${auctionHouseSlug}`

          data.push({
            slug,
            auctionHouseId: auctionHouse.auctionHouseId,
            faction: auctionHouse.type,
            name: `${realm.localizedName}-${auctionHouse.type}`,
            region: regionLookup[region.regionId]
          })
        }
      }
    }

    console.log(data[0])

    await this._verifyCollection(db, 'server', data, 'slug')
    await mongo.close()
  }

  /**
   * Add content release phases (hardcode for now)
   */
  async verifyContentPhases () {
    const config = cubic.config.api
    const url = config.mongoUrl
    const mongo = await mongodb.connect(url, { useNewUrlParser: true })
    const db = mongo.db(config.overrideEndpoint['/wow-classic'].mongoDb)

    const data = [
      { contentPhase: 1, releaseDate: new Date(Date.UTC(2021, 5, 1)), description: 'Karazhan, Gruul\'s and Magtheridon\'s Lair' },
      { contentPhase: 2, releaseDate: null, description: 'Serpent Shrine Cavern and Tempest Keep' },
      { contentPhase: 3, releaseDate: null, description: 'Battle for Mount Hyjal and Black Temple' },
      { contentPhase: 4, releaseDate: null, description: 'Zul\'Aman' },
      { contentPhase: 5, releaseDate: null, description: 'Isle of Quel\'Danas, Magister\'s Terrace and Sunwell' }
    ]
    await this._verifyCollection(db, 'contentPhases', data, 'contentPhase')

    await mongo.close()
  }

  /**
   * Helper function to verify a given list against a collection
   */
  async _verifyCollection (db, collection, list, uniqueKey) {
    const storedList = (await db.collection(collection).find().toArray()).map(({ _id, ...props }) => props) // avoid mutating _id on update
    const bulk = db.collection(collection).initializeUnorderedBulkOp()

    for (const listItem of list) {
      const stored = storedList.find((i) => i[uniqueKey] === listItem[uniqueKey])

      if (!_.isEqual(stored, listItem)) {
        const query = {}
        query[uniqueKey] = listItem[uniqueKey]
        bulk.find(query).upsert().updateOne({
          $set: _.merge(stored || {}, listItem)
        })
      }
    }
    const deletedItems = storedList.filter(stored => !list.find(item => item[uniqueKey] === stored[uniqueKey]))
    const deleteQuery = {}
    deleteQuery[uniqueKey] = { $in: deletedItems.map(i => i[uniqueKey]) }
    bulk.find(deleteQuery).remove()

    if (bulk.length > 0) await bulk.execute()
  }
}

module.exports = new Hook()
