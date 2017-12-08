const mongodb = require('mongodb').MongoClient

module.exports = {

  /**
   * Ensures mongodb indexes and creates missing ones
   */
  verifyItemIndices: () => {
    mongodb.connect(blitz.config.core_worker.mongoUrl + "?socketTimeoutMS=0", function(err, db) {
      if (err) throw err

      // TODO: Change item index to text
      blitz.log.verbose("Core      | verifying request indices")

      // Player profiles
      mongoVerifySingleIndex(db, 'players', {
        name: 1
      })

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
}

/**
 * Verifies a single index
 * @param {db} db - mongoDB
 * @param {string} col - Collection to verify
 * @param {object} index - Indices to verify
 */
function mongoVerifySingleIndex(db, col, index) {
  // Verify index
  db.collection(col).createIndex(index)

  // Verbose log string
  let str = "Core      | verified "

  // Get obj length
  let objLength = Object.keys(index).map(key => index.hasOwnProperty(key)).length

  // Append possible compound
  if (objLength > 1) {
    str += "compound "
  }

  // Append names
  let i = 0
  for (let key in index) {
    if (index.hasOwnProperty(key)) {
      str += key
      if (i < objLength - 1) str += "/"
      i++
    }
  }

  // Log
  str += " index"
  blitz.log.silly(str)
}
