/**
 * server.js, initializes network adapters
 * httpAdapter (express)
 * socketAdapter (Socket.IO)
 */

/**
 * Local Dependencies
 */
const debug = require('./debugger.js')


/**
 * Get port from environment and store in Express.
 */
const port = debug.normalizePort(process.env.PORT || process.env.api_port)


/**
 * Express Dependencies
 */
const http = new(require('./connections/http.js'))(port)


/**
 * Event Handling
 */
http.server.on('error', err => debug.onError(err, port))

http.server.on('listening', listener => {

    // include debugging
    debug.onListening(listener, http.server)

    // Initialize Socket.io on http server
    const Sockets = require('./connections/sockets.js')
    global.sockets = new Sockets(http.server)

    cli.timeEnd(process.env.api_id, "Port: " + process.env.src_port + cli.chalk.green(' [online]'))
})
