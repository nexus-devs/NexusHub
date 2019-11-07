const Endpoint = require('cubic-api/endpoint')
const RSSParser = require('rss-parser')

class News extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Returns data from the Wowhead news feed.'
    this.schema.url = '/wow-classic/v1/news'
    this.schema.query = [{
      name: 'limit',
      description: 'Number of patchlogs to return per chunk. Setting this to 0 will return everything up to the end.',
      default: 4
    }]
    this.schema.response = []
  }

  async main (req, res) {
    const limit = req.query.limit
    const parser = new RSSParser()
    const feed = await parser.parseURL('https://www.wowhead.com/news/rss/classic')
    res.send(feed.items.slice(0, limit))
  }
}

module.exports = News
