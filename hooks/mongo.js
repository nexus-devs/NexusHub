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
            db.collection('requests').createIndex({'component': 1})
            blitz.log.verbose("mongoHook | component index verified")
            db.collection('requests').createIndex({'item': 1})
            blitz.log.verbose("mongoHook | item index verified")
            db.collection('requests').createIndex({'timestamp': -1})
            blitz.log.verbose("mongoHook | timestamp index verified")
            db.collection('requests').createIndex({'timestamp': -1, 'item': 1})
            blitz.log.verbose("mongoHook | compound timestamp/item index verified\n")
        })
    }
}
