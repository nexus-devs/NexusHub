const Endpoint = cubic.nodes.main.core.Endpoint

class Foo extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = "Simple testing method which returns 'bar'."
    this.schema.response = String
  }

  async main (req, res) {
    res.send('bar')
    this.cache('bar', 60 * 60)
  }
}

module.exports = Foo
