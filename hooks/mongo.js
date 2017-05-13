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
            blitz.log.verbose("mongoHook | verified component index")
            db.collection('requests').createIndex({'item': 1})
            blitz.log.verbose("mongoHook | verified item index")
            db.collection('requests').createIndex({'timestamp': -1})
            blitz.log.verbose("mongoHook | verified timestamp index")
            db.collection('requests').createIndex({'timestamp': -1, 'item': 1})
            blitz.log.verbose("mongoHook | verified compound timestamp/item index\n")
        })
    }
}
