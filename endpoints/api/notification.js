const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Foo extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.method = 'POST'
    this.schema.scope = 'write_notifications_global'
    this.schema.description = "Endpoint which pushes notifications to the frontend"
  }

  async main(req, res) {
    this.publish(req.body)
  }
}

module.exports = Foo
