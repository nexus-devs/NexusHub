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
        socket.on('GET', (req, res) => sockets.prepass(socket, 'GET', req, res))

        socket.on('POST', (req, res) => sockets.prepass(socket, 'POST', req, res))

        socket.on('PUT', (req, res) => sockets.prepass(socket, 'PUT', req, res))

        socket.on('DELETE', (req, res) => sockets.prepass(socket, 'DELETE', req, res))

        // Private Endpoints, requires authorization
        socket.on('UPDATE', (data, ack) => sockets.update(data, ack))
    })
}
