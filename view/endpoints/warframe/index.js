const Endpoint = require(blitz.config[blitz.id].endpointParent)

class Index extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.url = "/warframe"
    this.schema.view = "pages/warframe/index.vue"
  }
}

module.exports = Index
