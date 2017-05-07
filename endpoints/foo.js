'use strict'

const Method = require(blitz.config.core.endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
 class Foo extends Method {
     constructor(){
         super()
         this.schema.description = "Simple testing method which returns 'bar'."
     }

    main() {
        this.publish("/foo", "lel")
        return new Promise((resolve, reject) => resolve("bar"))
     }
 }

module.exports = Foo
