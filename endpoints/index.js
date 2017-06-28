'use strict'

const Endpoint = require(blitz.config.core.endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
 class Index extends Endpoint {
     constructor(api, db, url) {
         super(api, db, url)
         this.schema.url = "/"
     }

    main() {
        return new Promise((resolve, reject) => resolve("Documentation can be found at https://drive.google.com/open?id=16rbyQAG1cgQhwfFfXcHqn-o8txZ5dAZBf4hzr3VeJJE. I'm too busy to hook a web server for docs right now. Sorry :>"))
     }
 }

module.exports = Index
