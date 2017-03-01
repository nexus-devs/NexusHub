#!/usr/bin/env node

/**
 * Start Logging Timers
 */
const cli = require('./bin/logger.js')
cli.time('Root', 'Set up CoreDB Node in')


/**
 * Load Nexus API
 */
const Nexus = require('nexus-stats-api')
const api = new Nexus({
    game_name: 'warframe',
    use_socket: false,
    user_key: 'test',
    user_secret: 'test'
})


api.on('ready', () => {
    cli.timeEnd('Root', 'Set up CoreDB Node in')

    /**
     * get nikana prime stats test command
     */
    cli.log('Nexus', 'ok', 'GET Nikana Prime', 'out')
    api.getItem({name: 'Nikana Prime'}).then(item => {
        cli.log('API Node', 'ok', item, 'in')
    })
})
