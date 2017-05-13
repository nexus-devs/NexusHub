"use strict"

/**
 * MongoDB related hooks
 */




module.exports = {
    /**
     * Ensures mongodb indexes and creates missing ones
     */
     mongoVerifyIndexes: () => {
        let mongodb = require('mongodb').MongoClient

        mongodb.connect(blitz.config.core.mongoURL + "?socketTimeoutMS=0", function(err, db) {
            if (err) throw err

            // TODO: Change item index to text
            blitz.log.info("creating and ensuring mongo indexes")
            db.collection('requests').createIndex({'component': 1})
            db.collection('requests').createIndex({'item': 1})
            db.collection('requests').createIndex({'timestamp': -1})
            db.collection('requests').createIndex({'timestamp': -1, 'item': 1})
        })
    }
}