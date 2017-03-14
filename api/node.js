#!/usr/bin/env node

/**
 * Globals
 */
global.cli = require('../config/log/logger.js')

/**
 * Start time measurements
 */
console.time("API Node    : " + "Port: " + process.env.api_port + cli.chalk.green(' [online]'))


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
