const Endpoint = require('cubic-api/endpoint')

class User extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get the warframe profile of the specified user.'
    this.schema.url = '/warframe/v1/users/:name'
    this.schema.request = {
      url: '/warframe/v1/users/[DE]Glen'
    }
    this.schema.response = {
      name: String
    }
  }

  async main (req, res) {
    const name = req.params.name
    const user = await this.db.collection('users').findOne({ name })
    res.send(user)
    this.cache(user, 60)
  }
}

module.exports = User
