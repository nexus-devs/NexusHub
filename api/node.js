#!/usr/bin/env node

/**
 * Globals
 */
global.cli = require('../config/log/logger.js')

/**
 * Start time measurements
 */
cli.time(process.env.api_id, "Port: " + process.env.src_port + cli.chalk.green(' [online]'))


/**
 * Load up Redis Client
 * Used for item data caching
 */
const cache = new(require('./controllers/cacheController'))


/**
 * When connected to Redis
 */
cache.client.on('ready', () => {

    /**
     * Set up API server (HTTP + Sockets)
     */
    const server = require('./bin/server.js')
})
