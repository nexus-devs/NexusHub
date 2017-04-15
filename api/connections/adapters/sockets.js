"use strict"


/**
 * Socket requirements
 */
const io = require("Socket.io")


/**
 * Middleware helpers
 */
const reload = require("require-reload")(require) // layer needs to be hot-reloaded for out-of-class variables
let Layer = reload("../layers.js")


/**
 * Request Controller
 */
const Request = require("../../controllers/request.js")


/**
 * Handles all I/O for Socket.io
 */
class SocketAdapter {

    /**
     * Constructs Socket
     */
    constructor(server) {

        // Create empty middleware stack
        this.stack = []

        // Listen on server
        this.io = io.listen(server)

        // Bind Request Controller to object
        this.request = Request

        // Create root namespace
        this.root = this.io.of("/root")
    }


    /**
     * Run middleware before passing to ReqController
     */
    prepass(socket, verb, request, ack) {

        // Create new layer object for middleware
        Layer = reload("../layers.js")
        let layer = new Layer()

        // Modify req/res object to allow same middleware approach as in express
        let req = layer.convertReq(request, socket, verb)
        let res = layer.convertRes(socket, ack)

        // Iterate through middleware function stack
        layer.runStack(req, res, this.stack)
            .then(() => this.pass(req, res))
            .catch(() => {})
    }


    /**
     * Passes request to RequestController
     */
    pass(req, res) {
        this.request.getResponse(req)
        .then(response => res.status(response.statusCode).send(response.body))
    }


    /**
     * Adds functions to queue that are processed before this.pass() gets called
     */
    use(fn) {
        this.stack.unshift(fn)
    }
}

module.exports = SocketAdapter
