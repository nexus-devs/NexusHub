/**
 * Globals
 */
require('./config/env.config.js')


/**
 * Dependencies
 */
const chalk = require('chalk')
const log = console.log
const cluster = require('multi-cluster')


/**
 * Big useless Intro
 */
process.stdout.write('\033c')
log(" ")
log(chalk.grey("Nexus-Stats Warframe Resource Server v0.0.1"))
log(chalk.grey("Launching Cluster..."))
log(chalk.grey("---------------------------------------------------------------"))
log(" ")
log("                            L;                                \n                             t@8;                             \n                              ;@@@0;                          \n                               ,@@@@@0;                       \n                                 0@@@@@@0:                    \n                  8tttt1i;:,      L@@@@@@8                    \n                  @@fttttt1.       1@@@@@8                    \n                  @@@Lttt,          ;@@@@8                    \n                  @@@@G;           itf@@@8                    \n                  @@@@@G         ;ttttt8@8                    \n                  @@@@@@8.     .itttttttG8                    \n                  @@@@@@@@:           .:;t                    \n                   .L@@@@@@1                                  \n                      .L@@@@L                                 \n                         .L@@0                                \n                            .L8,                              \n                               ..                  ")
log(" ")
log(chalk.grey("---------------------------------------------------------------"))
log(chalk.grey(":: " + new Date()))
log("Environment : " + process.env.environment)
log("Redis       : " + process.env.redis_port)
log("Mongo       : " + process.env.mongo_port)
log(chalk.grey("---------------------------------------------------------------"))
log(" ")



/**
 * Setup Clusters
 * Single process & watch for development.
 */
if (process.env.environment === 'development') {
    let api = new cluster('./api/node.js', 1)
    api.watch('./api')

    let src = new cluster('./src/node.js', 1)
    src.watch('./src')
}

/**
 * All cores w/o watch in production
 */
if (process.env.environment === 'production') {
    let api = new cluster('./api/app.js')
}
