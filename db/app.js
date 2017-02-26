#!/usr/bin/env node

/**
 * Load Modules
 */
const cli = require('./bin/logger.js')
const NexusAPI = require('nexus-stats-api')
const api = new NexusAPI()

cli.time('Root', 'Set up CoreDB Node in')
cli.time('API Node', 'Connected to API Node in')

api.getItem({name: 'Nikana Prime'}).then(item => {
    cli.timeEnd('API Node', 'Connected to API Node in')
    cli.log('API Node', 'ok', item, 'in')})

cli.timeEnd('Root', 'Set up CoreDB Node in')

