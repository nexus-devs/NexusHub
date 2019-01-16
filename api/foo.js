const Endpoint = require('cubic-api/endpoint')

class Foo extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = "Simple testing method which returns 'bar'."
    this.schema.response = String
  }

  async main (req, res) {
    res.send('bar')
  }
}

module.exports = Foo
