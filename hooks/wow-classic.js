const mongodb = require('mongodb').MongoClient
const _ = require('lodash')

class Hook {
  /**
   * Ensure database indices are set up correctly
   */
  async verifyIndices () {
    cubic.log.verbose('Core      | verifying wow-classic indices')
    const config = cubic.config.api
    const db = await mongodb.connect(config.mongoUrl, { useNewUrlParser: true })
    const verify = async (db, col, index) => {
      return db.db(config.overrideEndpoint['/wow-classic'].mongoDb).collection(col).createIndex(index)
    }

    // Scan Data
    await verify(db, 'scanData', { // Regular price fetching
      itemId: 1,
      slug: 1,
      scannedAt: -1
    })
    await verify(db, 'scanData', { // Deals
      slug: 1,
      scannedAt: -1
    })

    // Region Data
    await verify(db, 'regionData', {
      itemId: 1,
      scannedAt: -1,
      slug: 1
    })

    // Item Data
    await verify(db, 'items', {
      itemId: 1
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

    if (bulk.length > 0) await bulk.execute()
  }
}

module.exports = new Hook()
