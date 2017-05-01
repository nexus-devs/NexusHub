"use strict"

/**
 * MongoDB related hooks
 */


/**
 * Ensures mongodb indexes and creates missing ones
 * @param options
 */
function mongoVerifyIndexes(options) {
    let mongodb = require('mongodb').MongoClient

    MongoClient.connect(options.mongoURL, function(err, db) {
        if (err) throw err

        // TODO: Change item index to text
        db.collection('dummy_requests').createIndex({'component': 1})
        db.collection('dummy_requests').createIndex({'item': 1})
        db.collection('dummy_requests').createIndex({'timestamp': -1})
        db.collection('dummy_requests').createIndex({'timestamp': -1, 'item': 1})
    })
}