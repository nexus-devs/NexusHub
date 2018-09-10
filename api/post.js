const Endpoint = cubic.nodes.main.core.Endpoint

class Post extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
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
