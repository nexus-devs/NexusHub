#!/usr/bin/env node

/**
 * Start Logging Timers
 */
global.cli = require('../config/log/logger.js')
console.time("SRC Node    : " + "Port: " + process.env.src_port + cli.chalk.green(' [online]'))

/**
 * Load Nexus API
 */
const Nexus = require('../../NexusStatsApi/index.js')
const api = new Nexus({
    game_name: 'warframe',
    use_socket: false,
    user_key: 'test',
    user_secret: 'test'
})

api.on('ready', () => {

    console.timeEnd("SRC Node    : " + "Port: " + process.env.src_port + cli.chalk.green(' [online]'))

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
        cli.log('Nexus', 'ok', 'GET Nikana Prime', 'out')

        if(item){
            cli.log('API Node', 'ok', item, 'in')
        }
    })
})
