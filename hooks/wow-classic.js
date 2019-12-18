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

    await db.close()
  }

  /**
   * Add item list on startup
   */
  async verifyItemList () {
    const Items = require('wow-classic-items')
    const config = cubic.config.api
    const url = config.mongoUrl
    const mongo = await mongodb.connect(url, { useNewUrlParser: true })
    const db = mongo.db(config.overrideEndpoint['/wow-classic'].mongoDb)
    const items = new Items({ iconSrc: false })
    const storedItems = (await db.collection('items').find().toArray()).map(({ _id, ...props }) => props) // avoid mutating _id on update

    const parallel = []
    for (const item of items) {
      const stored = storedItems.find((i) => i.itemId === item.itemId)

      if (!_.isEqual(stored, item)) {
        parallel.push(db.collection('items').updateMany({
          itemId: item.itemId
        }, {
          $set: _.merge(stored || {}, item)
        }, {
          upsert: true
        }))
      }
    }

    await Promise.all(parallel)
    await mongo.close()
  }
}

module.exports = new Hook()
