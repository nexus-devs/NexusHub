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
    user_key: '7eH4A6ri1SbQ1JRHqvf3dtr6lQxPI3Lz3eGsRgpsmxvBau0sFRx4etD726PIEUVz',
    user_secret: 'm0lbRFP3xfzfl0zOqalNKy6JxFdtTwcF7uS0WuNl8T5iMyE8zTWA76hU7MZQvmew'
})

cli.timeEnd(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))


/**
 * When connected to API
 */
api.on('ready', () => {

    /**
     * get nikana prime stats test command
     */
    api.getItem({
        name: 'Nikana Prime'
    }).then(item => {
        cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
    })
})
