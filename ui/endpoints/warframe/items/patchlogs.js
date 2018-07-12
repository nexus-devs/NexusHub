const Endpoint = cubic.nodes.ui.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.url = '/warframe/items/:item/patchlogs'
    this.schema.view = '/sites/warframe/items/patchlogs.vue'
  }
}

module.exports = Index
