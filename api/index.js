const Endpoint = cubic.nodes.main.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.url = '/'
    this.schema.description = 'Landing page for API server.'
    this.schema.response = String
  }

  async main (req, res) {
    res.send('Documentation can be found at the /developers hub on the main page.')
  }
}

module.exports = Index
