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
const httpAdapter = require('../adapters/httpAdapter.js')
const app = httpAdapter.app
const http = require('http')


/**
 * Start HTTP server.
 */
app.set('port', port)
const server = http.createServer(app)
server.listen(port)


/**
 * Event Handling
 */
server.on('error', err => debug.onError(err, port))

server.on('listening', listener => {
    debug.onListening(listener, server)
    cli.timeEnd('REST', ('Express Server on :' + port + ' in'))

    /**
     * Start Timers
     */
    cli.time('Socket.io', "Socket.IO Server on :" + port + " in")

    /**
     * Initialize socket on HTTP server
     */
    const SocketAdapter = require('../adapters/socketAdapter.js')
    global.socketAdapter = new SocketAdapter(server)

    cli.timeEnd('Socket.io', "Socket.IO Server on :" + port + " in")
    cli.timeEnd('Root', 'Set up API Node in') // From server.js
})
