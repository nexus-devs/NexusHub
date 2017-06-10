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
    constructor(api, db, url) {
        super(api, db, url)

        /**
         * Schema description
         * @type {string}
         */
        this.schema.description = "Get a list of all items."
    }


    /**
     * Main method which is called by EndpointHandler on request
     * @returns {Promise} Item List
     */
    main() {
        return new Promise((resolve, reject) => {
            this.db.collection('items').find({}).toArray((err, result) => {
                if (err) reject(err)

                // Remove unnecessary data
                result.forEach(item => {
                    delete item.distribution
                    delete item.prices
                    delete item._id
                })

                this.cache(this.url, result, 60)
                resolve(result)
            })
        })
    }
}

module.exports = List
