'use strict'

const Endpoint = require(blitz.config.core.endpointParent)
const _ = require("lodash")

/**
 * Provides Supply/Demand data for each item
 */
class Distribution extends Endpoint {

    constructor(api, db, url) {
        super(api, db, url)
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
                    delete item.category
                    delete item.ranks

                    if (item.distribution) {
                        item.components = item.distribution
                        delete item.distribution
                    } else {
                        let components = []
                        item.components.forEach(comp => {
                            components.push({
                                name: comp,
                                supply: {
                                    count: 0,
                                    percentage: 0.5
                                },
                                demand: {
                                    count: 0,
                                    percentage: 0.5
                                }
                            })
                        })
                        item.components = components

                        item.components.length === 0 ? item.components.push({
                            name: "Set",
                            supply: {
                                count: 0,
                                percentage: 0.5
                            },
                            demand: {
                                count: 0,
                                percentage: 0.5
                            }
                        }) : null
                    }
                })

                this.cache(this.url, result, 60)
                resolve(result)
            })
        })
    }
}

module.exports = Distribution
