const Endpoint = cubic.nodes.warframe.core.Endpoint
const _ = require("lodash")


class Base extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Get item statistics between a specified time frame."
    this.schema.url = "/warframe/v1/items/:item"
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main(req, res) {
    const item = req.params.item

    let doc = await this.db.collection('items').findOne({
      name: new RegExp("^" + item + "$", "i")
    })
    if (doc) {
      let result = {
        name: doc.name,
        type: doc.type,
        description: doc.description,
        components: doc.components,
      }

      this.cache(result, 60)
      res.send(result)
    } else {
      let response = {
        error: 'Not found.',
        reason: `${item} could not be not found. If you think we missed an item, message us at https://discord.gg/8mCNvKp.`
      }
      this.cache(response, 60)
      res.status(404).send(response)
    }
  }
}

module.exports = Base
