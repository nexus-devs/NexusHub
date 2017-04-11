'use strict'

const Method = require('../../../Method.js')

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
 class Foo extends Method {
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
