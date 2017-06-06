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
                    delete item.distribution
                    delete item._id
                    delete item.category
                    delete item.ranks

                    if (item.prices) {
                        item.components = item.prices
                        delete item.prices
                    } else {
                        let components = []
                        item.components.forEach(comp => {
                            components.push({
                                name: comp,
                                avg: null,
                                median: null,
                                min: null,
                                max: null
                            })
                        })
                        item.components = components

                        // No Components for Item? Set "Set"
                        item.components.length === 0 ? item.components.push({
                            name: "Set",
                            avg: null,
                            median: null,
                            min: null,
                            max: null
                        }) : null
                    }
                })

                this.cache(this.url, result, 60)
                resolve(result)
            })
        })
    }
}

module.exports = Base
