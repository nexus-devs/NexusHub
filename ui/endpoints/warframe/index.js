const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  async main (req, res) {
    res.redirect('/')
  }
}

module.exports = Index
