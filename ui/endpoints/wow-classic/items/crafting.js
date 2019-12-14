const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic/items/:slug/:item/crafting'
    this.schema.view = '/sites/wow-classic/items/crafting.vue'
  }
}

module.exports = Index
