'use strict'

const Endpoint = require(blitz.config.core.endpointParent)
const _ = require("lodash")

/**
 * Provides basic item properties
 */
class Base extends Endpoint {

    constructor(api, db, url) {
        super(api, db, url)
        this.schema.description = "Get item statistics between a specified time frame."
        this.schema.url = "/warframe/v1/items/:item"
    }


    /**
     * Main method which is called by EndpointHandler on request
     */
    main(item) {
        return new Promise((resolve, reject) => {
            this.db.collection('items').findOne({
                name: new RegExp("^" + item + "$", "i")
            }).then((doc) => {
                if (doc) {
                    // Remove unnecessary data
                    delete doc.prices
                    delete doc.distribution
                    delete doc._id

                    this.cache(this.url, doc, 60)
                    resolve(doc)
                } else {
                    this.cache(this.url, item + " not found.", 60)
                    resolve(item + " not found.")
                }
            })
        })
    }
}

module.exports = Base
