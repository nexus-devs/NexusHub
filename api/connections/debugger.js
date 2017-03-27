const debug = require('debug')('api:server');

module.exports = {

    /**
     * Event listener for HTTP server "error" event.
     */
    onError: function(error, port) {
        console.log(error)
        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
        }
    },


    /**
     * Event listener for HTTP server "listening" event.
     */
    onListening: function(listener, server) {
        var addr = server.address();
        var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        debug('Listening on ' + bind);
    },


    /**
     * Normalize a port into a number, string, or false.
     */
    normalizePort: function (val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }
};
