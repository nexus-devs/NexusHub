#!/usr/bin/env node

/**
 * Start Logging Timers
 */
global.cli = require('../config/log/logger.js')
cli.time(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))


/**
 * Load Nexus API
 */
const Nexus = require('../../nexus-stats-api/index.js')
const api = new Nexus({
    game: 'warframe',
    use_socket: true,
    //ignore_limiter: true, // Root-access has no limiter

    // Example Credentials taken from <nexus-auth>/register
    user_key: 'W2XhwzUxHWiiirJHzJvQ1nPQwTppZdsdMV0htPr8xcRmnWt98MEl4h8MNPQwtbXS',
    user_secret: '3j9tnaN8MGQH9Ay3G9BKBkavN17buEpiCVOWVSScSg2XbkNSJnfaYRMatM607Icd'
})

cli.timeEnd(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))


/**
 * When connected to API
 */
api.on('ready', () => {

    // Token Expiration Test
    setTimeout(() => {
        api.getItem({
            name: 'Nikana Prime'
        }).then(item => {
            //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
        })
    }, 15000)

        // Token Expiration Test
    setTimeout(() => {
        api.getItem({
            name: 'Nikana Prime'
        }).then(item => {
            //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
        })
    }, 25000)


    //api.connection.client.socket.emit("GET", "yourmom", ack => {
    //    console.log('\n' + ack.body)
    //})

    /**
     * get nikana prime stats test command
     */
    for(var i = 0; i < 20; i++){

    api.getItem({
        name: 'Nikana Prime'
    }).then(item => {
        //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
    })
    }
})
