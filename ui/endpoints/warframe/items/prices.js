const Endpoint = require('cubic-api/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/warframe/items/:item/prices'
    this.schema.view = '/sites/warframe/items/prices.vue'
  }
}

module.exports = Index
