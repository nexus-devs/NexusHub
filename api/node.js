#!/usr/bin/env node

/**
 * Globals
 */
global.cli = require('../config/log/logger.js')


/**
 * Describes parent class which controls all objects handling input/output
 */
class api {

    constructor() {

        // Start time measurement
        cli.time(process.env.api_id, cli.chalk.reset("Port: " + process.env.api_port) + cli.chalk.green(' [online]'))


        // Setup HTTP (Express) server
        this.setupHttpServer()

        // Attach Socket.io to server
        .then(() => this.setupSockets())

        // Load RequestController into server adapters
        .then(() => this.applyRequestController())

        // Finish time measurements
        .then(cli.timeEnd(process.env.api_id, cli.chalk.reset("Port: " + process.env.api_port) + cli.chalk.green(' [online]')))
    }


    /**
     * Loads up instance of the http class including an express http server
     */
    setupHttpServer() {
        return new Promise((resolve, reject) => {

            // Load prerequisites
            let debug = require('./connections/debugger.js')
            let port = debug.normalizePort(process.env.api_port)

            // Set up Express server
            this.http = new(require('./connections/http.js'))(port)

            // When ready -> include debugger & resolve
            this.http.server.on('listening', listener => {
                debug.onListening(listener, this.http.server)
                resolve()
            })
        })
    }


    /**
     * Lets Socket.io connect to previously set up http server
     */
    setupSockets() {
        return new Promise((resolve, reject) => {
            this.sockets = new(require('./connections/sockets.js'))(this.http.server)
            resolve()
        })
    }


    /**
     * Loads RequestController into server adapters to process actual request handling
     */
    applyRequestController() {
        return new Promise((resolve, reject) => {

            // Prepare RequestController Object
            let RequestController = require('./controllers/requestController.js')
            var requestController = new RequestController()
            requestController.setClient(this.sockets)

            // Bind RequestController to adapters
            this.http.requestController = requestController
            this.sockets.requestController = requestController

            resolve()
        })
    }
}

module.exports = new api
