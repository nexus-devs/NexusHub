const Endpoint = require('cubic-api/endpoint')

class Foo extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'We use this internally to see if the warframe core node is actually unresponsive, or if the database is just blocking all operations.'
    this.schema.response = String
  }

  async main (req, res) {
    res.send('bar')
  }
}

module.exports = Foo
