/**
 * Globals
 */
require('./config/env.js')
global.cli = require('./config/log/logger.js')


/**
 * Dependencies
 */
const Cluster = require('multi-Cluster')


/**
 * Big useless Intro
 */
process.stdout.write('\033c')
cli.intro()


/**
 * Setup Clusters
 * Single process & watch for development.
 */
if (process.env.environment === 'development') {
    let api = new Cluster('./api/node.js', 1)
    api.watch('./api')

    let src = new Cluster('./core/node.js', 1)
    src.watch('./core')

    let tst = new Cluster('./test/node.js', 1)
    tst.watch('./test')
}


/**
 * All cores w/o watch in production
 */
if (process.env.environment === 'production') {
    let api = new Cluster('./api/app.js')
}
