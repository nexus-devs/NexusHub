const Endpoint = cubic.nodes.main.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.url = '/'
    this.schema.response = String
  }

  async main (req, res) {
    res.send('Documentation can be found at https://drive.google.com/open?id=16rbyQAG1cgQhwfFfXcHqn-o8txZ5dAZBf4hzr3VeJJE. I\'m too busy to hook a web server for docs right now. Sorry :>')
  }
}

module.exports = Index
