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
 * Set Up Express Server
 */
const http = new(require('./connections/http.js'))(port)

/**
 * Set up Socket.io Server on http server
 */
const Sockets = new(require('./connections/sockets.js'))(http.server)


/**
 * Event Handling
 */
http.server.on('error', err => debug.onError(err, port))

http.server.on('listening', listener => {

    // include debugging
    debug.onListening(listener, http.server)

    cli.timeEnd(process.env.api_id, cli.chalk.reset("Port: " + process.env.api_port) + cli.chalk.green(' [online]'))
})
