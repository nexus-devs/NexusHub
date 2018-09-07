const Endpoint = cubic.nodes.warframe.core.Endpoint
const Fuse = require('fuse.js')

class Search extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Find fuzzy matched items based on the given input string.'
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
    },
    {
      name: 'threshold',
      default: 0.75,
      description: 'Minimum matching percentage for fuzzy search.'
    }]
    this.schema.request = { url: '/warframe/v1/search?query=nik' }
    this.schema.response = [{
      name: String,
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
    const threshold = 1 - req.query.threshold

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

    let result = await this.search(query, threshold, limit)
    this.cache(result, 60)
    res.send(result)
  }

  /**
   * Retrieves a list of all names first, fuzzy matches them and gets the full
   * objects afterwards.
   */
  async search (query, threshold, limit) {
    const data = await this.db.collection('items').find().project({ _id: 0, name: 1 }).toArray()
    const fuse = new Fuse(data, {
      shouldSort: true,
      threshold,
      location: 0,
      distance: 250,
      maxPatternLength: 16,
      minMatchCharLength: 2,
      keys: ['name']
    })
    const fused = fuse.search(query)
    const items = fused.map(f => f.name).slice(0, limit)
    const full = await this.db.collection('items').find({
      name: { $in: items }
    }).project({
      _id: 0,
      name: 1,
      description: 1,
      components: 1,
      imgUrl: 1,
      apiUrl: 1,
      webUrl: 1
    }).toArray()

    // Return to original order
    const result = []
    for (let item of items) {
      result.push(full.find(i => i.name === item))
    }

    return result
  }
}

module.exports = Search
