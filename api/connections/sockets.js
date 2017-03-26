/**
 * Socket requirements
 */
const io = require('Socket.io')()
const port = process.env.api_port


/**
 * Middleware
 */
const Layers = require('./layers.js')


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
        let layer = new Layers()

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

        // Assign values to request
        var request = {
            user: req.user,
            method: req.method,
            resource: req.resource,
            query: req.query,
            params: req.params,
            channel: 'Sockets' // only relevant for logging
        }

        cli.logRequest(process.env.api_id, request)

        // Send Request to Controller
        var response = this.requestController.getResponse(request)

        // Send Response back to requesting Socket
        res.status(response.statusCode).send(response.body)

        // Log Output
        response.channel = 'Sockets' // only relevant for logging
        cli.logRequestEnd(process.env.api_id, response)
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
