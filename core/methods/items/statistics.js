'use strict'

const Method = require('../../Method.js')

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Foo extends Method {
    constructor(db) {
        super(db)

        // Modify schema
        this.schema.resources = ['item']
        this.schema.params = [{
                name: "component",
                type: String,
                default: ""
            },
            {
                name: "timestart",
                type: Number,
                default: () => {
                    return new Date().getTime() / 1000 // current time
                }
            },
            {
                name: "timeend",
                type: Number,
                default: () => {
                    return new Date(new Date().setDate(new Date().getDate() - 21)) / 1000 // 3 weeks ago
                }
            }
        ]

        console.log(this.schema.params[1])
    }

    run() {}
}

module.exports = Foo
