const Endpoint = cubic.nodes.warframe.core.Endpoint

class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Provides number of processed offers in the last 30 days.'
    this.schema.response = Number
  }

  async main (req, res) {
    const offers = await this.db.collection('requests').find({
      createdAt: {
        $gte: new Date() - 1000 * 60 * 60 * 24 * 30,
        $lte: new Date()
      }
    }).count()
    res.json(offers || 1100000) // Placeholder data if in dev build without offers
  }
}

module.exports = Index
