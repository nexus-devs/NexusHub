const Endpoint = cubic.nodes.warframe.core.Endpoint

class User extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Adds a new user to the database.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_users_warframe'
    this.schema.url = '/warframe/v1/users'
    this.schema.request = {
      body: {
        name: 'MoiD_Glitch'
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const user = req.body

    await this.addUser(user)
    res.send('ok')
  }

  async addUser (user) {
    await this.db.collection('users').updateMany({
      name: user.name
    }, {
      $set: user
    }, {
      upsert: true
    })
  }
}

module.exports = User
