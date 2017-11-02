const Endpoint = require(blitz.config[blitz.id].endpointParent)

class Search extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = 'Find the most relevant entries in the main collections for a given query'
    this.schema.limit.maxInInterval = 60
    this.schema.limit.interval = 10000
    this.schema.query = [{
        name: 'query',
        default: "",
        required: true
      }
    ]
  }

  /**
   * Find the most relevant entries in the main collections for a given query
   */
  async main(req, res) {
    const query = req.query.query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    const limit = req.query.limit

    if (query.length < 2) {
      return res.status(400).send({
        error: 'Bad input.',
        reason: `Query term must be at least 2 characters. Received ${query.length}.`
      })
    }

    let result = await this.search(query, limit)
    this.cache(result, 60)
    res.send(result)
  }

  /**
   * Find all relevant data for possible queries. Official, non-user related
   * data must be returned first
   */
  async search(query, limit) {

  }
}

module.exports = Search
