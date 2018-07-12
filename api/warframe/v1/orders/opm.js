const Endpoint = cubic.nodes.warframe.core.Endpoint

/**
 * Orders per minute. This data is used for the 'active traders' chart.
 */
class Opm extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = "Orders per minute. This data is used for the 'active traders' chart."
    this.schema.query = [
      {
        name: 'item',
        description: 'Item to reduce orders by.',
        required: true
      }
    ]
    this.schema.response = []
  }

  async main (req, res) {
    const item = req.query.item
    const { total, intervals } = await this.filter(item)
    res.send({ total, intervals })
    this.cache({ total, intervals }, 1000 * 60)
  }

  async filter (item) {
    const queryStart = new Date() - 1000 * 60 * 30
    const queryEnd = new Date()
    const queryTotal = queryEnd - queryStart
    const orders = await this.db.collection('orderHistory').find({
      item: new RegExp('^' + item + '$', 'i'),
      createdAt: {
        $gte: new Date(queryStart)
      }
    }).toArray()
    const intervals = []

    // Divide orders into n intervals for bar chart
    const n = 30
    for (let i = 1; i <= n; i++) {
      const intervalStart = queryEnd - (queryTotal / n) * i
      const intervalEnd = queryEnd - (queryTotal / n) * (i - 1)
      let quantity = 0

      for (let order of orders) {
        if (order.createdAt < intervalEnd && order.createdAt > intervalStart) {
          quantity++
        }
      }
      intervals.push(quantity)
    }

    const total = intervals.slice(0, 5).reduce((a, b) => a + b) // last 5 minutes
    return { total, intervals }
  }
}

module.exports = Opm
