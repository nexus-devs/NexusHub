const chalk = require('chalk')
const log = console.log
const time = console.time
const timeEnd = console.timeEnd

/**
 * Useless Console output Class
 * Might be used for actual logging later
 */
class cli {

    constructor() {}


    time(caller, msg) {
        var prefix = (chalk.styles.gray.close + this.getPrefix(caller))
        time(prefix + chalk.styles.gray.open + msg)
    }

    timeEnd(caller, msg) {
        var prefix = (chalk.styles.gray.close + this.getPrefix(caller))
        timeEnd(prefix + chalk.styles.gray.open + msg)
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
        var prefix = (chalk.styles.gray.close + this.getPrefix(caller))

        //ok
        if (status === 'ok') {
            if (io === 'in') {
                log(prefix + chalk.green('< ') + msg)
            } else if (io === 'out') {
                log(prefix + chalk.green('> ') + msg)
            } else {
                log(chalk.red('Use in/out for io parameter'))
            }
        }

        //warn
        if (status === 'warn') {
            if (io === 'in') {
                log(prefix + chalk.yellow('< ') + msg)
            } else if (io === 'out') {
                log(prefix + chalk.yellow('> ') + msg)
            } else {
                log(chalk.red('Use in/out for io parameter'))
            }
        }

        //warn
        if (status === 'err') {
            if (io === 'in') {
                log(prefix + chalk.red('< ') + msg)
            } else if (io === 'out') {
                log(prefix + chalk.red('> ') + msg)
            } else {
                log(chalk.red('Use in/out for io parameter'))
            }
        }

        //neut
        if (status === 'neutral') {
            if (io === 'in') {
                log(prefix + '< ' + msg)
            } else if (io === 'out') {
                log(prefix + '> ' + msg)
            } else {
                log(chalk.red('Use in/out for io parameter'))
            }
        }
    }

    logOther(caller, status, msg) {
        // Set Prefix
        var prefix = (chalk.styles.gray.close + this.getPrefix(caller))

        //ok
        if (status === 'ok') {
            log(prefix + chalk.green(msg))
        }

        //warn
        if (status === 'warn') {
            log(prefix + chalk.yellow(msg))
        }

        //err
        if (status === 'err') {
            log(prefix + chalk.red(msg))
        }

        //neut
        if (status === 'neutral') {
            log(prefix + msg)
        }

    }

    getPrefix(caller) {
        var prefix = caller

        // Fill up 15 chars in width
        for (var i = 0; i < 15 - caller.length; i++) {
            prefix += " "
        }
        prefix += "| "

        return prefix
    }
}

module.exports = new cli()
