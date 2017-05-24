'use strict'

const Endpoint = require(blitz.config.core.endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class List extends Endpoint {
    /**
     * Creates a new statistics call
     * @constructor
     */
    constructor() {
        super()

        /**
         * Schema description
         * @type {string}
         */
        this.schema.description = "Get a list of all items."

        /**
         * Schema resources
         * @type {string[]}
         */
        this.schema.resources = []

        /**
         * Schema parameters
         * @type {Array.<string, string, *, boolean, string>}
         */
        this.schema.params = []
    }


    /**
     * Main method which is called by EndpointHandler on request
     * @returns {Promise} Item List
     */
    main() {
        return new Promise((resolve, reject) => {
            // Query and resolve results
            this.db.collection('items').find({}).toArray((err, result) => {
                if (err) reject(err)

                // Return document
                this.cache(this.url, result, 60)
                resolve(result)
            })
        })
    }
}

module.exports = List
