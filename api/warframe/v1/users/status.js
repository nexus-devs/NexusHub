const Endpoint = cubic.nodes.warframe.core.Endpoint

class Status extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.method = 'POST'
    this.schema.url = '/warframe/v1/users/:name/status'
    this.schema.scope = 'write_users_warframe'
    this.schema.request = {
      body: {
        name: 'MoiD_Glitch',
        status: 'online'
      }
    }
    this.schema.response = 'ok'
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main (req, res) {
    const name = req.params.name
    const { online } = req.body

    await this.db.collection('users').updateMany({
      name
    }, {
      $set: { online }
    }, {
      upsert: true
    })
    res.send('ok')
  }
}

module.exports = Status
