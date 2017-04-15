"use strict"

/**
 * Middleware Functions
 */
const bodyParser = require("body-parser")
const auth = require("../middleware/auth.js")
const limit = require("../middleware/limiter.js")
const parser = require("../middleware/requestParser.js")
const logger = require("../middleware/logger.js")


/**
 * Procedurally builds up http/sockets server
 */
class Server {

    /**
     * Loads up HTTP/Sockets server and modifies it
     */
    constructor() {

        // Build up Server
        this.setupHttpServer()
        this.setupSockets()

        // Config Express & Sockets.io
        this.applyMiddleware()
        this.applyRoutes()
        this.setRequestClient()
    }


    /**
     * Loads up instance of the http class including an express http server
     */
    setupHttpServer() {
        this.http = new(require("./adapters/http.js"))(process.env.api_port)
    }


    /**
     * Lets Socket.io connect to previously set up http server
     */
    setupSockets() {
        this.sockets = new(require("./adapters/sockets.js"))(this.http.server)
    }


    /**
     * Applies Middleware to adapters
     */
    applyMiddleware() {

        // Use BodyParser for Express
        this.http.app.use(bodyParser.urlencoded({
                extended: false
            }))
            .use(bodyParser.json())

        // Enable JWT auth (native middleware)
        auth.configExpress(this.http.app)
        auth.configSockets(this.sockets)

        // Parse URL Request into JSON Object
        this.use((req, res, next) => parser.parse(req, res, next))

        // Use custom Logger for i/o
        this.use((req, res, next) => logger.log(req, res, next))

        // Rate limiting middleware for express/sockets
        this.use((req, res, next) => limit.check(req, res, next))
    }


    /**
     * Apply Routes/Events after Middleware for correct order
     */
    applyRoutes() {
        require("../config/routes.js")(this.http)
        require("../config/events.js")(this.sockets, this.http)
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

module.exports = Server
