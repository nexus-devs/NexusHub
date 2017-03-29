#!/usr/bin/env node

/**
 * Globals
 */
global.cli = require('../config/log/logger.js')


/**
 * Time measurement
 */
cli.time(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))


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
            //ignore_limiter: true, // Root-Access not getting limited anyway
            user_key: 'Xp1D1zBl6SpPLCQCFeG2VwnDTe3JC9LImZywghBspieNaNTkPSGNTEoVXavM2wPK',
            user_secret: 'y5Ygb3zhK8c5YiC2G27Gd4Dafj0ePuIExZ3YzwdrcomSloSxVMc2AD8aUkI190fn'
        })

        this.client.on('ready', () => {

            // Finish time measurement
            cli.timeEnd(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))
        })
    }
}

module.exports = new dbs()
