const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic/deals/crafting/:slug'
    this.schema.view = '/sites/wow-classic/deals-crafting.vue'
  }
}

module.exports = Index
