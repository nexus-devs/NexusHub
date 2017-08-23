const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Foo extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Simple testing method which returns 'bar'."
  }

  async main() {
    return "bar"
  }
}

module.exports = Foo
