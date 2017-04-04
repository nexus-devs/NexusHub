'use strict'

/**
 * Dependencies
 */
 const cache = require('./cache.js')
 const db = require('mongoose')

/**
 * Checks request against endpoints given by dbs node
 */
class Request {

    /**
     * Connect to databases
     */
     constructor(){

         // Array for connected database state
         this.readystack = []
         this.ready = false
         this.minclients = 2

         // Load up cache controller
         this.cache = new Cache()
         this.cache.client.on('ready', () => this.confirm("redis"))

         // Connect to mongo
         this.db = db
         db.connect(process.env.mongo_url)
         db.connection.on('connected', () => this.confirm("mongodb"))
     }


     /**
      * Adds db client name to readystack, if all clients connected -> this.readystack
      */
     confirm(client) {
         this.readystack.push(client)
         if(this.readystack.length === this.minclients) this.ready = true
     }


    /**
     * Verify Request Validity with cached data from dbs-node
     */
    isValid(req){
        return false
    }


    /**
     * Controls Request processing
     * returns {response}
     */
    getResponse(req) {

        // Clear variables from previous request
        this.clear()

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
                body: 'Data will be here soon ' + Math.random()*100 // Differentiate output for mutiple hundreds of requests
            })
        }

        return ({
            statusCode: 405,
            body: 'Invalid Request. Refer to api.nexus-stats.com for documentation.'
        })
    }


    /**
     * Clear variables after req
     */
    clear() {
        this.validEndpoint = undefined
        this.validParams = undefined
    }
}

module.exports = Request
