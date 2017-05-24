'use strict'

const Endpoint = require(blitz.config.core.endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
 class Foo extends Endpoint {
     constructor(){
         super()
         this.schema.description = "Simple testing method which returns 'bar'."
     }

    main() {
        this.publish("/foo", "lel")
        this.cache("/foo", "test", 5)
        return new Promise((resolve, reject) => resolve("bar"))
     }
 }

module.exports = Foo
