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
const auth = require('../../config/auth.js')


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
        require('../../config/routes.js')(this, auth)
    }


    /**
     * Respond to incoming requests passed by routes
     * Resource is set in routes
     */
    pass(req, res, resource) {
        let user = req.user ? req.user : {sub: req.ip}

        console.log(user)

        // Assign values to request
        var request = {
            user: user,
            method: req.method,
            resource: resource,
            query: req.params.query,
            params: req.query
        }

        cli.logRequest(process.env.api_id, 'REST ' + request)

        // Send Request to Controller
        var response = requestController.getResponse(request)

        cli.logRequestEnd(process.env.api_id, 'REST ' + response)

        // Return data from RequestController
        res.status(response.status).send(response.body)
    }
}

module.exports = HttpAdapter
