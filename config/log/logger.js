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

    constructor() {
        this.chalk = chalk

        this.id_max = 17 // characters used for process id

        this.service_max = 9 // characters used for services (socket/express, etc)
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
    logRequest(caller, request) {

        // Parse params obj into original source
        let params = JSON.stringify(request.params).replace(/{/g, '').replace(/}/g, '').replace(/,/g, '&').replace(/:/g, '=').replace(/"/g, '')

        // Get Service prefix
        let service = this.getPrefix(request.channel, this.service_max)

        // User authenticated? -> Highlight in green
        if (request.user.scope) {
            this.log(caller, 'neutral', (service + chalk.green(request.user.sub) + ' ' + request.method + ' /' + request.resource + '/' + request.query + '?' + params), 'in')
            this.time(caller, '> ')
        } else {
            this.log(caller, 'neutral', (service + request.user.sub + ' ' + request.method + ' /' + request.resource + '/' + request.query + '?' + params), 'in')
            this.time(caller, '> ')
        }

    }

    logRequestEnd(caller, response) {

        // Get Service prefix
        let service = this.getPrefix(response.channel, this.service_max)

        if (response.status === 200) {
            this.log(caller, 'ok', service + response.body, 'out')
        } else {
            this.log(caller, 'err', service + response.body, 'out')
        }

        this.timeEnd(caller, '> ')
    }


    /**
     * @caller describes place where log is invoked
     * @io describes whether this is an input/output log
     * @status describes level (ok, warn, err, neutral). Applies to @io instead of msg if selected.
     * @msg normal text log
     */
    log(caller, status, msg, io) {
        if (io !== false) {
            this.logIO(caller, status, msg, io)
        } else {
            this.logOther(caller, status, msg)
        }
    }

    logIO(caller, status, msg, io) {
        // Set Prefix, Remove Time Measurement color
        let prefix = (this.getPrefix(caller, this.id_max))

        //ok
        if (status === 'ok') {
            if (io === 'in') {
                log(prefix + chalk.green('< ') + msg)
            } else if (io === 'out') {
                log(prefix + chalk.green('> ') + msg)
            } else {
                err(chalk.red('Use in/out for io parameter'))
            }
        }

        //warn
        if (status === 'warn') {
            if (io === 'in') {
                warn(prefix + chalk.yellow('< ') + msg)
            } else if (io === 'out') {
                warn(prefix + chalk.yellow('> ') + msg)
            } else {
                err(chalk.red('Use in/out for io parameter'))
            }
        }

        //err
        if (status === 'err') {
            if (io === 'in') {
                err(prefix + chalk.red('< ') + msg)
            } else if (io === 'out') {
                err(prefix + chalk.red('> ') + msg)
            } else {
                err(chalk.red('Use in/out for io parameter'))
            }
        }

        //neut
        if (status === 'neutral') {
            if (io === 'in') {
                log(prefix + '< ' + msg)
            } else if (io === 'out') {
                log(prefix + '> ' + msg)
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
            log(prefix + chalk.green(msg))
        }

        //warn
        if (status === 'warn') {
            warn(prefix + chalk.yellow(msg))
        }

        //err
        if (status === 'err') {
            err(prefix + chalk.red(msg))
        }

        //neut
        if (status === 'neutral') {
            log(prefix + msg)
        }

    }


    /**
     * Generate Prefix for caller, so everything is in the same vertical line
     */
    getPrefix(caller, max) {

        // Attach pid to caller if max >= 15
        if(max >= 15) caller = caller + " [" + process.pid + "]"
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
