const chalk = require('chalk')
const log = console.log
const err = console.error
const warn = console.warn
const time = console.time
const timeEnd = console.timeEnd

/**
 * Useless, messy, inefficient Console Logger
 * Might be used for actual logging later
 */
class cli {

    /**
     * Defines Prefix limits
     */
    constructor() {
        this.chalk = chalk

        this.id_max = 10 // characters used for process id

        this.service_max = 9 // characters used for services (socket/express, etc)
    }


    /**
     * Intro used on initial startup
     */
    intro() {
        log(" ")
        log(chalk.grey(":: Nexus-Stats Warframe Resource Server v0.0.1"))
        log(chalk.grey(":: Launching Cluster..."))
        log(" ")
        log(chalk.grey("---------------------------------------------------------------"))
        log(" ")
        log("                            L;                                \n                             t@8;                             \n                              ;@@@0;                          \n                               ,@@@@@0;                       \n                                 0@@@@@@0:                    \n                  8tttt1i;:,      L@@@@@@8                    \n                  @@fttttt1.       1@@@@@8                    \n                  @@@Lttt,          ;@@@@8                    \n                  @@@@G;           itf@@@8                    \n                  @@@@@G         ;ttttt8@8                    \n                  @@@@@@8.     .itttttttG8                    \n                  @@@@@@@@:           .:;t                    \n                   .L@@@@@@1                                  \n                      .L@@@@L                                 \n                         .L@@0                                \n                            .L8,                              \n                               ..                  ")
        log(" ")
        log(" ")
        log(chalk.grey(":: " + new Date()))
        log("Environment : " + process.env.environment)
        log("Redis       : " + process.env.redis_port)
        log("Mongo       : " + process.env.mongo_port)
        log(chalk.grey("---------------------------------------------------------------"))
        log(" ")
    }


    /**
     * Timed Logging
     */
    time(caller, msg) {
        let prefix = (chalk.styles.gray.close + this.getPrefix(caller, this.id_max))
        time(prefix + chalk.grey(msg))
    }

    timeEnd(caller, msg) {
        let prefix = (chalk.styles.gray.close + this.getPrefix(caller, this.id_max))
        timeEnd(prefix + chalk.grey(msg))
    }


    /**
     * Log API Requests
     * Makes important code a bit less messy
     */
    logRequest(caller, channel, request) {
        let service = this.getPrefix(channel, this.service_max)
        log(" ")

        // User authenticated? -> Highlight in green
        if (request.user.scp) {
            this.log(caller, 'ok', service + chalk.green(request.user.uid) + ' ' + request.method + ' ' + request.body.original, 'in', true)
            this.time(caller, '> ')
        } else {
            this.log(caller, 'neutral', service + request.user.uid + ' ' + request.method + ' ' + request.body.original, 'in', true)
            this.time(caller, '> ')
        }
    }

    logRequestEnd(caller, channel, response) {

        // Get Service prefix
        let service = this.getPrefix(channel, this.service_max)

        if (response.statusCode === 200) {
            this.log(caller, 'neutral', service + response.body, 'out', true)
        } else {
            this.log(caller, 'err', service + response.body, 'out', true)
        }

        this.timeEnd(caller, '> ')
        log(" ")
    }


    /**
     * @caller describes place where log is invoked
     * @io describes whether this is an input/output log
     * @status describes level (ok, warn, err, neutral). Applies to @io instead of msg if selected.
     * @msg normal text log
     */
    log(caller, status, msg, io, highlight) {
        if (io !== false) {
            if (highlight) {
                this.logIO(caller, status, msg, io, true)
            } else {
                this.logIO(caller, 'neutral', msg, io)
            }

        } else {
            this.logOther(caller, status, msg)
        }
    }

    logIO(caller, status, msg, io, highlight) {

        // Set Prefix
        if (highlight) {
            var prefix = (chalk.styles.gray.close + this.getPrefix(caller, this.id_max)) //Fix space issue
        } else {
            var prefix = (chalk.styles.gray.open + this.getPrefix(caller, this.id_max))
        }


        //ok
        if (status === 'ok') {
            if (io === 'in') {
                log(prefix + chalk.green('< ') + msg + chalk.styles.gray.close)
            } else if (io === 'out') {
                log(prefix + chalk.green('> ') + msg + chalk.styles.gray.close)
            } else {
                err(chalk.red('Use in/out for io parameter'))
            }
        }

        //warn
        if (status === 'warn') {
            if (io === 'in') {
                warn(prefix + chalk.yellow('< ') + msg + chalk.styles.gray.close)
            } else if (io === 'out') {
                warn(prefix + chalk.yellow('> ') + msg + chalk.styles.gray.close)
            } else {
                err(chalk.red('Use in/out for io parameter'))
            }
        }

        //err
        if (status === 'err') {
            if (io === 'in') {
                err(prefix + chalk.red('< ') + msg + chalk.styles.gray.close)
            } else if (io === 'out') {
                err(prefix + chalk.red('> ') + msg + chalk.styles.gray.close)
            } else {
                err(chalk.red('Use in/out for io parameter'))
            }
        }

        //neut
        if (status === 'neutral') {
            if (io === 'in') {
                log(prefix + '< ' + msg + chalk.styles.gray.close)
            } else if (io === 'out') {
                log(prefix + '> ' + msg + chalk.styles.gray.close)
            } else {
                err(chalk.red('Use in/out for io parameter'))
            }
        }
    }

    logOther(caller, status, msg) {
        // Set Prefix
        let prefix = (this.getPrefix(caller, this.id_max))

        //ok
        if (status === 'ok') {
            log(prefix + chalk.green(msg) + chalk.styles.gray.close)
        }

        //warn
        if (status === 'warn') {
            warn(prefix + chalk.yellow(msg) + chalk.styles.gray.close)
        }

        //err
        if (status === 'err') {
            err(prefix + chalk.red(msg) + chalk.styles.gray.close)
        }

        //neut
        if (status === 'neutral') {
            log(prefix + msg + chalk.styles.gray.close)
        }

    }


    /**
     * Generate Prefix for caller, so everything is in the same vertical line
     */
    getPrefix(caller, max) {

        // Attach pid to caller if max >= 15
        if (max > 9) caller = caller + "-" + process.pid
        let prefix = caller

        // Fill up 15 chars in width
        for (let i = 0; i < max - caller.length; i++) {
            prefix += " "
        }
        prefix += "| "

        return prefix
    }
}

module.exports = new cli()
