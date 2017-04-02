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


/**
 * Describes parent class which controls all objects handling input/output
 */
class dbs {

    /**
     * Set Up Nexus Client
     */
    constructor() {

        this.client = new Nexus({
            game: 'warframe',
            use_socket: true,
            ignore_limiter: true, // Root-Access not getting limited anyway
            user_key: process.env.src_user,
            user_secret: process.env.src_secret
        })

        this.client.on('ready', () => {

            // Finish time measurement
            cli.timeEnd(process.env.src_id, cli.chalk.green('[connected]'))
        })
    }
}

module.exports = new dbs()
