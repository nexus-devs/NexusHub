const Endpoint = cubic.nodes.warframe.core.Endpoint

class Foo extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'We use this internally to see if the warframe core node is actually unresponsive, or if the database is just blocking all operations.'
    this.schema.response = String
  }

  async main (req, res) {
    res.send('bar')
    this.cache('bar', 60 * 60)
  }
}

module.exports = Foo
