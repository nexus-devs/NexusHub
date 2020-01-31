const Endpoint = require('cubic-api/endpoint')
const Fuse = require('fuse.js')

class Search extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Find fuzzy matched items based on the given input string.'
    this.schema.url = '/wow-classic/v1/search'
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
      default: 50,
      description: 'Number of results to limit search to. Min. 2, Max. 20 for non-fuzzy queries.'
    },
    {
      name: 'threshold',
      default: 0.75,
      description: 'Minimum matching percentage for fuzzy search.'
    }]
    this.schema.request = { url: '/wow-classic/v1/search?query=devils' }
    this.schema.response = [{
      itemId: Number,
      name: String,
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
    if (limit > 50) {
      return res.status(400).send({
        error: 'Bad input.',
        reason: `Limit must not be higher than 50. Received ${limit}.`
      })
    }

    const result = await this.search(query, threshold, limit)
    this.cache(result, 60 * 60)
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
      itemId: 1,
      name: 1,
      icon: 1
    }).toArray()

    // Return to original order
    const result = []
    for (const item of items) {
      const r = full.find(i => i.name === item)
      r.imgUrl = `https://wow.zamimg.com/images/wow/icons/large/${r.icon}.jpg`
      delete r.icon
      result.push(r)
    }

    return result
  }
}

module.exports = Search
