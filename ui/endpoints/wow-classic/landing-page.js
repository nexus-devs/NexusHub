const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic'
    this.schema.view = '/sites/wow-classic/landing-page.vue'
  }
}

module.exports = Index
