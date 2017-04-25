#!/usr/bin/env node

/**
 * Module Dependencies
 */
const Nexus = require('blitz-api')
const MethodHandler = require('./MethodHandler.js')


/**
 * Describes parent class which controls all objects handling input/output
 */
class core {

    /**
     * Set up Nexus client
     * @constructor
     */
    constructor() {

        /**
         * API type
         * @type {Nexus}
         */
        this.api = new Nexus({
            api_url: "http://localhost:3400/",
            auth_url: "http://localhost:7119/",
            game: 'warframe',
            use_socket: true,
            namespace: 'root',
            ignore_limiter: true,
            user_key: process.env.src_user,
            user_secret: process.env.src_secret
        })

        this.api.on('ready', () => {

            // Listen to requests
            this.api.client.on('req', options => {
                MethodHandler.callMethod(options)
                    .then(data => this.api.client.emit(options.callback, data))
                    .catch(() => {}) // Just don't respond if file not locally available
            })

            // Send Endpoint Config
            this.api.connection.request('config', MethodHandler.generateEndpointSchema())
        })
    }
}

module.exports = new core()
