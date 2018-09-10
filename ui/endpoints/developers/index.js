const Endpoint = cubic.nodes.ui.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.url = '/developers/api'
    this.schema.view = '/sites/developers/api/clients.vue'
  }
}

module.exports = Index
