const mongodb = require('mongodb').MongoClient

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
}

module.exports = new Hook()
