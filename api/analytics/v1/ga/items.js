const Endpoint = require('cubic-api/endpoint')
const { google } = require('googleapis')
const analytics = google.analyticsreporting({ version: 'v4' })
const options = require(`${process.cwd()}/config/ga/nexushub-ga-user.js`)

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Provides number of most viewed items in the last 24 hours as tracked by Google Analytics.'
    this.schema.response = Number
    this.schema.limit = {
      interval: 20000,
      maxInInterval: 5
    }
    this.schema.query = [
      {
        name: 'game',
        default: 'warframe',
        description: 'Game to return items from.'
      }
    ]
  }

  async main (req, res) {
    const game = req.query.game.toLowerCase()

    try {
      const auth = new google.auth.JWT(options.email, options.key, null, ['https://www.googleapis.com/auth/analytics.readonly'])
      await auth.authorize()
      const ga = await analytics.reports.batchGet({
        auth,
        requestBody: {
          reportRequests: [{
            viewId: options.viewId,
            dateRanges: [{
              startDate: '1daysAgo',
              endDate: 'today'
            }],
            metrics: [{ expression: 'ga:pageviews' }],
            orderBys: [{ fieldName: 'ga:pageviews', sortOrder: 'DESCENDING' }],
            dimensions: [{ name: 'ga:pagePath' }],
            dimensionFilterClauses: [{
              filters: [{
                dimensionName: 'ga:pagePath',
                operator: 'PARTIAL',
                expressions: [`/${game}/items/`]
              }]
            }]
          }]
        }
      })
      const views = ga.data.reports[0].data.rows.map(i => {
        return {
          path: i.dimensions[0],
          views: parseInt(i.metrics[0].values[0])
        }
      })
      res.send(views)
      // this.cache(users, 60 * 60)
    } catch (err) {
      console.log(err)
      res.send('999') // Placeholder if auth fails (which it would on dev builds)
    }
  }
}

module.exports = Index
