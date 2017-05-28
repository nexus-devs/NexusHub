'use strict'

const Endpoint = require(blitz.config.core.endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
 class Foo extends Endpoint {
     constructor(){
         super()
         this.schema.method = "POST"
         this.schema.description = "Testing method for POST requests"
     }

    main(body){
         return new Promise((resolve, reject) => resolve(body))
     }
 }

module.exports = Foo
