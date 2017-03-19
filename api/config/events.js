/**
 * Event Configuration for Socket.io Server
 */
module.exports = (sockets) => {

    sockets.io.on('connection', (socket) => {

        // Log connection
        cli.log(process.env.api_id, 'neutral', 'Sockets  | ' + socket.user.uid + ' connected', 'in')

        // Log disconnect
        socket.on('disconnect', () => cli.log(process.env.api_id, 'neutral', 'Sockets  | ' + socket.user.uid + ' disconnected', 'in'))

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
    })
}
