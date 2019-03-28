const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/warframe/items/:item'
    this.schema.view = '/sites/warframe/items/overview.vue'
  }
}

module.exports = Index
