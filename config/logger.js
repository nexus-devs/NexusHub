"use strict"

/**
 * Dependencies
 */
const chalk = require("chalk")
const Raven = require("raven")

/**
 * Main Logger class. Used for interface fluff & Sentry.io
 */
class Logger {

    constructor() {
        this.raven = Raven
        this.raven.config(process.env.raven_url).install()
    }

    /**
     * Big Useless intro
     */
    intro() {
        console.log(" ")
        console.log(chalk.grey(":: Nexus-Stats Warframe Resource Server " + process.env.version))
        console.log(chalk.grey(":: Launching Cluster..."))
        console.log(" ")
        console.log(chalk.grey("---------------------------------------------------------------"))
        console.log(" ")
        console.log("                            L;                                \n                             t@8;                             \n                              ;@@@0;                          \n                               ,@@@@@0;                       \n                                 0@@@@@@0:                    \n                  8tttt1i;:,      L@@@@@@8                    \n                  @@fttttt1.       1@@@@@8                    \n                  @@@Lttt,          ;@@@@8                    \n                  @@@@G;           itf@@@8                    \n                  @@@@@G         ;ttttt8@8                    \n                  @@@@@@8.     .itttttttG8                    \n                  @@@@@@@@:           .:;t                    \n                   .L@@@@@@1                                  \n                      .L@@@@L                                 \n                         .L@@0      " + chalk.green(process.env.version) + "                   \n                            .L8,                              \n                               ..                  ")
        console.log(" ")
        console.log(" ")
        console.log(chalk.grey(":: " + new Date()))
        console.log(":: Environment : " + process.env.environment)
        console.log(":: Redis       : " + process.env.redis_port)
        console.log(":: Mongo       : " + process.env.mongo_port)
        console.log(chalk.grey("---------------------------------------------------------------"))
        console.log(" ")
    }
}

module.exports = new Logger()
