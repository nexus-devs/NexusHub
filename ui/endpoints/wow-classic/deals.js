const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic/deals/:slug'
    this.schema.view = '/sites/wow-classic/deals.vue'
  }
}

module.exports = Index
