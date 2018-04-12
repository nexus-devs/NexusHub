const mongodb = require('mongodb').MongoClient
const items = require(`${process.cwd()}/build/warframe/data/merged.json`)

class Hook {
  /**
   * Add item list on startup
   */
  async verifyItemList () {
    const url = cubic.config.warframe.core.mongoUrl
    const db = await mongodb.connect(url)
    items.forEach(item => {
      db.db(cubic.config.warframe.core.mongoDb).collection('items').update({
        name: item.name
      }, {
        $set: item
      }, {
        upsert: true,
        safe: false
      })
    })
    db.close()
  }

  async verifyIndices () {
    cubic.log.verbose('Core      | verifying warframe indices')
    const db = await mongodb.connect(cubic.config.warframe.core.mongoUrl)
    const verify = async (db, col, index) => {
      return db.db(cubic.config.warframe.core.mongoDb).collection(col).createIndex(index)
    }

    verify(db, 'requests', {
      item: 1,
      createdAt: 1
    })
    verify(db, 'requests', {
      item: 1,
      createdAt: 1,
      region: 1,
      rank: 1
    })
    db.close()
  }
}

module.exports = new Hook()
