const Endpoint = cubic.nodes.main.core.Endpoint
const { google } = require('googleapis')
const analytics = google.analytics('v3')
const options = require(`${process.cwd()}/config/ga/nexushub-ga-user.js`)

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Provides number of monthly users as tracked by Google Analytics.'
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
      const ga = await analytics.data.ga.get({
        auth,
        ids: options.ids,
        metrics: 'ga:30dayUsers',
        'start-date': 'yesterday',
        'end-date': 'today',
        dimensions: 'ga:date'
      })
      const users = parseInt(ga.data.totalsForAllResults['ga:30dayUsers'])
      res.send(users)
      this.cache(users, 60 * 60)
    } catch (err) {
      res.send(250000) // Placeholder if auth fails (which it would on dev builds)
    }
  }
}

module.exports = Index
