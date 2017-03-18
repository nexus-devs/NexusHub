#!/usr/bin/env node

/**
 * Globals
 */
global.cli = require('../config/log/logger.js')


/**
 * Start time measurements
 */
cli.time(process.env.api_id, cli.chalk.reset("Port: " + process.env.api_port) + cli.chalk.green(' [online]'))


/**
 * Set up API server (HTTP + Sockets)
 */
const server = require('./bin/server.js')
