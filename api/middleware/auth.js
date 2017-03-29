'use strict'

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
    interval: 10000,
    maxInInterval: 12,
    minDifference: 750
})

// Rate Limiter for no tokens
const high_limit = RateLimiter({
    redis: client,
    namespace: "HighAccessLimit",
    interval: 10000,
    maxInInterval: 8,
    minDifference: 1000
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

        // Middleware Error Handler
        app.use((err, req, res, next) => res.status(err.status || 500).send(err.message))
    }


    /**
     * Verify JWT on socket connect to assing socket.user on handshake
     */
    configSockets(sockets) {

        // JWT Verification on handshake (uses native middleware)
        sockets.io.use((socket, next) => this.verifySocket(socket, next))

        // JWT Verification on each transaction (goes through adapter middleware)
        sockets.use((req, res, next) => this.verifyExpiration(req, res, next))
    }


    /**
     * Express Middleware to verify JWT if present. Also adds user to req.
     */
    verifyExpress(req, res, next) {
        req.user = {
            uid: req.ip
        }

        // Token present?
        if (req.headers.authorization) {

            let token = req.headers.authorization.replace("bearer ", "").replace("Bearer ", "")

            // Set req.user from token
            try {
                req.user = jwt.verify(token, process.env.cert)
                cli.log(process.env.api_id, 'ok', cli.getPrefix('REST', cli.service_max) + req.user.uid + ' authorized', 'in')
                return next()
            }

            // Invalid Token
            catch (err) {
                cli.log(process.env.api_id, 'warn', cli.getPrefix("REST", cli.service_max) + req.user.uid + ' ' + err, 'out')
                return next(err)
            }
        }

        // No token provided
        else {
            next()
        }
    }


    /**
     * Socket.io Middleware to verify JWT if present. Also adds user to req.
     */
    verifySocket(socket, next) {
        socket.user = {
            uid: socket.request.connection.remoteAddress
        }

        // Token sent at all?
        if (socket.handshake.query.bearer) {
            let token = socket.handshake.query.bearer

            // Set req.user from token
            try {
                socket.user = jwt.verify(token, process.env.cert)
                cli.log(process.env.api_id, 'ok', cli.getPrefix('Sockets', cli.service_max) + socket.user.uid + ' authorized', 'in')
                return next()
            }

            // Invalid Token
            catch (err) {
                cli.log(process.env.api_id, 'warn', cli.getPrefix("Sockets", cli.service_max) + socket.user.uid + ' ' + err, 'out')
                return next(err)
            }
        }

        // Set IP as user instead of that of token
        else {
            return next()
        }
    }


    /**
     * JWT Expiration check middleware for sockets (run on each prepass())
     */
    verifyExpiration(req, res, next) {
        if (new Date().getTime() / 1000 - req.user.exp > 0) {
            cli.log(process.env.api_id, 'warn', cli.getPrefix('Sockets', cli.service_max) + req.user.uid + ' ' + "TokenExpiredError: jwt expired", 'out')
            return next("jwt expired")
        } else {
            return next()
        }
    }


    /**
     * Rolling Rate Limiting with Redis
     */
    rateLimiter(req, res, next) {

        // No Token provided -> High limit, 1req/s
        if (!req.user.scp) {
            high_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft))
        }

        // User is root -> skip limiting
        else if (req.user.scp.includes("root")) {
            return next()
        }

        // Token provided & privileged user -> No minDifference, 5req/s
        else if (req.user.scp.includes("privileged")) {
            low_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft))
        }

        // Token provided & default user -> Enhanced limits, 2req/s
        else if (req.user.scp.includes("default")) {
            mid_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft))
        }
    }


    /**
     * Rate Limit error handling
     */
    limit(err, req, res, next, timeLeft) {

        // Return any errors
        if (err) {
            return next(new Error("Uncaught Exception"))
        }

        // Limit Rate if necessary
        else if (timeLeft) {

            // Figure out why request got limited
            if (timeLeft > 0) {
                var err = "Rate limit exceeded. Request intervals too close."
            } else {
                var err = "Rate limit exceeded. Max requests per interval reached."
            }

            // Figure out Source of Request
            if(req.channel === "Sockets") var prefix = "Sockets"
            else var prefix = "REST"

            // Log output
            cli.log(process.env.api_id, 'warn', cli.getPrefix(prefix, cli.service_max) + req.user.uid + ' ' + err, 'out')

            // Respond with error
            return next(err)
        }

        // Otherwise allow
        else {
            return next()
        }
    }
}

module.exports = new Authentication()
