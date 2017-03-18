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
            let user = req.ip // + ' [' + req.headers['user-agent'] + ']'

            // Token present?
            if (req.headers.authorization) {

                let token = req.headers.authorization.replace("bearer ", "").replace("Bearer ", "")

                // Set req.user from token
                try {
                    req.user = jwt.verify(token, process.env.cert)
                    this.log(null, req.user.sub, 'REST')
                    next()
                }

                // Invalid Token
                catch (err) {
                    this.log(err.name, user, 'REST', next)
                }
            }

            // Set IP as user instead of that of token
            else {
                req.user = { sub: user }
                next()
            }
        })

        // Error Handler
        app.use(function (err, req, res, next) {
            res.status(err.status || 500).send(err.message)
        })
    }

    /**
     * Enable JWT on socket connect to assing socket.user
     */
    configSockets(io) {

        // Verify JWT
        io.use((socket, next) => {
            let user = socket.request.connection.remoteAddress // + ' [' + socket.request.headers['user-agent'] + ']'

            // Token sent at all?
            if (socket.handshake.query.bearer) {
                let token = socket.handshake.query.bearer

                // Set req.user from token
                try {
                    socket.user = jwt.verify(token, process.env.cert)
                    this.log(null, socket.user.sub, 'Sockets')
                    next()
                }

                // Invalid Token
                catch (err) {
                    this.log(err.name, user, 'Sockets', next)
                }
            }

            // Set IP as user instead of that of token
            else {
                socket.user = { sub: user }
                next()
            }
        })

        // Check Token Expiration
        io.use((socket, next) => {
            if(socket.user.exp){

                // On every request: Check expiration
                socket.use((packet, next) =>{
                    if(new Date().getTime() / 1000 - socket.user.exp > 0){
                        this.log('TokenExpiredError', socket.user.sub, 'Sockets', next)
                    } else {
                        next()
                    }
                })
                next()
            } else {
                next()
            }
        })
    }

    /**
     * Handles errors and logs authentications
     */
    log(err, user, source, next) {
        if (source === 'Sockets') var prefix = 'Sockets  | '
        else var prefix = 'REST     | '

        if (err) {
            cli.log(process.env.api_id, 'warn', prefix + cli.chalk.yellow(user) + ' ' + err, 'out')
            next(new Error(err))
        } else {
            cli.log(process.env.api_id, 'ok', prefix + cli.chalk.green(user) + ' authorized', 'in')
        }
    }
}

module.exports = new Authentication()
