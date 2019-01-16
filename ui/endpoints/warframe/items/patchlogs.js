const Endpoint = require('cubic-api/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/warframe/items/:item/patchlogs'
    this.schema.view = '/sites/warframe/items/patchlogs.vue'
  }
}

module.exports = Index
