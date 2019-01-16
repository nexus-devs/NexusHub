const Endpoint = require('cubic-api/endpoint')

class Post extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.method = 'POST'
    this.schema.description = 'Simple testing method which returns the posted payload.'
    this.schema.request = {
      body: {
        foo: 'bar'
      }
    }
    this.schema.response = {}
  }

  async main (req, res) {
    res.send(req.body)
  }
}

module.exports = Post
