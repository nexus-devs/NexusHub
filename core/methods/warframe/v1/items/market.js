'use strict'

const Method = require("../../../../Method.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Market extends Method {
    constructor(db) {
        super(db)

        // Modify schema
        this.schema.description = "Get supply and demand statistics over a specified time frame."
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
                    return new Date(new Date().setDate(new Date().getDate() - 21)).getTime() // 3 weeks ago
                },
                description: "Returns data recorded between timestart and timeend."
            }
        ]
    }

    /**
     * Main method which is called by MethodHandler on request
     */
    main(item, component, timestart, timeend) {
        return new Promise((resolve, reject) => {
            // TODO: change collection to production
            // Query object
            let query = {
                'item': 50,
                'createdAt': { $gte: new Date(timeend), $lte: new Date(timestart) }
            }

            // Append component if one is given
            if (component != "") query['component'] = parseInt(component)

            // Query and resolve results
            this.db.collection('dummy_requests').find(query).toArray(function(err, result) {
                if (err) reject(err)

                let buying = 0
                let selling = 0

                for (let i = result.length-1; i >= 0; i--) {
                    if (result[i].offer == "buying") {
                        buying++
                    } else {
                        selling++
                    }
                }

                resolve({
                    'buying': {'count': buying, 'percent': buying/(buying+selling)},
                    'selling': {'count': selling, 'percent': selling/(buying+selling)}
                })
            })
        })
    }
}

module.exports = Market
