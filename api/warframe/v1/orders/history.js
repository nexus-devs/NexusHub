const Endpoint = require('cubic-api/endpoint')
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

class History extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Returns all priced orders from the last 24h, including closed ones, for a specified item component. Usage of this data for commerical purposes must be discussed with us before.'
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
    this.schema.request = {
      url: '/warframe/v1/orders/history?item=Nikana%20Prime&component=Set'
    }
    this.schema.response = [{
      user: String,
      offer: String,
      item: String,
      component: String,
      price: Number,
      createdAt: String
    }]
  }

  async main (req, res) {
    const item = title(decodeURIComponent(req.query.item))
    const component = title(req.query.component)
    const source = req.query.source
    const platform = req.query.platform
    const result = await this.get(item, component, source, platform)

    this.cache(result, 60)
    res.send(result)
  }

  async get (item, component, source, platform) {
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
    const result = priced.filter((o, i) => priced.findIndex(u => u.user === o.user) === i)

    return result
  }
}

module.exports = History
