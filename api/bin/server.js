/**
 * server.js, initializes network adapters
 * httpAdapter (express)
 * socketAdapter (Socket.IO)
 */

/**
 * Local Dependencies
 */
const debug = require('./debugger.js')
const cli = require('./logger.js')


/**
 * Get port from environment and store in Express.
 */
const port = debug.normalizePort(process.env.PORT || '3400')


/**
 * Start Timers
 */
cli.time('REST', ('Express Server on :' + port + ' in'))


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

    // End http server timer
    cli.timeEnd('REST', ('Express Server on :' + port + ' in'))

    // Start Socket.io timer
    cli.time('Socket.io', "Socket.IO Server on :" + port + " in")

    // Initialize Socket.io on http server
    const Sockets = require('./connections/sockets.js')
    global.sockets = new Sockets(http.server)

    cli.timeEnd('Socket.io', "Socket.IO Server on :" + port + " in")
    cli.timeEnd('Root', 'Set up API Node in') // From server.js
})
