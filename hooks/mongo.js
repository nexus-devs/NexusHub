"use strict"

/**
 * Dependencies
 */
const mongodb = require('mongodb').MongoClient

module.exports = {

    /**
     * Ensures mongodb indexes and creates missing ones
     */
     mongoVerifyIndices: () => {
        mongodb.connect(blitz.config.core.mongoURL + "?socketTimeoutMS=0", function(err, db) {
            if (err) throw err

            // TODO: Change item index to text
            console.log(" ")
            blitz.log.info("mongoHook | verifying request indices")
            mongoVerifySingleIndex(db, 'players', {'name': 1})
            mongoVerifySingleIndex(db, 'players', {'updatedAt': 1})
            mongoVerifySingleIndex(db, 'requests', {'item': 1, 'createdAt': 1})
            mongoVerifySingleIndex(db, 'requests', {'item': 1, 'component': 1, 'createdAt': 1})
            console.log(" ")
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
    let str = "mongoHook | verified "

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
    blitz.log.verbose(str)
}
