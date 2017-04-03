'use strict'

const Method = require('../Method.js')

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
 class Foo extends Method {
     constructor(){
         super()
     }

     run(){
         return("bar")
     }
 }

module.exports = Foo
