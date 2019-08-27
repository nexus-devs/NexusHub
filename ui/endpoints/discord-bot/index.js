const Endpoint = require('cubic-ui/endpoint')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/discord-bot'
    this.schema.view = '/sites/discord-bot/overview.vue'
  }
}

module.exports = Index
