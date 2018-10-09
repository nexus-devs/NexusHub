const Endpoint = cubic.nodes.warframe.core.Endpoint
const patchlogs = require('warframe-patchlogs')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Patchlogs extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = "Simple testing method which returns 'bar'."
    this.schema.url = '/warframe/v1/patchlogs'
    this.schema.query = [
      {
        name: 'item',
        description: 'Items to reduce patchlogs by. If no item is specified, all patchlogs are returned'
      }
    ]
    this.schema.response = []
  }

  async main (req, res) {
    const item = req.query.item

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
      const logs = patchlogs.getItemChanges(Item)
      this.cache(logs, 60)
      res.send(logs)
    } else {
      const logs = patchlogs.posts
      this.cache(logs, 60)
      res.send(logs)
    }
  }
}

module.exports = Patchlogs
