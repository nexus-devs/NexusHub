const Endpoint = require('cubic-api/endpoint')

class Notification extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.method = 'GET'
    this.schema.description = 'Get a list of all active notifications.'
    this.schema.response = [{
      game: String,
      message: {
        title: String,
        body: String
      }
    }]
  }

  async main (req, res) {
    const notifications = await this.db.collection('notifications').find().toArray()
    res.send(notifications)
  }
}

module.exports = Notification
