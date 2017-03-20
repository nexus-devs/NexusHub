#!/usr/bin/env node

/**
 * Start Logging Timers
 */
global.cli = require('../config/log/logger.js')
cli.time(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))


/**
 * Load Nexus API
 */
const Nexus = require('../../NexusStatsApi/index.js')
const api = new Nexus({
    game_name: 'warframe',
    use_socket: true,

    // Example Credentials taken from <nexus-auth>/register
    user_key: 'dGme6V44iEtefIvDk8P40DvFWkm3OkFEo0tYbWaizWQCuxVtiyxX5Nd0Iv4rLEQn',
    user_secret: 'czJqmAQ3sC3JE0zygRAxGe3SViXDCgn54qAJkl0O6P2p92Ppb8vZH7FxleIREJHu'
})

cli.timeEnd(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))


/**
 * When connected to API
 */
api.on('ready', () => {

    //api.connection.client.socket.emit("GET", "yourmom", ack => {
    //    console.log(ack)
    //})

    /**
     * get nikana prime stats test command
     */
    api.getItem({
        name: 'Nikana Prime'
    }).then(item => {
        cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
    })
})
