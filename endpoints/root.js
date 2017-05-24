'use strict'

const Endpoint = require(blitz.config.core.endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
 class Foo extends Endpoint {
     constructor(){
         super()
         this.schema.scope = "root-read"
         this.schema.description = "Testing method for checking root authorization"
     }

    main(){
         return new Promise((resolve, reject) => resolve("authorized"))
     }
 }

module.exports = Foo
