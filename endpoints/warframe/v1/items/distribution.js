'use strict'

const Endpoint = require(blitz.config.core.endpointParent)
const _ = require("lodash")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Base extends Endpoint {
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
        this.schema.description = "Get item statistics between a specified time frame."
    }


    /**
     * Main method which is called by EndpointHandler on request
     */
    main() {
        return new Promise((resolve, reject) => {
            this.db.collection('items').find({}).toArray((err, result) => {
                if (err) reject(err)

                // Remove unnecessary data
                result.forEach(item => {
                    delete item.type
                    delete item.prices
                    delete item._id
                    delete item.components
                    delete item.category
                    delete item.ranks
                })

                this.cache(this.url, result, 60)
                resolve(result)
            })
        })
    }
}

module.exports = Base
