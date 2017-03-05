/**
 * Socket requirements
 */
const io = require('socket.io')
const port = 3400


/**
 * Local Controllers
 */
const requestController = new(require('../../controllers/requestController.js'))


/**
 * Authentication
 */
const socketioJWT = require('socketio-jwt')
const auth = require('../../config/auth/auth.js')


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
         * Config Event Listeners
         */
        this.configEvents()
    }


    /**
     * Listens to incoming events
     */
    configEvents() {
        require('../../config/endpoints/events.js')(this, auth)
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
     * Handles requests to local nodes
     */
    pass(socket, method, request) {

        // Add method to request
        if(typeof request === 'object'){
            request.method = method
        } else {
            cli.log('Socket.io', 'err', ('<' + typeof request + '> ' + request), 'in')
            socket.emit('res', 'Error. Request needs to be JSON Object.')
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
    update(data){
        this.io.in(data.room).emit(data.event, data.body)
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
