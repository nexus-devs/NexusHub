const Endpoint = require('cubic-api/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/'
    this.schema.description = 'Landing page for API server.'
    this.schema.response = String
  }

  async main (req, res) {
    res.send('Documentation can be found at the /developers hub on the main page.')
  }
}

module.exports = Index
