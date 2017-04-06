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
                    return moment().toJSON()
                }
            },
            {
                name: "timeend",
                type: Number,
                default: () => {
                    return moment().subtract(21, 'day').toJSON()
                }
            }
        ]

        console.log(this.schema.params[1])
    }

    run() {}
}

module.exports = Foo
