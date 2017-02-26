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


/**
 * Local Controllers
 */
const requestController = new(require('../controllers/requestController.js'))
const cacheController = new(require('../controllers/cacheController.js'))
const cli = require('../bin/logger.js')


/**
 * Set up Authentication
 */
const auth = require('../config/auth.js')
var passport  = require('passport')


class HttpAdapter {

    constructor() {

        /**
         * Load Express
         */
        this.app = express()

        /**
         * Apply passport config to passport var
         */
        auth.configPassport(passport)

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
     * Passport config
     * Required for persistent login sessions
     * Passport needs ability to serialize and unserialize users out of session
     */
    configPassport() {
        require('../config/passport.js')(passport, auth)
    }


    /**
     * Let App use middleware from authController
     */
    configMiddleware() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
            .use(bodyParser.json())
            .use(passport.initialize())
    }


    /**
     * Config Routes
     */
    configRoutes() {
        require('../config/routes.js')(this.app, passport, this, cli)
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
