const Endpoint = require('cubic-api/endpoint')
const RSSParser = require('rss-parser')

class News extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Returns data from the Wowhead news feed.'
    this.schema.url = '/wow-classic/v1/news'
    this.schema.query = [{
      name: 'limit',
      description: 'Number of Wowhead news to return per chunk. Setting this to 0 will return everything up to the end.',
      default: 4
    }]
    this.schema.response = [{
      title: String,
      link: String,
      pubDate: String,
      content: String,
      guid: String,
      categories: [String],
      isoDate: String
    }]
  }

  async main (req, res) {
    const limit = req.query.limit
    const parser = new RSSParser()
    let feed = await parser.parseURL('https://www.wowhead.com/news/rss/classic')
    feed = feed.items.slice(0, limit)

    // Parse contentSnippet correctly
    for (const f of feed) {
      f.content = f.content.substring(0, f.content.indexOf('<br><br><em>'))
      f.content = f.content.replace(/<p>/g, '\n')
      delete f.contentSnippet
    }

    this.cache(feed, 60)
    res.send(feed)
  }
}

module.exports = News
