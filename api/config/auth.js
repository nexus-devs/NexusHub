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
 * Describes interactions with mongo/redis for auth
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

        // Verify JWT
        io.use((socket, next) => this.verifySocket(socket, next))

        // Rate Limiting
        io.use((socket, next) => {
            socket.use((packet, next) => {
                this.rateLimiter(socket, next)
            })
            next()
        })
    }


    /**
     * Rolling Rate Limiting with Redis
     */
    rateLimiter(req, next, res) {

        // No Token provided -> High limit, 1req/s
        if (!req.user.scp) {
            high_limit(req.user.uid, (err, timeLeft) => this.limit(err, next, timeLeft, req, res))
        }

        // User is root -> skip limiting
        else if (req.user.scp.includes("root")) {
            next()
        }

        // Token provided & privileged user -> No minDifference, 5req/s
        else if (req.user.scp.includes("privileged")) {
            low_limit(req.user.uid, (err, timeLeft) => this.limit(err, next, timeLeft, req, res))
        }

        // Token provided & default user -> Enhanced limits, 2req/s
        else if (req.user.scp.includes("default")) {
            mid_limit(req.user.uid, (err, timeLeft) => this.limit(err, next, timeLeft, req, res))
        }
    }


    /**
     * Actual rate limiting logic
     */
    limit(err, next, timeLeft, req, res) {

        // Fix negative timeLeft when spamming w/ minInterval
        timeLeft = Math.abs(timeLeft)

        // Return any errors
        if (err) {
            return res.status(500).send()
        }

        // Respond
        else if (timeLeft) {

            // Distinguish between REST/Sockets
            if(req.nsp){
                next(new Error("You must wait " + timeLeft + " ms before you can make requests."))
            } else {
                return res.status(429).send("You must wait " + timeLeft + " ms before you can make requests.")
            }
        } else {
            return next()
        }
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
                this.log(null, req.user.uid, 'REST')
                next()
            }

            // Invalid Token
            catch (err) {
                this.log(err.name, user, 'REST', next)
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

                // Check Token Expiration on every request
                socket.use((packet, next) => {
                    if (new Date().getTime() / 1000 - socket.user.exp > 0) {
                        this.log('TokenExpiredError', socket.user.uid, 'Sockets', next)
                    } else {
                        next()
                    }
                })
                this.log(null, socket.user.uid, 'Sockets')
                next()
            }

            // Invalid Token
            catch (err) {
                this.log(err.name, user, 'Sockets', next)
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
     * Handles errors and logs authentications
     */
    log(err, user, source, next) {
        if (source === 'Sockets') var prefix = 'Sockets  | '
        else var prefix = 'REST     | '

        if (err) {
            cli.log(process.env.api_id, 'warn', prefix + user + ' ' + err, 'out')
            next(new Error(err))
        } else {
            cli.log(process.env.api_id, 'ok', prefix + user + ' authorized', 'in')
        }
    }
}

module.exports = new Authentication()
