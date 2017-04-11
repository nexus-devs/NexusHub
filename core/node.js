#!/usr/bin/env node

/**
 * Globals
 */
global.cli = require('../config/log/logger.js')


/**
 * Time measurement
 */
cli.time(process.env.src_id, cli.chalk.green('[connected]'))


/**
 * Module Dependencies
 */
const Nexus = require('../../nexus-stats-api/index.js')
const MethodHandler = require('./MethodHandler.js')


/**
 * Describes parent class which controls all objects handling input/output
 */
class core {

    /**
     * Set Up Nexus Client
     */
    constructor() {

        this.api = new Nexus({
            game: 'warframe',
            use_socket: true,
            namespace: '/root',
            ignore_limiter: true, // Root-Access not getting limited anyway
            user_key: process.env.src_user,
            user_secret: process.env.src_secret
        })

        this.api.on('ready', () => {

            // Finish time measurement
            cli.timeEnd(process.env.src_id, cli.chalk.green('[connected]'))

            // Listen to requests
            this.api.client.on('req', options => {
                MethodHandler.callMethod(options).then((data) => {
                    this.api.client.emit(options.callback, data)
                })
            })

            // Send Endpoint Config
            this.api.connection.request('config', MethodHandler.generateEndpointSchema())
        })
    }
}

module.exports = new core()
