const Endpoint = require('cubic-api/endpoint')

class Search extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Find items starting with the given input string.'
    this.schema.url = '/wow-classic/v1/search/suggestions'
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
    this.schema.request = { url: '/wow-classic/v1/search/suggestions?query=devils' }
    this.schema.response = [{
      itemId: Number,
      name: String,
      uniqueName: String,
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
    // this.cache(result, 60 * 60)
    res.send(result)
  }

  /**
   * Find all relevant data for possible queries. Official, non-user related
   * data must be returned first. Unlike the fuzzy search, we check for direct
   * sequence matches anywhere in the target name.
   */
  async search (query, limit) {
    const result = []
    const items = await this.db.collection('items').aggregate([
      { $match: { name: new RegExp(`^${query}`, 'i') } },
      {
        $project: {
          _id: 0,
          itemId: 1,
          name: 1,
          uniqueName: 1,
          icon: 1,
          class: 1,
          nameLength: { $strLenCP: '$name' }
        }
      },
      { $sort: { nameLength: 1 } },
      { $limit: limit }
    ]).toArray()

    // Get median value from set and append image url
    items.forEach(item => {
      result.push({
        itemId: item.itemId,
        name: item.name,
        uniqueName: item.uniqueName,
        type: item.class,
        imgUrl: `https://wow.zamimg.com/images/wow/icons/large/${item.icon}.jpg`
      })
    })

    return result
  }
}

module.exports = Search
