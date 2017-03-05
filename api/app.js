#!/usr/bin/env node

global.cli = require('./bin/logger.js')

/**
 * Start time measurements
 */
cli.time('Root', 'Set up API Node in')
cli.time('Cache', 'Connected to Redis in')

/**
 * Load up Redis Client
 * Used for session storing and item caching
 */
const cache = new(require('./controllers/cacheController'))

/**
 * When connected to Redis
 */
cache.client.on('ready', () => {
    cli.timeEnd('Cache', 'Connected to Redis in')

    /**
     * Set up API server (HTTP + Sockets)
     * Used for public and private connections
     * Private connections are authenticated through passport.js
     */
    const http = require('./bin/server.js')
})
