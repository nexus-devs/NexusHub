'use strict'

const chalk = require('chalk')

/**
 * Logger Middleware
 */
class Logger {

    log(req, res, next) {

        // Prepare output
        this.setPrefix(req)
        this.setUser(req)
        this.logErr(next)
        //this.logRes(res)
        this.addTimer(res)

        // Actual Console Output
        console.log(this.prefix + chalk.grey(":: " + new Date()))
        console.log(`${this.prefix}< ${this.user.uid}: ${req.method} ${req.url}`)
        next()
    }


    /**
     * Identify if request sent by Socket.io or Express
     */
     setPrefix(req) {
        if (req.channel === "Sockets") {
            this.prefix = chalk.grey("Socket.io | ")
        } else {
            this.prefix = chalk.grey("Express   | ")
        }
     }


     /**
      * Color-code user authentication
      */
    setUser(req) {
        this.user = {}

        if(req.user.scp.includes("basic")) {
            this.user.uid = req.user.uid
        } else {
            this.user.uid = chalk.green(req.user.uid)
        }
    }


     /**
      * Log any errors passed to next()
      */
    logErr(next) {
        let _next = next
        next = (err) => {
            _next(err)
            if(err) {
                console.log(this.prefix + chalk.red("> ") + err)
            }
        }
    }


    /**
     * Log Output of res.send
     */
    logRes(res) {
        let io = "> "
        let _send = res.send
        let prefix = this.prefix

        res.send = function(body) {
           _send.call(this, body)

           // Output is error? (4xx/5xx/etc)
           if(res.statusCode.toString()[0] < 4){
               io = chalk.green(io)
           } else {
               io = chalk.red(io)
           }

           console.log(prefix + io + res.statusCode + ": " + body)
        }
    }


    /**
     * Add Timer to original res.send
     */
     addTimer(res) {
         let timestart = process.hrtime()
         let _send = res.send
         let prefix = this.prefix

         res.send = function(body) {
             if (typeof body === "object") {
                 body = JSON.stringify(body, this.app.get('json replacer'), this.app.get('json spaces'))
                 this.charset = this.charset || 'utf-8';
                 this.get('Content-Type') || this.set('Content-Type', 'application/json');
             }

             _send.call(this, body)
             let diff = process.hrtime(timestart)
             console.log(prefix + chalk.grey(`> ${(diff[0] * 1e9 + diff[1])/1e6} ms`))
             console.log(" ")
         }
     }
}

module.exports = new Logger()
