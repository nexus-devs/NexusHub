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
            ignore_limiter: true, // Root-Access not getting limited anyway
            user_key: 'alaIz8cqU7cv2d336ssww28f0DufMbdJaMXZyg6BlaSiK453pspSygd81X5kLYMk',
            user_secret: 'DNQt6oBMzTisRPHDXqbpxqEYpvtlpn2aHLMuKdEJMnrFNi6qxP87Al9iS3eP9Yui'
        })

        this.client.on('ready', () => {

            // Finish time measurement
            cli.timeEnd(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))

            // Launch test requests
            this.test()
        })
    }


    /**
     * Test Commands
     */
    test() {

        // Token Expiration Test
        setTimeout(() => {
            this.client.getItem('Nikana Prime').then(item => {
                cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
            })
        }, 15000)

        // Token Expiration Test
        setTimeout(() => {
            this.client.getItem('Nikana Prime').then(item => {
                cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
            })
        }, 25000)

        // Circumvent standard module connection & send malformed request
        //this.client.connection.client.socket.emit("GET", "yourmom", ack => {
        //    console.log('\n' + ack.body)
        //})

        // Rate Limit Testing
        for (var i = 0; i < 15; i++) {
            this.client.getItem('Nikana Prime', {
                component: "Blade",
                timestart: 3824983243892,
                timeend: 3894982348932
            }).then(item => {
                //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
            })
        }
    }
}

module.exports = new dbs()
