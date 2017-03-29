'use strict'

/**
 * Globals
 */
global.cli = require('../config/log/logger.js')


/**
 * Time measurement
 */
cli.time(process.env.api_id, cli.chalk.reset("Port: " + process.env.api_port) + cli.chalk.green(' [online]'))


/**
 * Middleware Functions
 */
const auth = require('./middleware/auth.js')
const parser = require('./middleware/requestParser.js')


/**
 * Describes parent class which controls all objects handling input/output
 */
class api {


    /**
     * Loads up HTTP/Sockets server and modifies it
     */
    constructor() {

        // Build up Server
        this.setupHttpServer()
        .then(() => this.setupSockets())
        .then(() => this.applyMiddleware())
        .then(() => this.applyRoutes())
        .then(() => this.applyRequestController())

        // Finish Time Measurement
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
        this.sockets = new(require('./connections/sockets.js'))(this.http.server)
    }


    /**
     * Applies Middleware to adapters
     */
    applyMiddleware() {

        // Enable JWT auth
        auth.configExpress(this.http.app)
        auth.configSockets(this.sockets)

        // Rate limiting middleware for express/sockets
        this.use((req, res, next) => auth.rateLimiter(req, res, next))

        // Check if RequestController is already bound to adapter
        this.use((req, res, next) => {
            if (!this.http.requestController || !this.sockets.requestController) next('Rebooting. Try again in a few seconds')
            else next()
        })

        // Parse URL Request into JSON Object
        this.use((req, res, next) => parser.parse(req, res, next))
    }


    /**
     * Apply Routes/Events after Middleware for correct order
     */
    applyRoutes() {

        // Express
        require('./config/routes.js')(this.http)

        // Socket.io
        require('./config/events.js')(this.sockets)
    }


    /**
     * Loads RequestController into server adapters to process actual request handling
     */
    applyRequestController() {

        // Prepare RequestController Object
        let requestController = new(require('./controllers/RequestController.js'))
        requestController.setClient(this.sockets)

        // Bind RequestController to adapters
        this.http.requestController = requestController
        this.sockets.requestController = requestController
    }


    /**
     * Sets up connection adapter middleware fired on each request
     */
    use(fn) {
        this.http.use(fn)
        this.sockets.use(fn)
    }
}

module.exports = new api
