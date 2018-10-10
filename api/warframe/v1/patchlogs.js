const Endpoint = cubic.nodes.warframe.core.Endpoint
const patchlogs = require('warframe-patchlogs')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Patchlogs extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Returns patchlogs for all or a single item. Due to the massive amount of data that these patchlogs contain, we require you to load them in "chunks", where the starting point is the `skip` parameter and the `limit` parameter specifies the number of logs.'
    this.schema.url = '/warframe/v1/patchlogs'
    this.schema.query = [{
      name: 'item',
      description: 'Items to reduce patchlogs by. If no item is specified, all patchlogs are returned'
    }, {
      name: 'limit',
      description: 'Number of patchlogs to return per chunk.',
      default: 3
    }, {
      name: 'skip',
      description: 'Position to skip to. Logically this would be multiples of your `limit`.',
      default: 0
    }]
    this.schema.response = [{
      name: String,
      url: String,
      date: String,
      additions: String,
      changes: String,
      fixes: String,
      type: String
    }]
  }

  async main (req, res) {
    const item = req.query.item
    const skip = req.query.skip
    const limit = req.query.limit

    // Refuse if limit is too high
    if (limit > 10) {
      return res.status(401).send({
        error: 'Bad input.',
        reason: 'The `limit` param must be no higher than 10.'
      })
    }

    // Get Patchlogs
    if (item) {
      const Item = await this.db.collection('items').findOne({ name: title(item) })
      if (!Item) {
        const response = {
          error: 'Not found.',
          reason: `${item} could not be not found. If you think we missed an item, message us at https://discord.gg/8mCNvKp.`
        }
        this.cache(response, 60)
        return res.status(404).send(response)
      }
      const logs = patchlogs.getItemChanges(Item).slice(skip, limit)
      this.cache(logs, 60)
      res.send(logs)
    } else {
      const logs = patchlogs.posts.slice(skip, limit)
      this.cache(logs, 60)
      res.send(logs)
    }
  }
}

module.exports = Patchlogs
