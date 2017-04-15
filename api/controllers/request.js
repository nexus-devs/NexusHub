"use strict"

const endpoints = require("./endpoints.js")

/**
 * Checks request against endpoints given by dbs node
 */
class RequestController {

    /**
     * Connect to databases
     */
    constructor() {

        // Initialize endpoint config
        this.schema = {
            uat: 0 // Make sure schema gets loaded on boot-up
        }

        // Make endpoints accessible from outside
        this.endpoints = endpoints
    }


    /**
     * Controls Request processing
     */
    getResponse(req) {
        return new Promise((resolve, reject) => {

            // Check if Schema requires updating
            endpoints.compare(this.schema)

            // Verify & Parse request
            let request = endpoints.parse(req, this.schema)

            // Unauthorized
            if (request === "unauthorized") {
                resolve({
                    statusCode: 401,
                    body: "Unauthorized"
                })
            }

            // Params returned
            else if (request) {
                this.send(request).then(data => {
                    resolve({
                        statusCode: 200,
                        body: data
                    })
                })
            }

            // No params returned
            else {
                resolve({
                    statusCode: 405,
                    body: "Invalid Request. Refer to api.nexus-stats.com for documentation."
                })
            }
        })
    }


    /**
     * Sends request to connected sockets. First response is accepted
     * Note: figure out way to cancel operations after one node already finished
     * E.g.: Listen to options.callback with data "cancel" -> stop current progress
     */
    send(options) {
        return new Promise((resolve, reject) => {

            // Generate unique callback for emit & pass to responding node
            options.callback = process.hrtime().join("").toString()

            // Send Request to all Core Nodes
            this.client.root.emit("req", options)

            // Listen to all sockets for response
            Object.keys(this.client.root.sockets).forEach(id => {
                let socket = this.client.root.sockets[id]

                socket.on(options.callback, data => {
                    socket.removeAllListeners(options.callback)
                    resolve(data)
                })
            })
        })
    }
}

module.exports = new RequestController()
