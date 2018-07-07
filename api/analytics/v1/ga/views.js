const Endpoint = cubic.nodes.main.core.Endpoint
const { google } = require('googleapis')
const analytics = google.analytics('v3')
const options = require(`${process.cwd()}/config/ga/nexushub-ga-user.js`)

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Provides number of monthly page views as tracked by Google Analytics.'
    this.schema.response = Number
    this.schema.limit = {
      interval: 20000,
      maxInInterval: 5
    }
  }

  async main (req, res) {
    try {
      const auth = new google.auth.JWT(options.email, options.key, null, ['https://www.googleapis.com/auth/analytics.readonly'])
      await auth.authorize()
      const users = await analytics.data.ga.get({
        auth,
        ids: options.ids,
        metrics: 'ga:pageviews',
        'start-date': '30daysAgo',
        'end-date': 'today',
        dimensions: 'ga:date'
      })
      res.send(users.data.totalsForAllResults['ga:pageviews'])
    } catch (err) {
      res.send(1000000) // Placeholder if auth fails (which it would on dev builds)
    }
  }
}

module.exports = Index
