const Endpoint = require('cubic-api/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/developers/api'
    this.schema.view = '/sites/developers/api/clients.vue'
  }
}

module.exports = Index
