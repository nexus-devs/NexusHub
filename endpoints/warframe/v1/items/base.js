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

        /**
         * Url used for routing by express/custom middleware handler
         * @type {string}
         */
        this.schema.url = "/warframe/v1/items/:item"
    }


    /**
     * Main method which is called by EndpointHandler on request
     */
    main(item) {
        return new Promise((resolve, reject) => {
            this.db.collection('items').findOne({
                name: "/^" + item + "$/i"
            }).then((doc) => {

                // Remove unnecessary data
                delete doc.prices
                delete doc.distribution
                delete doc._id

                this.cache(this.url, doc, 60)
                resolve(doc)
            })
        })
    }
}

module.exports = Base
