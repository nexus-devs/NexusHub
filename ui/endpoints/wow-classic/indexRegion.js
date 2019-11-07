const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic/:region'
    this.schema.view = '/sites/wow-classic/index.vue'
  }
}

module.exports = Index
