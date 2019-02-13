const Endpoint = require('cubic-api/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/'
  }

  async main (req, res) {
    res.redirect('/warframe')
  }
}

module.exports = Index
