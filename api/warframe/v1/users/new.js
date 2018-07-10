const Endpoint = cubic.nodes.warframe.core.Endpoint

class User extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.method = 'POST'
    // this.schema.scope = 'write_requests_warframe' // DEBUG uncomment this if you see this.
    this.schema.url = '/warframe/v1/users'
    this.schema.request = {
      body: {
        name: 'MoiD_Glitch'
      }
    }
    this.schema.response = 'ok'
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main (req, res) {
    const user = req.body

    await this.db.collection('users').update({
      name: user.name
    }, {
      $set: user
    }, {
      upsert: true
    })
    res.send('ok')
  }
}

module.exports = User
