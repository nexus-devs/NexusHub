const Endpoint = require('cubic-api/endpoint')
const { google } = require('googleapis')
const analytics = google.analyticsreporting({ version: 'v4' })
const options = require(`${process.cwd()}/config/ga/nexushub-ga-user.js`)

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Provides number of monthly page views as tracked by Google Analytics.'
    this.schema.response = String
    this.schema.limit = {
      interval: 20000,
      maxInInterval: 5
    }
  }

  async main (req, res) {
    try {
      const auth = new google.auth.JWT(options.email, options.key, null, ['https://www.googleapis.com/auth/analytics.readonly'])
      await auth.authorize()
      const ga = await analytics.reports.batchGet({
        auth,
        requestBody: {
          reportRequests: [{
            viewId: options.viewId,
            dateRanges: [{
              startDate: '30daysAgo',
              endDate: 'today'
            }],
            metrics: [{ expression: 'ga:pageviews' }]
          }]
        }
      })
      const views = ga.data.reports[0].data.totals[0].values[0]
      res.send(views)
      this.cache(views, 60 * 60)
    } catch (err) {
      res.send('666') // Placeholder if auth fails (which it would on dev builds)
    }
  }
}

module.exports = Index
