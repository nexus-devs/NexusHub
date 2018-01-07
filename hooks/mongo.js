const mongodb = require('mongodb').MongoClient

/**
 * Verifies a single index
 */
function mongoVerifySingleIndex(db, col, index) {
  db.db(blitz.config.core.mongoDb).collection(col).createIndex(index)
}


/**
 * Ensures mongodb indexes for items, requests, players, etc
 */
module.exports = {
  verifyItemIndices: async () => {
    blitz.log.verbose("Core      | verifying warframe indices")
    const db = await mongodb.connect(blitz.config.core.mongoUrl)

    // Item stats accumulation
    mongoVerifySingleIndex(db, 'requests', {
      item: 1,
      createdAt: 1
    })
    mongoVerifySingleIndex(db, 'requests', {
      item: 1,
      createdAt: 1,
      region: 1,
      rank: 1,
    })
  })
}