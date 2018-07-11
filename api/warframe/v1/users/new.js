const Endpoint = cubic.nodes.warframe.core.Endpoint

class User extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.method = 'POST'
    this.schema.scope = 'write_users_warframe'
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

    await this.addUser(user)
    res.send('ok')
  }

  async addUser (user) {
    await this.db.collection('users').update({
      name: user.name
    }, {
      $set: user
    }, {
      upsert: true
    })
  }
}

module.exports = User
