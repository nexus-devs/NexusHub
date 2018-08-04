const Endpoint = cubic.nodes.warframe.core.Endpoint
const Fuse = require('fuse.js')

class Search extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Find the most relevant entries in the main collections for a given query'
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
      name: 'fuzzy',
      default: false,
      description: 'Enable fuzzy matching for searches. Must be limited to a single category.'
    },
    {
      name: 'threshold',
      default: 0.75,
      description: 'Minimum matching percentage for fuzzy search.'
    },
    {
      name: 'category',
      default: '',
      description: 'Category to query results in.'
    }]
    this.schema.request = { url: '/warframe/v1/search?query=nik' }
    this.schema.response = [{
      category: String,
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
    const fuzzy = req.query.fuzzy
    const category = req.query.category
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
    if (fuzzy && !category) {
      return res.status(400).send({
        error: 'Bad input.',
        reason: 'A category must be specified when performing fuzzy searches. E.g. /search?query=test&fuzzy=true&category=items'
      })
    }

    let result = fuzzy ? await this.fuzzySearch(query, category, threshold, limit) : await this.search(query, category, limit)
    this.cache(result, 60)
    res.send(result)
  }

  /**
   * Fuzzy search a certain category.
   */
  async fuzzySearch (query, category, threshold, limit) {
    let collection = category.toLowerCase() === 'items' ? 'items' : 'players'
    let results = []
    let data = await this.db.collection(collection).find().toArray()

    let fuse = new Fuse(data, {
      shouldSort: true,
      findAllMatches: true,
      threshold,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: ['name']
    })
    let fused = fuse.search(query)

    // Reduce output size. This format should be parallel to the /items endpoint
    for (let result of fused) {
      delete result._id
      delete result.uniqueName

      if (result.components) {
        for (let component of result.components) {
          delete component.drop
        }
      }
      results.push(result)
    }

    return results
  }

  /**
   * Find all relevant data for possible queries. Official, non-user related
   * data must be returned first. Unlike the fuzzy search, we check for direct
   * sequence matches anywhere in the target name.
   */
  async search (query, category, limit) {
    let items = []
    let players = []

    if (!category || category.toLowerCase() === 'items') {
      items = await this.searchItems(query, limit)
    }
    if (!category || category.toLowerCase() === 'players') {
      players = await this.searchPlayers(query, limit)
    }

    return items.concat(players)
  }

  /**
   * Find matching items, return median as key information
   */
  async searchItems (query, limit) {
    let result = []
    let items = await this.find('items', query, limit)

    // Get median value from set and append image url
    items.forEach(item => {
      const set = item.components.find(c => c.name === 'Set')

      result.push({
        name: item.name,
        type: item.type,
        category: 'Items',
        keyData: (set.selling && set.buying) ? (set.selling.current.median + set.buying.current.median) / 2 + 'p' : item.ducats + 'Ducats',
        imgUrl: item.imgUrl,
        apiUrl: item.apiUrl,
        webUrl: item.webUrl
      })
    })
    return result
  }

  /**
   * Find stored players, return MR as key information
   */
  async searchPlayers (query, limit) {
    let result = []
    let players = await this.find('players', query, limit)

    players.forEach(player => {
      delete player._id
      result.push(Object.assign({
        category: 'players'
      }, player))
    })
    return result
  }

  /**
   * Function for finding closest match. Queries for /^query/i first, if limit
   * isn't exceeded it'll resolve to finding the string anywhere in the name
   */
  async find (collection, query, limit) {
    let result = await this.db.collection(collection).find({
      name: new RegExp(`^${query}`, 'i')
    }).limit(limit).toArray()

    // Found fewer entries than specified limit? Search query anywhere.
    // Ignores duplicates
    if (result.length < limit) {
      // Ignore duplicates
      let ignore = ''
      result.forEach(object => {
        ignore += `${object.name}|`
      })
      ignore = ignore.slice(0, -1)

      // Second query
      let any = await this.db.collection(collection).find({
        name: new RegExp(`(?!${ignore}).*${query}`, 'i')
      }).limit(limit - result.length).toArray()
      result = result.concat(any)
    }
    return result
  }
}

module.exports = Search
