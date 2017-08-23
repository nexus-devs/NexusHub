const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Foo extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.method = "POST"
    this.schema.description = "Testing method for POST requests"
  }

  async main(body) {
    return body
  }
}

module.exports = Foo
