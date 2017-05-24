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
         * Schema resources
         * @type {string[]}
         */
        this.schema.url = "/warframe/v1/items/:item"
    }


    /**
     * Main method which is called by EndpointHandler on request
     */
    main(item) {
        return new Promise((resolve, reject) => {
            this.db.collection('items').findOne({
                name: this.title(item)
            }).then((doc) => {
                this.cache(this.url, doc, 60)
                resolve(doc)
            })
        })
    }


    /**
     * Title function for case sensitivity
     */
    title(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}

module.exports = Base
