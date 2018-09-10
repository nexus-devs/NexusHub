const Endpoint = cubic.nodes.warframe.core.Endpoint

class User extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get the warframe profile of the specified user.'
    this.schema.url = '/warframe/v1/users/:name'
    this.schema.request = {
      url: '/warframe/v1/users/[DE]Glen'
    }
    this.schema.response = {
      name: String,
      online: Boolean
    }
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main (req, res) {
    const name = req.params.name
    const user = await this.db.collection('users').findOne({ name })
    res.send(user)
    this.cache(user, 60)
  }
}

module.exports = User
