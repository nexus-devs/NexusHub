const Endpoint = require(blitz.config[blitz.id].endpointParent)

class Foo extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.method = 'POST'
    this.schema.scope = 'write_notifications_global'
    this.schema.description = "Endpoint which pushes notifications to the web-client."
  }

  async main(req, res) {
    this.publish(req.body)
    res.send(req.body)
  }
}

module.exports = Foo
