'use strict'


/**
 * Middleware Functions
 */
const Server = require('./connections/server.js')


/**
 * Parent Class for API-Node
 */
class api {
    constructor() {
        this.server = new Server()
    }
}


module.exports = new api
