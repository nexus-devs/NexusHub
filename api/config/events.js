/**
 * Event Configuration for Socket.io Server
 */
module.exports = (sockets) => {

    sockets.io.on('connection', (socket) => {

        // Log connection
        cli.log(process.env.api_id, 'ok', 'Sockets  | ' + cli.chalk.green(socket.user.sub) + ' connected', 'in')

        // Log disconnect
        socket.on('disconnect', () => cli.log(process.env.api_id, 'neutral', 'Sockets  | ' + cli.chalk.green(socket.user.sub) + ' disconnected', 'in'))

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
