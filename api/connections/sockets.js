/**
 * Socket requirements
 */
const io = require('Socket.io')()
const port = process.env.api_port


/**
 * Middleware Dependencies
 */
const reload = require('require-reload')(require) // layer needs to be hot-reloaded for out-of-class variables
let Layer = reload('./layers.js')


/**
 * Initializes socket server and handles socket requests
 */
class SocketAdapter {

    /**
     * Constructs Socket
     * @param {server} server   HTTP Server to bind to
     */
    constructor(server) {

        // Create empty middleware stack
        this.stack = []

        // Listen on server
        this.io = io.listen(server)
    }


    /**
     * Sends requests from requestController to local nodes
     * Returns response from node
     * MAYBE NEED TO SPECIFY RETURN BOOL?
     */
    local(target, model, method, attributes) {
        target.emit('req', {
            method: method,
            attributes: attributes,
            model: model
        })
    }


    /**
     * Run middleware before passing to ReqController
     */
    prepass(socket, verb, request, ack) {

        // Create new layer object for middleware
        Layer = reload('./layers.js')
        let layer = new Layer()

        // Modify req/res object to allow same middleware approach as in express
        let req = layer.convertReq(request, socket, verb)
        let res = layer.convertRes(ack)

        // Iterate through middleware function stack
        layer.runStack(req, res, this.stack)
            .then(() => this.pass(req, res))
            .catch(() => {})
    }


    /**
     * Handles requests to local nodes
     */
    pass(req, res) {
        cli.logRequest(process.env.api_id, 'Sockets', req)

        // Send Request to Controller
        var response = this.requestController.getResponse(req)

        console.log('sockets.pass done')
        // Send Response back to requesting Socket
        res.status(response.statusCode).send(response.body)

        // Log Output
        cli.logRequestEnd(process.env.api_id, 'Sockets', response)
    }


    /**
     * Adds functions to queue that is processed before this.pass() gets called
     */
    use(fn) {
        this.stack.unshift(fn)
    }


    /**
     * When local node has new data: update for everyone in relevant rooms
     */
    update(data) {
        this.io.in(data.room).emit(data.event, data.body)
    }
}

module.exports = SocketAdapter
