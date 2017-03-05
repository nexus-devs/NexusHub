/**
 * Event Configuration for Socket.io Server
 */

module.exports = (sockets, auth) => {
    sockets.io.on('connection', /** socketioJWT.authorize({
            secret: 'super secret'
        })).on('authenticated', **/ socket => {

        console.log(socket.request.headers)

        // Authorize with token
        // Get User belonging to Token, then set nickname
        // socket.set('nickname', 'mongo')

        // Log connection
        cli.log('Socket.io', 'ok', 'Client connected', 'in')

        // Log disconnect
        socket.on('disconnect', () => cli.log('Socket.io', 'neutral', 'Client disconnected', 'out'))

        // RESTful-like event types
        socket.on('GET', request => {
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
    })
}
