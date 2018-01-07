const mongodb = require('mongodb').MongoClient
const items = require('../db/data/items.json')

class Hook {
  /**
   * Helper function to ensure indices
   */
  async mongoVerifySingleIndex(db, col, index) {
    await db.db(blitz.config.core.mongoDb).collection(col).createIndex(index)
  }

  /**
   * Add item list on startup
   */
  async verifyItemList() {
    const url = blitz.config.core.mongoUrl
    const db = await mongodb.connect(url)
    items.forEach(item => {
      db.db(blitz.config.core.mongoDb).collection('items').update({
        name: item.name
      }, {
        $set: item
      }, {
        upsert: true,
        safe: false,
      })
    })
  }

  async verifyIndices() {
    blitz.log.verbose("Core      | verifying warframe indices")
    const db = await mongodb.connect(blitz.config.core.mongoUrl)

    this.mongoVerifySingleIndex(db, 'requests', {
      item: 1,
      createdAt: 1
    })
    this.mongoVerifySingleIndex(db, 'requests', {
      item: 1,
      createdAt: 1,
      region: 1,
      rank: 1,
    })
  }
}

module.exports = new Hook()
