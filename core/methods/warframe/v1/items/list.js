'use strict'

const Method = require('../../../../Method.js')

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Foo extends Method {
    constructor(db) {
        super(db)

        // Modify schema
        this.schema.params = [{
                name: "limit",
                type: Number,
                default: 20
            },
            {
                name: "match",
                type: String,
                default: ""
            }
        ]
    }

    run() {}
}

module.exports = Foo
