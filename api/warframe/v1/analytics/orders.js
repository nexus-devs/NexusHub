const Endpoint = cubic.nodes.warframe.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Provides number of processed offers in the last 30 days.'
    this.schema.response = Number
  }

  async main (req, res) {
    const offers = await this.db.collection('orders').find({
      createdAt: {
        $gte: new Date(new Date() - 1000 * 60 * 60 * 24 * 30)
      }
    }).count()
    res.send(offers || 1100000) // Placeholder data if in dev build without offers
    this.cache(offers || 1100000, 60 * 60)
  }
}

module.exports = Index
