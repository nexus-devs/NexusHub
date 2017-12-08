const config = require('./config/blitz.config.js')
const mongo = require('./hooks/mongo')
const db = require('./hooks/db')
const Core = require('blitz-js-core')

/**
 * Load blitz-js framework
 */
const Blitz = require('blitz-js')(config)