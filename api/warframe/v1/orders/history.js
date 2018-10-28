const Endpoint = cubic.nodes.warframe.core.Endpoint
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class Orders extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Returns all priced orders from the last 24h, including closed ones, for a specified item component.'
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by.',
        required: true
      }, {
        name: 'component',
        description: 'Item component to reduce orders by.',
        required: true
      }, {
        name: 'source',
        description: '"Trade Chat" or "Warframe Market".'
      }, {
        name: 'platform',
        description: '"PC, PS4 or XB1."'
      }
    ]
  }

  async main (req, res) {
    const item = title(req.query.item)
    const component = title(req.query.component)
    const source = req.query.source
    const platform = req.query.platform
    const query = {
      item,
      component,
      createdAt: {
        $gte: new Date(new Date() - 1000 * 60 * 60 * 24)
      }
    }
    if (source) query.source = source
    if (platform) query.platform = platform

    const orders = await this.db.collection('orders').find(query).project({
      _id: 0,
      user: 1,
      offer: 1,
      item: 1,
      component: 1,
      price: 1,
      createdAt: 1
    }).toArray()
    const priced = orders.filter(o => o.price)

    res.send(priced.filter((o, i) => priced.findIndex(u => u.user === o.user) === i))
  }
}

module.exports = Orders
