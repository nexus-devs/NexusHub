const Endpoint = cubic.nodes.ui.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.url = '/warframe/items/:item'
    this.schema.view = '/sites/warframe/items/overview.vue'
  }
}

module.exports = Index
