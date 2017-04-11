'use strict'

const Method = require("../../../../Method.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Foo extends Method {
    constructor(db) {
        super(db)

        // Modify schema
        this.schema.resources = ["item"]
        this.schema.params = [{
                name: "component",
                type: "string",
                default: ""
            },
            {
                name: "timestart",
                type: "number",
                default: () => {
                    return new Date().getTime() / 1 // current time
                }
            },
            {
                name: "timeend",
                type: "number",
                default: () => {
                    return new Date(new Date().setDate(new Date().getDate() - 21)) / 1 // 3 weeks ago
                }
            }
        ]
    }

    main(item, component, timestart, timeend) {
        return new Promise((resolve, reject) => {
            console.log("\n::DATA ARRIVED AT CORE METHOD")
            console.log("item: " + item)
            console.log("compoennt: " + component)
            console.log("timestart: " + timestart)
            console.log("timeend: " + timeend + '\n')
            resolve("statistics")
        })
    }
}

module.exports = Foo
