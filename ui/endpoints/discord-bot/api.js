const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/discord-bot/:group/:name'
    this.schema.view = '/sites/discord-bot/index.vue'
  }
}

module.exports = Index
