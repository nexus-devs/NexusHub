#!/usr/bin/env node

/**
 * Start Logging Timers
 */
global.cli = require('../config/log/logger.js')
cli.time(process.env.src_id, "Port: " + process.env.src_port + cli.chalk.green(' [online]'))

/**
 * Load Nexus API
 */
const Nexus = require('../../NexusStatsApi/index.js')
const api = new Nexus({
    game_name: 'warframe',
    use_socket: true,
    user_key: 'test',
    user_secret: 'test'
})

api.on('ready', () => {

    cli.timeEnd(process.env.src_id, "Port: " + process.env.src_port + cli.chalk.green(' [online]'))

    /** api.connection.refreshToken()


    setTimeout(() => {
        console.log(api.connection.access_token)
        api.getItem({name: 'Nikana Prime'}).then(item => {
            cli.log(item)
        })
    }, 15000)

    setTimeout(() => {
        api.connection.refreshToken()
    }, 18000)

    setTimeout(() => {
        console.log(api.connection.access_token)
        api.getItem({name: 'Nikana Prime'}).then(item => {
            cli.log(item)
        })
    }, 20000) **/


    /**
     * get nikana prime stats test command    */
    api.getItem({name: 'Nikana Prime'}).then(item => {
        if(item){
            cli.log(process.env.src_id, 'ok', 'Nexus    | ' + item, 'in')
        }
    })
})
