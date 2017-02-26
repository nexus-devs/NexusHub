/**
 * Express app for public HTTP server
 * The public socket server will also bind to this server
 */


/**
 * Set up express
 */
const express      = require('express')
const bodyParser   = require('body-parser')
const routes       = require('../config/routes.js')
const ejwt = require('express-jwt')


/**
 * Local Controllers
 */
const requestController = new(require('../controllers/requestController.js'))
const cacheController = new(require('../controllers/cacheController.js'))
const cli = require('../bin/logger.js')


/**
 * Set up Authentication requirements
 */
const auth = require('../config/auth.js')
var passport  = require('passport')
auth.configPassport(passport)


class HttpAdapter {

    constructor() {

        /**
         * Load Express
         */
        this.app = express()

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
        this.app.use(bodyParser.urlencoded({ extended: false }))
            .use(bodyParser.json())
            .use(passport.initialize())

        // Enable JWT auth
        auth.configExpress(this.app)
    }


    /**
     * Config Routes
     */
    configRoutes() {
        require('../config/routes.js')(this, auth, passport)
    }


    /**
     * Respond to incoming requests passed by routes
     * Resource is set in routes
     */
    res(req, res, resource) {

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

module.exports = new HttpAdapter()
