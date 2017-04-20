"use strict"

/**
 * JSON Web Tokens
 */
const jwt = require("jsonwebtoken")


/**
 * Describes authorization protocol for socket/http requests
 */
class Authentication {

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

        // Root Namespace middleware
        sockets.root.use((socket, next) => this.verifySocket(socket, next))
        sockets.root.use((socket, next) => this.authorize(socket, next))
    }


    /**
     * Express Middleware to verify JWT if present. Also adds user to req.
     */
    verifyExpress(req, res, next) {
        req.user = {
            uid: req.ip,
            scp: "basic-read"
        }

        // Token present?
        if (req.headers.authorization) {
            let token = req.headers.authorization.replace("bearer ", "").replace("Bearer ", "")

            // Set req.user from token
            try {
                req.user = jwt.verify(token, process.env.cert)
                return next()
            }

            // Invalid Token
            catch (err) {
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
            uid: socket.request.connection.remoteAddress,
            scp: "basic-read"
        }

        // Token sent at all?
        if (socket.handshake.query.bearer) {
            let token = socket.handshake.query.bearer

            // Set req.user from token
            try {
                socket.user = jwt.verify(token, process.env.cert)
                return next()
            }

            // Invalid Token
            catch (err) {
                return next(err)
            }
        }

        // No Token provided
        else {
            return next()
        }
    }


    /**
     * JWT Expiration check middleware for sockets (run on each prepass())
     */
    verifyExpiration(req, res, next) {
        if (new Date().getTime() / 1000 - req.user.exp > 0) {
            return next("jwt expired")
        } else {
            return next()
        }
    }


    /**
     * Authorizes sockets attempting connections to higher namespaces
     */
    authorize(socket, next) {
        if (socket.nsp.name === "/root" && socket.user.scp.includes("root")) {
            next()
        }

        // No criteria matched
        return next(new Error(`Rejected connection to ${socket.nsp.name}`))
    }
}

module.exports = new Authentication()
