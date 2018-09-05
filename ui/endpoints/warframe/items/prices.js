const Endpoint = cubic.nodes.ui.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.url = '/warframe/items/:item/prices'
    this.schema.view = '/sites/warframe/items/prices.vue'
  }
}

module.exports = Index
