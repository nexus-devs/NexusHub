/**
 * Event Configuration for Socket.io Server
 */

module.exports = (sockets, http) => {

    /**
     * Default namespace
     */
    sockets.io.on('connection', (socket) => {

        // RESTful-like event types
        socket.on('GET', (req, res) => sockets.prepass(socket, 'GET', req, res))

        socket.on('POST', (req, res) => sockets.prepass(socket, 'POST', req, res))

        socket.on('PUT', (req, res) => sockets.prepass(socket, 'PUT', req, res))

        socket.on('DELETE', (req, res) => sockets.prepass(socket, 'DELETE', req, res))

        // Private Endpoints, requires authorization
        socket.on('UPDATE', (data, ack) => sockets.update(data, ack))
    })


    /**
     * Root namespace
     */

    // Listen to endpoint config from core nodes
    sockets.root.on('connection', (socket) => {

        // Listen to endpoint config event
        socket.on('config', (endpoints) => {

            // Sockets
            sockets.request.saveEndpoints(endpoints)

            // HTTP
            http.request.saveEndpoints(endpoints)
            endpoints.forEach((endpoint) => {
                http.app.all(endpoint.route, (req, res) => http.prepass(req, res))
            })
        })
    })
}
