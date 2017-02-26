/**
 * Socket requirements
 */
const io = require('socket.io')
const port = 3400


/**
 * Local Controllers
 */
const requestController = new(require('../controllers/requestController.js'))
const cli = require('../bin/logger.js')


/**
 * Authentication
 */
const passport = require('passport')


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

        /**
         * Start Procedure
         */
        this.init()
    }


    /**
     * Calls necessary actions before setting up listener
     */
    init() {
        this.configRoutes()
    }


    auth(socket) {

    }


    /**
     * Listens to incoming connections
     * Not really routes, but named this way to stay parallel to httpAdapter
     * They essentially route to the same actions
     */
    configRoutes() {
        this.io.on('connection', socket => {

            // Authenticate
            // socket.set('nickname', 'mongo')

            // Log connection
            cli.log('Socket.io', 'ok', 'Client connected', 'in')

            // Log disconnect
            socket.on('disconnect', () => cli.log('Socket.io', 'neutral', 'Client disconnected', 'out'))

            // RESTful-like event types
            socket.on('GET', request => {
                this.res(socket, 'GET', request)
            })

            socket.on('POST', request => {
                this.res(socket, 'POST', request)
            })

            socket.on('PUT', request => {
                this.res(socket, 'PUT', request)
            })

            socket.on('DELETE', request => {
                this.res(socket, 'DELETE', request)
            })

            // Private Endpoints, require authorisation
            socket.on('UPDATE', resource => {
                this.update(resource)
            })
        })
    }


    /**
     * Sends requests from requestController to local nodes
     * Returns response from node
     * MAYBE NEED TO SPECIFY RETURN BOOL?
     */
    req(target, model, method, attributes) {
        target.emit('req', {
            method: method,
            attributes: attributes,
            model: model
        })
    }


    /**
     * Handles outgoing responses
     */
    res(socket, method, request) {

        // Add method to request
        if(typeof request === 'object'){
            request.method = method
        } else {
            cli.log('Socket.io', 'err', ('<' + typeof request + '> ' + request), 'in')
            socket.emit('res', 'Wrong request format. Refer to api.nexus-stats.com for help')
            return false
        }

        cli.logRequest('Socket.io', request)

        // Send Request to Controller
        var response = requestController.getResponse(request)

        cli.logRequestEnd('Socket.io', response)

        // Send Response back to requesting Socket
        socket.emit('res', response)
    }


    /**
     * When local node has new data: update for everyone in relevant rooms
     */
    update(resource){
        this.io.in(resource.room).emit(resource.event, resource.data)
    }



    attachSocketID() {

    }

    matchSocketID(identifier) {
        return target
    }

    /** Debug **/
    getClients() {
        cli.log('Socket.io', 'neutral', ('Clients connected: ' + this.io.sockets.clients.length), false)
    }
}

module.exports = SocketAdapter
