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
      },
      {
        name: 'limit',
        default: 14
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
    if (limit > 20 || limit < 2) {
      return res.status(400).send({
        error: 'Bad input.',
        reason: `Limit must not be higher than 20 or lower than 2. Received ${limit}.`
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
    limit = Math.floor(limit / 2)
    let items = await this.searchItems(query, limit)
    let players = await this.searchPlayers(query, limit)
    return items.concat(players)
  }

  /**
   * Find matching items, return median as key information
   */
  async searchItems(query, limit) {
    let result = []
    let items = await this.find('items', query, limit)

    // Get median value from set and append image url
    items.forEach(item => {
      let object = {
        name: item.name,
        type: 'Items',
        apiUrl: `/warframe/v1/items/${item.name.split(" ").join("%20")}`,
        webUrl: `/warframe/items/${item.name.split(" ").join("%20")}`,
        imgUrl: `/img/warframe/items/${item.name.split(" ").join("-").toLowerCase()}.png`,
        keyData: ''
      }
      if (item.prices) {
        object.keyData = item.prices.find(c => c.name === 'Set').median + 'p'
      }
      result.push(object)
    })
    return result
  }

  /**
   * Find stored players, return MR as key information
   */
  async searchPlayers(query, limit) {
    let result = []
    let players = await this.find('players', query, limit)

    players.forEach(player => {
      let object = {
        name: player.name,
        type: 'Players',
        apiUrl: `/warframe/v1/players/${player.name}/profile`,
        webUrl: 'soon™',
        imgUrl: `/img/warframe/players/${player.mastery.rank.name.split(" ").join("-").toLowerCase()}.png`,
        keyData: `MR ${player.mastery.rank.number}`
      }
      result.push(object)
    })
    return result
  }

  /**
   * Function for finding closest match. Queries for /^query/i first, if limit
   * isn't exceeded it'll resolve to finding the string anywhere in the name
   */
  async find(collection, query, limit) {
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
