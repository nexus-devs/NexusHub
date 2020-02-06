const Endpoint = require('cubic-api/endpoint')

class Notification extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.method = 'POST'
    this.schema.scope = 'write_notifications_global'
    this.schema.description = 'Endpoint which pushes notifications to the web-client.'
    this.schema.url = '/notifications'
    this.schema.request = {
      body: {
        game: 'warframe',
        message: {
          title: 'Example Notification',
          body: 'This is where something important happens.'
        }
      }
    }
    this.schema.response = {
      game: String,
      message: {
        title: String,
        body: String
      }
    }
    this.schema.pubsub = {
      url: '/notifications',
      response: this.schema.response
    }
  }

  async main (req, res) {
    await this.db.collection('notifications').insertOne(req.body)
    await this.publish(req.body)
    res.send(req.body)
  }
}

module.exports = Notification
