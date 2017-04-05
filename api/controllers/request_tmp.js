'use strict'

/**
 * TEMPORARY REPLACEMENT FOR MAIN CUS I FORGOT TO PUSH LAST CHANGES
 * SETS SCHEMA DIRECTLY IN MEMORY
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

        this.schema = {}

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
    saveEndpoints(endpoints) {
        this.schema.endpoints = endpoints
    }


    /**
     * Compares selected endpoint schema with request
     */
    compare(req, endpoint) {

        //if(req.user.scp !><><>>< endpoint.scope) return false
        if (req.verb !== endpoint.verb) return false

        // Compare param types
        Object.keys(req.params).map(function(key, index) {
            console.log(key) // name
            var value = req.params[key]
            console.log(value) // value
            // then do comparison below with above values
        })

        for (_param in req.params) {
            let param = req.params[_param]
            let specs

            // Find param specs in schema if exist
            for (_specs in endpoint.params) {
                console.log(_specs)
                console.log(param)
                if (_specs === param) {
                    specs = endpoint.params[_specs]
                }
            }

            // Specs found?
            if (specs) {
                console.log(specs.toString())
            }

            // No Specs found
            else return false
        }

        return true
    }


    /**
     * Verify Request Validity with cached data from dbs-node
     */
    isValid(req) {
        // Check if method in schema
        for (var endpoint in this.schema.endpoints) {
            if (this.schema.endpoints[endpoint].method === req.method) {
                return this.compare(req, this.schema.endpoints[endpoint])
            }
        }

        // No endpoint matched
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
