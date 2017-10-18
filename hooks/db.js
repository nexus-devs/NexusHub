const mongodb = require('mongodb').MongoClient
const items = require('../db/data/items.json')

class Hook {
  async verifyItemList() {
    const url = blitz.config.client_worker ? blitz.config.client_worker.mongoURL : blitz.config.core_worker.mongoURL
    const db = await mongodb.connect(url)
    items.forEach(item => {
      db.collection('items').update({
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
