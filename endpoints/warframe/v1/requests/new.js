'use strict'

const Endpoint = require(blitz.config.core.endpointParent)
const Statistics = require(__dirname + "/../items/statistics.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Request extends Endpoint {
    constructor(api, db, url) {
        super(api, db, url)

        // Modify schema
        this.schema.method = "POST"
        this.schema.scope = "root-read-write"
    }

    /**
     * Main method which is called by MethoHandler on request
     */
    main(request) {
        return new Promise((resolve, reject) => {

            // Modify request
            request.createdAt = new Date()
            request.price = request.price === "null" ? null : request.price

            // Get statistics for item
            let statistics = new Statistics(this.api, this.db, ("/warframe/v1/items/" + request.item + "/statistics").split(" ").join("%20"))
            statistics.main(request.item, "", new Date().getTime(), new Date(new Date().setDate(new Date().getDate() - 7)).getTime(), 7)

            // Publish changes
            .then((data) => {
                this.publish("/warframe/v1/items/" + request.item + "/statistics", data)
                this.publish("/warframe/v1/requests", request)
                data.components ? this.saveStats(data) : null
            })

            // Insert and resolve
            this.db.collection("requests").insertOne(request)
            resolve("Request processed. (" + JSON.stringify(request) + ")")
        })
    }


    /**
     * Save prices/demand in local db for use by other endpoints
     */
    saveStats(data) {
        let prices = []
        let distribution = []

        data.components.forEach(component => {
            let price = {
                name: component.name,
                avg: component.avg,
                median: component.median,
                min: component.min,
                max: component.max
            }
            prices.push(price)

            let dist = {
                name: component.name,
                supply: component.supply,
                demand: component.demand
            }
            distribution.push(dist)
        })

        this.db.collection("items").updateOne({
            name: new RegExp("^" + data.title + "$", "i")
        }, {
            $set: {
                prices: prices,
                distribution: distribution
            }
        }, {
            upsert: true
        })
    }
}

module.exports = Request
