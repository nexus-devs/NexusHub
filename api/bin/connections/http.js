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
 * Local Controllers
 */
const requestController = new(require('../../controllers/requestController.js'))
const cacheController = new(require('../../controllers/cacheController.js'))


/**
 * Set up Authentication requirements
 */
const auth = require('../../config/auth/auth.js')


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
            .use(auth.passport.initialize())

        // Enable JWT auth
        auth.configExpress(this.app)
    }


    /**
     * Config Routes
     */
    configRoutes() {
        require('../../config/endpoints/routes.js')(this, auth)
    }


    /**
     * Respond to incoming requests passed by routes
     * Resource is set in routes
     */
    pass(req, res, resource) {

        console.log(req.headers)

        // Assign values to schema
        var request = {
            method: req.method,
            resource: resource,
            query: req.params.query,
            params: req.query
        }

        cli.logRequest('REST', request)

        // Send Request to Controller
        var response = requestController.getResponse(request)

        cli.logRequestEnd('REST', response)

        // Return data from RequestController
        res.status(response.status).send(response.body)
    }
}

module.exports = HttpAdapter
