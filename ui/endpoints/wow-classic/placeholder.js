const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic'
  }

  async main (req, res) {
    res.redirect('/wow-classic/herod-alliance')
  }
}

module.exports = Index
