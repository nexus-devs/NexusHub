/**
 * Token based authentication using JWT & Passport
 */

/**
 * JSON Web Tokens
 */
const jwt = require('jsonwebtoken')

/**
 * Redis Client for rate limiting
 */
const Redis = require("redis")
const client = Redis.createClient()

/**
 * Rolling Rate Limiting
 */
const RateLimiter = require("rolling-rate-limiter")

// Rate Limiter for privileged scope
const low_limit = RateLimiter({
    redis: client,
    namespace: "LowAccessLimit",
    interval: 5000,
    maxInInterval: 25
})

// Rate Limiter for registered users
const mid_limit = RateLimiter({
    redis: client,
    namespace: "MidAccessLimit",
    interval: 5000,
    maxInInterval: 10,
    minDifference: 150
})

// Rate Limiter for no tokens
const high_limit = RateLimiter({
    redis: client,
    namespace: "HighAccessLimit",
    interval: 10000,
    maxInInterval: 10,
    minDifference: 300
})



/**
 * Describes authorization protocol for socket/http requests
 */
class Authentication {

    constructor() {}

    /**
     * Force JWT auth on all routes
     * No token -> Default user
     */
    configExpress(app) {

        // Verify JWT
        app.use((req, res, next) => this.verifyExpress(req, res, next))

        // Rate Limiting
        app.use((req, res, next) => this.rateLimiter(req, res, next))

        // Error Handler
        app.use((err, req, res, next) => res.status(err.status || 500).send(err.message))
    }


    /**
     * Enable JWT on socket connect to assing socket.user
     */
    configSockets(io) {

        // Verify JWT on initial connect
        io.use((socket, next) => this.verifySocket(socket, next))
    }


    /**
     * Express Middleware to verify JWT if present
     */
    verifyExpress(req, res, next) {
        let user = req.ip // + ' [' + req.headers['user-agent'] + ']'

        // Token present?
        if (req.headers.authorization) {

            let token = req.headers.authorization.replace("bearer ", "").replace("Bearer ", "")

            // Set req.user from token
            try {
                req.user = jwt.verify(token, process.env.cert)
                this.sendException(null, req.user.uid, 'REST')
                next()
            }

            // Invalid Token
            catch (err) {
                this.sendException(err.name, user, 'REST', next)
            }
        }

        // Set IP as user instead of that of token
        else {
            req.user = {
                uid: user
            }
            next()
        }
    }


    /**
     * Socket.io Middleware to verify JWT if present
     */
    verifySocket(socket, next) {
        let user = socket.request.connection.remoteAddress // + ' [' + socket.request.headers['user-agent'] + ']'

        // Token sent at all?
        if (socket.handshake.query.bearer) {
            let token = socket.handshake.query.bearer

            // Set req.user from token
            try {
                socket.user = jwt.verify(token, process.env.cert)
                this.sendException(null, socket.user.uid, 'Sockets')
                next()
            }

            // Invalid Token
            catch (err) {
                this.sendException(err.name, user, 'Sockets', next)
            }
        }

        // Set IP as user instead of that of token
        else {
            socket.user = {
                uid: user
            }
            next()
        }
    }


    /**
     * Callback-supported error handling on each socket request
     * Circumvents restrictive socket.io middleware
     */
    verifySocketRequest(socket){

        // Rate Limit Check
        this.rateLimiter(socket)

        // .blocked is assigned through auth.rateLimiter
        if (socket.blocked) {
            cli.log(process.env.api_id, 'warn', cli.getPrefix('Sockets', cli.service_max) + socket.user.uid + ' ' + socket.blocked, 'out')

            return ({
                statusCode: 429,
                body: socket.blocked
            })
        }

        // Check if token expired
        else if (new Date().getTime() / 1000 - socket.user.exp > 0) {
            cli.log(process.env.api_id, 'warn', cli.getPrefix('Sockets', cli.service_max) + socket.user.uid + ' ' + "TokenExpiredError", 'out')

            return ({
                statusCode: 500,
                body: "TokenExpiredError"
            })
        }

        // Normal response
        else {
            return "granted"
        }
    }


    /**
     * Rolling Rate Limiting with Redis
     */
    rateLimiter(req, res, next) {

        // No Token provided -> High limit, 1req/s
        if (!req.user.scp) {
            high_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft, req.user.uid))
        }

        // User is root -> skip limiting
        else if (req.user.scp.includes("root")) {
            next()
        }

        // Token provided & privileged user -> No minDifference, 5req/s
        else if (req.user.scp.includes("privileged")) {
            low_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft, req.user.uid))
        }

        // Token provided & default user -> Enhanced limits, 2req/s
        else if (req.user.scp.includes("default")) {
            mid_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft, req.user.uid))
        }
    }


    /**
     * Actual rate limiting logic
     */
    limit(err, req, res, next, timeLeft, user) {

        // Return any errors
        if (err) {
            this.sendException("Uncaught Exception.", user, 'RateLimit', next, res)
        }

        // Limit Rate if necessary
        else if (timeLeft) {

            // Figure out why request got limited
            if(timeLeft > 0){
                var err = "Rate limit exceeded. Request intervals too close."
            } else {
                var err = "Rate limit exceeded. Max requests per interval reached."
            }

            // If socket -> let socket.pass() handle rejections
            if (req.nsp) {
                req.blocked = err
            } else {
                this.sendException(err, user, 'REST', next, res)
            }

        }

        // Otherwise allow
        else {
            if(req.nsp) req.blocked = false// Remove Blocked State for socket
            else next() // next express middleware
        }
    }


    /**
     * Handles errors and logs authentications
     */
    sendException(err, user, source, next, res) {
        let prefix = cli.getPrefix(source, cli.service_max)

        // Err check
        if (err) {
            cli.log(process.env.api_id, 'warn', prefix + user + ' ' + err, 'out')

            // Socket.io error handling is shit -> send raw err obj separately or bind data to socket object
            if (source === 'Sockets') {
                next()
            }
            if (err.includes("Rate Limit Exceeded.")) res.status(429).send(err)
            else next(new Error(err))

        } else {
            cli.log(process.env.api_id, 'ok', prefix + user + ' authorized', 'in')
        }
    }
}

module.exports = new Authentication()
