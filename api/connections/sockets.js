/**
 * Socket requirements
 */
const io = require('Socket.io')()
const port = process.env.api_port


/**
 * Set up Authentication requirements
 */
const auth = require('../config/auth.js')


/**
 * Initializes socket server and handles socket requests
 */
class SocketAdapter {

    /**
     * Constructs Socket
     * @param {server} server   HTTP Server to bind to
     */
    constructor(server) {

        /**
         * Listen on server
         */
        this.io = io.listen(server)
            //this.io.use(iowildcard)

        /**
         * Config JWT Auth
         */
        auth.configSockets(this.io)

        /**
         * Config Events to listen to
         */
        this.configEvents()
    }


    /**
     * Listens to incoming events
     */
    configEvents() {
        require('../config/events.js')(this, auth)
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
     * Verify each request for rate limit/token expiration
     * Restrictive socket.io middleware requires this to be separate, ortherwise client callbacks can't be triggered
     */
    prepass(socket, verb, request, ack) {
        let pass = auth.verifySocketRequest(socket)

        // Check result from auth check
        if (pass !== "granted") ack(pass) // pass var otherwise contains error

        // RequestController already bound?
        else if(this.requestController) this.pass(socket, verb, request, ack)

        else ack({statusCode: 503, body: 'Rebooting. Try again in a few seconds.'})
    }


    /**
     * Handles requests to local nodes
     */
    pass(socket, method, request, ack) {

        // Assign values to request
        var request = {
            user: socket.user,
            method: method,
            resource: request.resource,
            query: request.query,
            params: request.params,
            channel: 'Sockets' // only relevant for logging
        }

        cli.logRequest(process.env.api_id, request)

        // Send Request to Controller
        var response = this.requestController.getResponse(request)

        // Send Response back to requesting Socket
        ack(response)

        // Log Output
        response.channel = 'Sockets' // only relevant for logging
        cli.logRequestEnd(process.env.api_id, response)
    }


    /**
     * When local node has new data: update for everyone in relevant rooms
     */
    update(data) {
        this.io.in(data.room).emit(data.event, data.body)
    }
}

module.exports = SocketAdapter
