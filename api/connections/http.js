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
 * Set up Authentication requirements
 */
const auth = require('../config/auth.js')


/**
 * Listens to and handles incoming HTTP connections
 */
class HttpAdapter {

    constructor(port) {

        /**
         * Load Express
         */
        this.app = express()

        /**
         * Start HTTP server.
         */
        this.app.set('port', port)
        this.server = http.createServer(this.app)
        this.server.listen(port)

        /**
         * Apply Middleware Config to this.app
         */
        this.configMiddleware()

        /**
         * Set Routes for this.app
         */
        this.configRoutes()
    }


    /**
     * Let App use middleware from authController
     */
    configMiddleware() {

        // Middleware to parse auth requests
        this.app.use(bodyParser.urlencoded({
                extended: false
            }))
            .use(bodyParser.json())

        // Enable JWT auth
        auth.configExpress(this.app)
    }


    /**
     * Config Routes
     */
    configRoutes() {
        require('../config/routes.js')(this)
    }


    /**
     * Functions to run before allowing request
     * Will be manual for now, middleware later
     */
    prepass(req, res, resource) {

        // RequestController already bound?
        if (this.requestController) this.pass(req, res, resource)


        // Send 503 instead
        else res.status(503).send('Rebooting. Try again in a few seconds.')
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

}

module.exports = HttpAdapter
