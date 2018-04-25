const Endpoint = cubic.nodes.warframe.core.Endpoint

class Item extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get item statistics between a specified time frame.'
    this.schema.url = '/warframe/v1/items/:item'
    this.schema.request = { url: '/warframe/v1/items/nikana%20prime' }
    this.schema.response = {
      name: 'Nikana Prime',
      type: 'Prime',
      description: String,
      components: [{
        name: String,
        ducats: Number,
        drop: [{
          location: String,
          type: {
            _type: String,
            _description: 'Type of the drop. (Relics, Enemies, Missions)'
          },
          chance: Number
        }],
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
    const item = req.params.item

    let doc = await this.db.collection('items').findOne({
      name: new RegExp('^' + item + '$', 'i')
    })
    if (doc) {
      let result = {
        name: doc.name,
        type: doc.type,
        description: doc.description,
        components: doc.components,
        imgUrl: doc.imgUrl,
        webUrl: doc.webUrl
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

module.exports = Item
