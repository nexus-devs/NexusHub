const Endpoint = cubic.nodes.warframe.core.Endpoint

class Item extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get item statistics between a specified time frame.'
    this.schema.url = '/warframe/v1/items/:item'
    this.schema.request = { url: '/warframe/v1/items/nikana%20prime' }
    const economyData = {
      median: Number,
      min: Number,
      max: Number,
      offers: Number
    }
    this.schema.response = {
      name: 'Nikana Prime',
      type: String,
      description: String,
      components: [{
        name: String,
        ducats: Number,
        selling: economyData,
        buying: economyData,
        imgUrl: String
      }],
      imgUrl: '/img/warframe/items/nikana-prime.png',
      webUrl: '/warframe/items/nikana-prime'
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const name = req.params.item

    let item = await this.db.collection('items').findOne({
      name: new RegExp('^' + name + '$', 'i')
    })
    if (item) {
      delete item._id
      this.cache(item, 60)
      res.send(item)
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

module.exports = Item
