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
const bodyParser = require('body-parser')
const auth = require('./middleware/auth.js')
const parser = require('./middleware/requestParser.js')


/**
 * Procedurally builds up http/sockets server
 */
class api {

    /**
     * Loads up HTTP/Sockets server and modifies it
     */
    constructor() {

        // Build up Server
        this.setupHttpServer()

            // Core Sockets Logic
            .then(() => this.setupSockets())
            .then(() => this.applyMiddleware())
            .then(() => this.applyRoutes())
            .then(() => this.setRequestClient())

            // Finish Time Measurement
            .then(() => cli.timeEnd(process.env.api_id, cli.chalk.reset("Port: " + process.env.api_port) + cli.chalk.green(' [online]')))
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

        // Use BodyParser for express
        this.http.app.use(bodyParser.urlencoded({extended: false}))
            .use(bodyParser.json())

        // Enable JWT auth
        auth.configExpress(this.http.app)
        auth.configSockets(this.sockets)

        // Rate limiting middleware for express/sockets
        this.use((req, res, next) => auth.rateLimiter(req, res, next))

        // Check if RequestController is connected to db && bound to adapter
        this.use((req, res, next) => {
            if (!this.http.request.ready || !this.sockets.request.ready) next('Rebooting. Try again in a few seconds')
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

        // Listen to endpoint config from core nodes
        this.sockets.root.on('connection', (socket) => {

            // Listen to endpoint config event
            socket.on('config', (endpoints) => {
                cli.log(process.env.api_id, 'neutral', 'Sockets  | ' + socket.user.uid + ' CONFIG ' + endpoints, 'in')

                // Sockets
                this.sockets.request.saveEndpoints(endpoints)

                // HTTP
                this.http.request.saveEndpoints(endpoints)
                this.applyEndpoints(endpoints)
            })
        })
    }


    /**
     * Apply Routes from given core node endpoints
     */
    applyEndpoints(endpoints) {
        endpoints.forEach((endpoint) => {
            this.http.app.all(endpoint.route, (req, res) => this.http.prepass(req, res))
        })
    }


    /**
     * Loads RequestController into server adapters to process actual request handling
     */
    setRequestClient() {
        this.http.request.client = this.sockets
        this.sockets.request.client = this.sockets
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
