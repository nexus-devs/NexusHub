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
     * Run middleware before passing to ReqController
     */
    prepass(socket, verb, request, ack) {
        /** let pass = auth.verifySocketRequest(socket)

        // Check result from auth check
        if (pass !== "granted") ack(pass) // pass var otherwise contains error

        // RequestController already bound?
        else if(this.requestController) this.pass(socket, verb, request, ack)

        else ack({statusCode: 503, body: 'Rebooting. Try again in a few seconds.'}) **/

        /**
         * Modify req/res object to allow same middleware approach as in express
         */
        let req = request
        req.user = socket.user
        req.method = verb

        let res = this.convertRes(ack)
        this.pass(req, res)
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
        this.fns.push(fn)
    }


    /**
     * Executes middleware functions
     */
    runMiddleware(req, res, next){

    }


    /**
     * Convert ack callback into res-like object
     */
    convertRes(ack) {

        // Default response value
        let res = {
            msg: {
                statusCode: 200,
                body: "<empty>"
            }
        }

        // Send method, invoking client callback with previously customized data
        res.send = (data) => {
            res.msg.body = data
            ack(res.msg)
        }

        // Apply Status before res.send
        res.status = (code) => {
            res.msg.statusCode = code
            return res
        }

        return res
    }


    /**
     * When local node has new data: update for everyone in relevant rooms
     */
    update(data) {
        this.io.in(data.room).emit(data.event, data.body)
    }
}

module.exports = SocketAdapter
