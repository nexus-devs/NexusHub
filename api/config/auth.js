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
    interval: 10000,
    maxInInterval: 50
})

// Rate Limiter for privileged scope
const mid_limit = RateLimiter({
    redis: client,
    namespace: "MidAccessLimit",
    interval: 10000,
    maxInInterval: 20,
    minDifference: 250
})

// Rate Limiter for no tokens
const high_limit = RateLimiter({
    redis: client,
    namespace: "HighAccessLimit",
    interval: 10000,
    maxInInterval: 10,
    minDifference: 500
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

        // Rate Limiting
        //io.use((socket, next) => {
        //
        //    socket.use((packet, next) => {
        //       this.rateLimiter(socket, null, next)
        //    })
        //    next()
        //})
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
     * Rolling Rate Limiting with Redis
     */
    rateLimiter(req, res, next) {

        // No Token provided -> High limit, 1req/s
        if (!req.user.scp) {
            high_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft, req.user))
        }

        // User is root -> skip limiting
        else if (req.user.scp.includes("root")) {
            next()
        }

        // Token provided & privileged user -> No minDifference, 5req/s
        else if (req.user.scp.includes("privileged")) {
            low_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft, req.user))
        }

        // Token provided & default user -> Enhanced limits, 2req/s
        else if (req.user.scp.includes("default")) {
            mid_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft, req.user))
        }
    }


    /**
     * Actual rate limiting logic
     */
    limit(err, req, res, next, timeLeft, user) {

        // Return any errors
        if (err) {
            this.sendException("Rate Limit Exceeded.", user, 'Sockets', next)
        }

        // Limit Rate if necessary
        else if (timeLeft) {

            // If socket -> change source
            if (req.nsp) {
                this.sendException("Rate Limit Exceeded.", user, 'Sockets', next)
            }

        }

        // Otherwise allow
        else {
            next()
        }
    }


    /**
     * Handles errors and logs authentications
     */
    sendException(err, user, source, next) {
        let prefix = cli.getPrefix(source, cli.service_max)

        // Err check
        if (err) {
            cli.log(process.env.api_id, 'warn', prefix + user + ' ' + err, 'out')

            // Socket.io error handling is shit -> send raw err obj
            if(source === 'Sockets'){
                next()
            }
            next(new Error(err))

        } else {
            cli.log(process.env.api_id, 'ok', prefix + user + ' authorized', 'in')
        }
    }
}

module.exports = new Authentication()
