/**
 * Token based authentication using JWT & Passport
 */

/**
 * JSON Web Tokens
 */
const ejwt = require('express-jwt')
const socketioJWT = require('socketio-jwt')

/**
 * Socket related
 */
const events = require('./events.js')


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

        // Verify Token on all routes
        app.use(ejwt({
            secret: process.env.cert,
            credentialsRequired: false
        }))
    }

    /**
     * Enable JWT on socket connect to assing socket.user
     */
    configSockets(io) {
        io.use(socketioJWT.authorize({
            secret: process.env.cert,
            handshake: true
        }))

        io.on('connection', socket => {
            socket.user = socket.decoded_token
            events(socket)
        })

        io.on('unauthorized', err => {
            cli.log('Socket.io', 'err', JSON.stringify(err.data), 'out')
        })
    }
}

module.exports = new Authentication()
