const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic/search/:slug'
    this.schema.view = '/sites/wow-classic/search.vue'
  }
}

module.exports = Index
