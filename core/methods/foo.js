'use strict'

const Method = require('../Method.js')

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
 class Foo extends Method {
     constructor(){
         super()
         this.schema.description = "Simple testing method which returns 'bar'."
     }

    main(){
         return("bar")
     }
 }

module.exports = Foo
