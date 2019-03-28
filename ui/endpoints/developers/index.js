const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/developers/api'
    this.schema.view = '/sites/developers/api/clients.vue'
  }
}

module.exports = Index
