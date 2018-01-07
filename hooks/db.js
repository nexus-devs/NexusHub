const mongodb = require('mongodb').MongoClient
const items = require('../db/data/items.json')

class Hook {
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
}

module.exports = new Hook()
