'use strict'

/**
 * Class describing generic database/calculation methods
 * Any lower-level method extends this class
 */
class Method{
    constructor(db){

        // Default Config for API node
        this.schema = {
            resources: [],
            params: {},
            scope: 'basic-read',
            verb: 'GET',
            description: "There is no description for this endpoint yet."
        }

        // Establish MongoDB connection
        this.db = db
    }
}

module.exports = Method
