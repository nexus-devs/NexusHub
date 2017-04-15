"use strict";

const mongodb = require("mongodb").MongoClient

/**
 * Endpoint Controller for managing Endpoints from resource nodes
 */
class EndpointController {

    /**
     * Connect to databases
     */
    constructor() {
        this.db = mongodb
        this.db.connect(process.env.mongo_url, (err, db) => {
            if (!err) {
                this.db.config = db.collection("config")
                this.db.ready = true
            }
        })
    }


    /**
     * Saves endpoints from core node to db
     */
    saveEndpoints(endpoints) {
        let config = {
            type: "endpoints",
            data: endpoints,
        }
        this.db.config.updateOne({
            type: "endpoints"
        }, {
            $set: config
        }, {
            upsert: true
        })
    }


    /**
     * Refresh endpoint config every 30 minutes
     */
    compare(schema) {
        let now = new Date()
        if (now - schema.uat > 1800000) {
            this.db.config.findOne({
                type: "endpoints"
            }, (err, config) => {
                this.convert(config.data)
                schema.endpoints = config.data
                schema.uat = now
            })
        }
    }


    /**
     * Converts Schema to local standards & converts string functions to real functions
     */
    convert(endpoints) {
        for (var endpoint in endpoints) {
            this.convertParams(endpoints[endpoint])
            this.convertScopes(endpoints[endpoint])
        }
    }


    /**
     * Convert stringified functions to anonymous functions
     */
    convertParams(endpoint) {
        if (Object.keys(endpoint.params).length > 0) {
            endpoint.params.forEach((specs, i) => {

                // If string -> check if function (workaround for json.stringify on socket.emit)
                if (typeof specs.default === "string" && (specs.default.includes("() => {") || specs.default.includes("function ("))) {

                    // Function from String (remove everything before first { and last }), override default
                    let fn = new Function(specs.default.substring(specs.default.indexOf("{") + 1).slice(0, -1))
                    endpoint.params[i].default = fn
                }
            })
        }
    }


    /**
     * Extend given minimum scope with any higher
     */
    convertScopes(endpoint) {
        if (typeof endpoint.scope === "string") {
            let scope = require("../config/scopes.js")
            for (var i = 0; i < scope.length; i++) {
                if (scope[i] === endpoint.scope) scope = scope.slice(i, scope.length)
            }
            endpoint.scope = scope
        }
    }


    /**
     * Verify Request Validity with cached data from core-node
     */
    parse(req, schema) {
        req = this.parseBase(req)

        for (var sub in schema.endpoints) {
            let endpoint = schema.endpoints[sub]
            let matching = false
            let params = []

            // Check if method in Schema
            matching = this.parseRoute(req, endpoint, params, matching)

            // Route matches
            if (matching) {
                if (!endpoint.scope.includes(req.user.scp)) return "unauthorized"
                if (req.verb !== endpoint.verb) return false

                this.parseParams(req, endpoint, params)
                this.parseBody(req, params)

                return({
                    file: endpoint.file,
                    params: params
                })
            }
        }

        // No endpoint matched
        return false
    }


    /**
     * Get Base information from request, used by further methods
     */
    parseBase(req) {
        let route = req.url.split("/")
        route.pop()
        route = (route.join("/") + "/" + req.parsed.method).replace("%20", " ")

        let request = {
            user: req.user,
            verb: req.method,
            route: route,
            method: req.parsed.method,
            params: req.parsed.params,
            body: req.body
        }

        return request
    }


    /**
     * Match request route w/ given route and assign resources
     */
    parseRoute(req, endpoint, params, matching) {
        let reqroute = req.route.split("/")
        let scmroute = endpoint.route.split("/")

        for (var i = 0; i < scmroute.length; i++) {

            // Get route resource params
            if (scmroute[i][0] === ":") {
                matching = true
                params.push(reqroute[i])
            }

            else if (scmroute[i] !== reqroute[i]) {
                matching = false
                break
            }

            else {
                matching = true
            }
        }

        return matching
    }


    /**
     * Parse Params if route matches
     */
    parseParams(req, endpoint, params) {
        for (var i = 0; i < endpoint.params.length; i++) {
            let specs = endpoint.params[i]

            // Param included in request?
            let requested = false
            Object.keys(req.params).map((key, index) => {
                if (key === specs.name) requested = req.params[key]
            })

            // Requested not falsy -> request value in `requested`
            if (requested) {
                if (specs.type === "number") {
                    if (isNaN(requested)) return false
                    else requested = parseFloat(requested)
                }
                params.push(requested)
            }

            // Not requested -> assign default value
            else {
                if (typeof specs.default === "function") params.push(specs.default())
                else params.push(specs.default)
            }
        }
    }


    /**
     * Parse Body if POST/PUT
     */
    parseBody(req, params) {
        if (req.verb === "POST" || req.verb === "PUT") {
            params.push(req.body)
        }
    }
}

module.exports = new EndpointController()
