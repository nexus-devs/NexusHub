const Endpoint = require('cubic-api/endpoint')

class Search extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Find items starting with the given input string.'
    this.schema.limit = {
      maxInInterval: 60,
      interval: 10000
    }
    this.schema.query = [{
      name: 'query',
      default: '',
      required: true,
      description: 'Search string to query for.'
    },
    {
      name: 'limit',
      default: 10,
      description: 'Number of results to limit search to. Min. 2, Max. 20 for non-fuzzy queries.'
    }]
    this.schema.request = { url: '/warframe/v1/suggestions?query=nik' }
    this.schema.response = [{
      name: String,
      category: String,
      apiUrl: {
        _type: String,
        _description: 'It is recommended to get more detailed data from this link.'
      },
      webUrl: String,
      imgUrl: String
    }]
  }

  /**
    * Find the most relevant entries in the main collections for a given query
    */
  async main (req, res) {
    /* eslint no-useless-escape: "off" */
    const query = req.query.query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
    const limit = req.query.limit

    // Validate Input
    if (query.length < 2) {
      return res.status(400).send({
        error: 'Bad input.',
        reason: `Query term must be at least 2 characters. Received ${query.length}.`
      })
    }
    if (limit > 20) {
      return res.status(400).send({
        error: 'Bad input.',
        reason: `Limit must not be higher than 20. Received ${limit}.`
      })
    }

    const result = await this.search(query, limit)
    this.cache(result, 60 * 60)
    res.send(result)
  }

  /**
   * Find all relevant data for possible queries. Official, non-user related
   * data must be returned first. Unlike the fuzzy search, we check for direct
   * sequence matches anywhere in the target name.
   */
  async search (query, limit) {
    const result = []
    const items = await this.db.collection('items').find({
      name: new RegExp(`^${query}`, 'i')
    }).project({
      _id: 0,
      name: 1,
      type: 1,
      category: 1,
      components: 1,
      imgUrl: 1,
      apiUrl: 1,
      webUrl: 1
    }).limit(limit).toArray()

    // Get median value from set and append image url
    items.forEach(item => {
      const set = item.components.find(c => c.name === 'Set')

      result.push({
        name: item.name,
        type: item.type,
        category: item.category,
        keyData: (set.prices && set.prices.selling && set.prices.buying)
          ? Math.round((set.prices.selling.current.median + set.prices.buying.current.median) / 2) + 'p'
          : set.ducats ? set.ducats + ' Ducats' : null,
        imgUrl: item.imgUrl,
        apiUrl: item.apiUrl,
        webUrl: item.webUrl
      })
    })

    return result
  }
}

module.exports = Search
