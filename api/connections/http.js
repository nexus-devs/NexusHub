'use strict'

/**
 * Express app for public HTTP server
 * The public socket server will also bind to this server
 */


/**
 * Express dependencies
 */
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

/**
 * Middleware
 */
const reload = require('require-reload')(require) // layer needs to be hot-reloaded for out-of-class variables
let Layer = reload('./layers.js')


/**
 * Class describing the logic for handling each incoming request
 */
class HttpAdapter {

    constructor(port) {

        // Load Express
        this.app = express()

        // Start HTTP server.
        this.app.set('port', port)
        this.server = http.createServer(this.app)
        this.server.listen(port)

        // Body Parser Middleware
        this.app.use(bodyParser.urlencoded({
                extended: false
            }))
            .use(bodyParser.json())

        // Create empty adapter middleware stack
        this.stack = []
    }


    /**
     * Functions to run before allowing request
     */
    prepass(req, res, resource) {

        // Create new layer object for middleware
        Layer = reload('./layers.js')
        let layer = new Layer()

        // Iterate through middleware function stack
        layer.runStack(req, res, this.stack)
            .then(() => this.pass(req, res, resource))
            .catch(() => {})
    }


    /**
     * Respond to incoming requests passed by routes
     * Resource is set in routes
     */
    pass(req, res, resource) {
        cli.logRequest(process.env.api_id, 'REST', req)

        // Send Request to Controller
        let response = this.requestController.getResponse(req)

        cli.logRequestEnd(process.env.api_id, 'REST', response)

        // Return data from RequestController
        res.status(response.statusCode).send(response.body)
    }


    /**
     * Accepts middleware to run before this.pass().
     */
    use(fn) {
        this.stack.unshift(fn)
    }
}

module.exports = HttpAdapter
