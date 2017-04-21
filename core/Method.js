'use strict'

/**
 * Connect to mongodb for all methods
 */
let mongodb = require("mongodb").MongoClient
let db = null
mongodb.connect(process.env.mongo_url, (err, connected) => {
    if(err) throw(err)
    db = connected
})

/**
 * Class describing generic database/calculation methods
 * Any lower-level method extends this class
 */
class Method{
    constructor(){

        // Default Config for API node
        this.schema = {
            resources: [],
            params: [],
            scope: 'basic-read',
            verb: 'GET',
            description: "There is no description for this endpoint yet."
        }

        // Establish MongoDB connection
        this.db = db
    }
}

module.exports = Method
