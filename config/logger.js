"use strict"

/**
 * Dependencies
 */
const chalk = require("chalk")

/**
 * Main Logger class. Used for interface fluff & Sentry.io
 */
class Logger {

    constructor() {
        this.intro()
    }

    /**
     * Big Useless intro
     */
    intro() {
        console.log(" ")
        console.log(chalk.grey(":: Nexus-Stats Warframe Server v.2.1.1"))
        console.log(chalk.grey(":: Launching blitz.js stack..."))
        console.log(" ")
        console.log(chalk.grey("---------------------------------------------------------------"))
        console.log(" ")
        console.log("                            L;                                \n                             t@8;                             \n                              ;@@@0;                          \n                               ,@@@@@0;                       \n                                 0@@@@@@0:                    \n                  8tttt1i;:,      L@@@@@@8                    \n                  @@fttttt1.       1@@@@@8                    \n                  @@@Lttt,          ;@@@@8                    \n                  @@@@G;           itf@@@8                    \n                  @@@@@G         ;ttttt8@8                    \n                  @@@@@@8.     .itttttttG8                    \n                  @@@@@@@@:           .:;t                    \n                   .L@@@@@@1                                  \n                      .L@@@@L                                 \n                         .L@@0     " + chalk.green("v.2.1.1") + "                   \n                            .L8,                              \n                               ..                  ")
        console.log(" ")
        console.log(" ")
        console.log(chalk.grey(":: " + new Date()))
        console.log(":: Environment : " + blitz.config.local.environment)
        console.log(":: LogLevel    : " + blitz.config.local.logLevel)
        console.log(chalk.grey("---------------------------------------------------------------"))
        console.log(" ")
    }
}

module.exports = new Logger()
