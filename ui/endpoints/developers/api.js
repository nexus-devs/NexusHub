const Endpoint = cubic.nodes.ui.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.url = '/developers/api/:group/:name'
    this.schema.view = '/sites/developers/api/index.vue'
  }
}

module.exports = Index
