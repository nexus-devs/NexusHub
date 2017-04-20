/**
 * Globals
 */
require('./config/env.js')
var heapdump = require('heapdump')
setTimeout(() => {
    heapdump.writeSnapshot()
}, 72000000)



/**
 * Dependencies
 */
const Cluster = require('multi-Cluster')
const Logger = require('./config/logger.js')


/**
 * Big useless intro
 */
 Logger.intro()


/**
 * Setup Clusters
 * Single process & watch for development.
 */
if (process.env.environment === 'development') {
    let api = new Cluster('./api/node.js', 1)
    api.watch('./api')

    let src = new Cluster('./core/node.js', 1)
    src.watch('./core')

    let tst = new Cluster('./test.js', 1)
}


/**
 * All cores w/o watch in production
 */
if (process.env.environment === 'production') {
    let api = new Cluster('./api/app.js')
}
