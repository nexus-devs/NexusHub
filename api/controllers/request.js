'use strict'

/**
 * TEMPORARY REPLACEMENT FOR MAIN CUS I FORGOT TO PUSH LAST CHANGES
 * SETS SCHEMA DIRECTLY IN MEMORY
 */
const Cache = require('./cache.js')
const db = require('mongodb').MongoClient
const _ = require('lodash')

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
     * Saves endpoints from core node to
     */
    saveEndpoints(endpoints) {

        // Modify
        for (var endpoint in endpoints) {

            if (Object.keys(endpoints[endpoint].params).length > 0) {
                endpoints[endpoint].params.forEach((specs, i) => {

                    // If string -> check if function (workaround for json.stringify on socket.emit)
                    if (typeof specs.default === 'string' && (specs.default.includes("() => {") || specs.default.includes("function ("))) {

                        // Function from String (remove everything before first { and last }), override default
                        let fn = new Function(specs.default.substring(specs.default.indexOf("{") + 1).slice(0, -1))
                        endpoints[endpoint].params[i].default = fn
                    }
                })
            }
        }

        // Save Endpoints
        this.schema.endpoints = endpoints
    }


    /**
     * Verify Request Validity with cached data from core-node
     */
    isValid(req) {

        // Check if method in schema
        for (var endpoint in this.schema.endpoints) {
            if (this.schema.endpoints[endpoint].method === req.method) {

                //if(req.user.scp !><><>>< endpoint.scope) return false
                if (req.verb !== this.schema.endpoints[endpoint].verb) return false

                // Initialize param array
                let params = []

                // Compare param types
                this.schema.endpoints[endpoint].params.forEach((specs, i) => {

                    // Param included in request?
                    let requested = false
                    Object.keys(req.params).map((key, index) => {
                        if (key === specs.name) requested = req.params[key]
                    })

                    // Requested not falsy -> request value in `requested`
                    if (requested) params.push(requested)

                    // Not requested -> assign default value
                    else {
                        if (typeof specs.default === 'function') params.push(specs.default())
                        else params.push(specs.default)
                    }
                })

                console.log(params)
            }
        }

        // No endpoint matched
        return true
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
