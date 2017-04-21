'use strict'

const Method = require("../../../../Method.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Prices extends Method {
    constructor(db) {
        super(db)

        // Modify schema
        this.schema.description = "Get price statistics over a specified time frame."
        this.schema.resources = ["item"]
        this.schema.params = [{
                name: "component",
                type: "string",
                default: "",
                required: true,
                description: "Specifies item component to look up. No component returns full set data."
            },
            {
                name: "timestart",
                type: "number",
                default: () => {
                    return new Date().getTime() // current time
                },
                description: "Returns data recorded between timestart and timeend."
            },
            {
                name: "timeend",
                type: "number",
                default: () => {
                    return new Date(new Date().setDate(new Date().getDate() - 21)) / 1 // 3 weeks ago
                },
                description: "Returns data recorded between timestart and timeend."
            }
        ]
    }

    /**
     * Main method which is called by MethodHandler on request
     */
    main(item, component, mode, timestart, timeend) {
        return new Promise((resolve, reject) => {
            // TODO: change collection to production
            // Query object
            let query = {
                'item': 50,
                'createdAt': { $gte: new Date(timestart), $lte: new Date(timeend) }
            }

            // Append component if one is given
            if (component != "") query['component'] = component

            // Query and resolve results
            this.db.collection('dummy_requests').find(query).toArray(function(err, result) {
                if (err) throw err

                // Calculate min, max and avg
                let min = Number.POSITIVE_INFINITY
                let max = Number.NEGATIVE_INFINITY
                let avg = 0
                let tmp
                for (let i = result.length-1; i >= 0; i--) {    // TODO: Make steps bigger depending on size
                    tmp = result[i].price
                    if (tmp < min) min = tmp
                    if (tmp > max) max = tmp
                    avg += result[i]
                }
                avg = avg / result.length

                resolve({avg, min, max})
            })
        })
    }
}

module.exports = Prices
