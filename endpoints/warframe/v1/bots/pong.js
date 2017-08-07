const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Endpoint to receive ping responses from bots, including their status
 */
class Pong extends Endpoint {

    constructor(api, db, url) {
        super(api, db, url)

        // Modify schema
        this.schema.method = "POST"
        this.schema.scope = "root-read-write"
    }

    /**
     * Main method which is called by MethoHandler on request
     */
    async main(status) {
        this.publish(this.url, status)
        return "pong"
    }
}

module.exports = Pong
