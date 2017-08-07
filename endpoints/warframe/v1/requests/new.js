const Endpoint = require(blitz.config[blitz.id].endpointParent)
const Statistics = require(__dirname + "/../items/statistics.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Request extends Endpoint {

    constructor(api, db, url) {
        super(api, db, url)

        // Modify schema
        this.schema.method = "POST"
        this.schema.scope = "requests-read-write"
    }

    /**
     * Main method which is called by MethoHandler on request
     */
    async main(request) {

        // Modify request
        request.createdAt = new Date(request.createdAt)

        // Publish and save request on db
        this.publish("/warframe/v1/requests", request)
        delete request.subMessage
        delete request.rawMessage
        this.db.collection("requests").insertOne(request)

        // Get statistics for item
        let item = request.item
        let component = ""
        let timestart = new Date().getTime()
        let timeend = new Date(new Date().setDate(new Date().getDate() - 7)).getTime()
        let intervals = 7
        let statistics = new Statistics(this.api, this.db, ("/warframe/v1/items/" + request.item + "/statistics").split(" ").join("%20"))
        let data = await statistics.main(item, component, timestart, timeend, intervals)

        // Publish and save resulting statistics
        this.publish("/warframe/v1/items/" + request.item + "/statistics", data)
        data.components ? this.saveStats(data) : null
        return "Request processed. (" + JSON.stringify(request) + ")"
    }


    /**
     * Save prices/demand in local db for use by other endpoints
     */
    async saveStats(data) {
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

        await this.db.collection("items").updateOne({
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
