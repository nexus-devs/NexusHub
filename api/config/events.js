/**
 * Event Configuration for Socket.io Server
 */
const socketioJWT = require('socketio-jwt')

module.exports = (socket) => {


        // Authorize with token
        // Get User belonging to Token, then set nickname
        //socket.set('user', socket.handshake.decoded_token.sub)

        // Log connection
        cli.log('Socket.io', 'ok', socket.user.sub + ' connected', 'in')

        // Log disconnect
        socket.on('disconnect', () => cli.log('Socket.io', 'neutral', socket.user.sub + ' disconnected', 'out'))

        // RESTful-like event types
        socket.on('GET', request => {
            //console.log(socket.user)
            sockets.pass(socket, 'GET', request)
        })

        socket.on('POST', request => {
            sockets.pass(socket, 'POST', request)
        })

        socket.on('PUT', request => {
            sockets.pass(socket, 'PUT', request)
        })

        socket.on('DELETE', request => {
            sockets.pass(socket, 'DELETE', request)
        })

        // Private Endpoints, requires authorization
        socket.on('UPDATE', data => {
            sockets.update(data)
        })
}
