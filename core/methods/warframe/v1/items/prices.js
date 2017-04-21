'use strict'

const Method = require("../../../../Method.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Prices extends Method {
    constructor(db) {
        super(db)

        // Modify schema
        this.schema.description = "Get price statistics."
        this.schema.resources = ["item"]
        this.schema.params = [{
                name: "component",
                type: "string",
                default: "",
                required: true,
                description: "Specifies item component to look up. No component returns full set data."
            },
            {
                name: "mode",
                type: "string",
                default: "avg",
                description: "Accepts min and max as mode to list either the minimum or the maximum price. Default is average."
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
            resolve("prices will be here")
        })
    }
}

module.exports = Prices
