const Endpoint = blitz.nodes.warframe.core.Endpoint

class Foo extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.query = [{
      name: 'kek',
      default: 'kekistan',
      required: true
    }]
  }

  async main(req, res) {
    res.send('bar')
  }
}

module.exports = Foo
