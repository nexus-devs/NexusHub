'use strict'

/**
 * Dependencies
 */
const Cache = require('./cache.js')
const db = require('mongodb').MongoClient

/**
 * Checks request against endpoints given by dbs node
 */
class Request {

    /**
     * Connect to databases
     */
    constructor() {

        // Array for connected database state
        this.dbstack = []
        this.ready = false
        this.dbclients = 2

        // Load up cache controller
        this.cache = new Cache()
        this.cache.client.on('ready', () => this.confirmDB("redis"))

        // Connect to mongo
        this.db = db
        db.connect(process.env.mongo_url, (err, db) => {
            if (!err) this.confirmDB("mongodb")
        })
    }


    /**
     * Adds db client name to dbstack, if all clients connected -> this.ready
     */
    confirmDB(db) {
        this.dbstack.push(db)
        if (this.dbstack.length === this.dbclients) this.ready = true
    }


    /**
     * Listens to config event for endpoint configuration from core node
     */
    saveEndpoints(schema) {
        console.log(schema)
        if (this.ready) {
            console.log('would have otherwise saved right now.')
        }
        // save schema to db
    }


    /**
     * Verify Request Validity with cached data from dbs-node
     */
    isValid(req) {
        return false
    }


    /**
     * Controls Request processing
     */
    getResponse(req) {

        // Assign values to request
        var request = {
            user: req.user,
            verb: req.method,
            resource: req.body.resource,
            method: req.body.method,
            params: req.body.params,
        }

        // Verify request matches schema
        if (this.isValid(request)) {

            // socketAdapter.req(this.request) //
            return ({
                statusCode: 200,
                body: 'Data will be here soon ' + Math.random() * 100 // Differentiate output for mutiple hundreds of requests
            })
        }

        return ({
            statusCode: 405,
            body: 'Invalid Request. Refer to api.nexus-stats.com for documentation.'
        })
    }
}

module.exports = new Request()
