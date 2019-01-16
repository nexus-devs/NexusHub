const Endpoint = require('cubic-api/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/developers/api/:group/:name'
    this.schema.view = '/sites/developers/api/index.vue'
  }
}

module.exports = Index
