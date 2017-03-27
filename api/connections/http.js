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
const Layers = require('./layers.js')


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
        let layer = new Layers()

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

        // Assign values to request
        var request = {
            user: req.user,
            method: req.method,
            resource: resource,
            query: req.params.query,
            params: req.query,
            channel: 'REST' // only relevant for logging
        }

        cli.logRequest(process.env.api_id, request)

        // Send Request to Controller
        var response = this.requestController.getResponse(request)
        response.channel = 'REST' // only relevant for logging

        cli.logRequestEnd(process.env.api_id, response)

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
