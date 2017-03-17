/**
 * Token based authentication using JWT & Passport
 */

/**
 * JSON Web Tokens
 */
const jwt = require('jsonwebtoken')


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
        app.use((req, res, next) => {

            // Token present?
            if (req.headers.authorization) {
                let token = req.headers.authorization.replace("bearer ", "").replace("Bearer ", "")

                // Set req.user from token
                req.user = jwt.verify(token, process.env.cert)
            }

            // Set IP as user instead of that of token
            else {
                req.user = {
                    sub: req.ip
                }
            }
            next()
        })
    }

    /**
     * Enable JWT on socket connect to assing socket.user
     */
    configSockets(io) {
        io.use((socket, next) => {

            if (socket.handshake.query) {
                let token = socket.handshake.query.bearer.replace("bearer ", "").replace("Bearer ", "")

                // Set req.user from token
                socket.user = jwt.verify(token, process.env.cert)
                return next()
            }

            // Set IP as user instead of that of token
            else {
                socket.client.user = {
                    sub: socket.request.connection.remoteAddress
                }
                return next()
            }

            // call next() with an Error if rejected.
            cli.log(process.env.api_id, 'err', 'Invalid Token', 'out')
            socket.emit("unauthorized", "Invalid Token")
            return next()
        })

        io.on('unauthorized', err => {

        })
    }
}

module.exports = new Authentication()
