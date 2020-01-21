const Endpoint = require('cubic-api/endpoint')
const TSMRequest = require(`${process.cwd()}/api/lib/tsm-request.js`)

/**
 * Saves current up-to-date item stats
 */
class Current extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Stores current stats from TSM.'
    this.schema.method = 'POST'
    this.schema.scope = 'write_scans_wow-classic'
    this.schema.url = '/wow-classic/v1/scans/current'
    this.schema.request = {
      body: {
        slug: 'anathema-alliance'
      }
    }
    this.schema.response = String
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.body.slug

    const TSMReq = new TSMRequest()
    const query = { slug }

    let parallel = []
    parallel.push(TSMReq.get(`/realm/${slug}/stats`))
    parallel.push(this.db.collection('currentData').find(query).toArray())
    const [stats, oldData] = await Promise.all(parallel)

    if (!stats.success) {
      return res.send(`Rejected. Error from TSM: ${stats.error}`)
    }

    parallel = []
    parallel.push(this.db.collection('currentData').deleteMany({ ...query, _id: { $in: oldData.map((i) => i._id) } }))
    parallel.push(this.db.collection('currentData').insertMany(stats.data.map((i) => {
      const previousItem = oldData.find((pI) => pI.itemId === i.item)

      // Update value and push old value to previous if it's different, otherwise don't change
      const updateValue = (entry, newValue, previousEntry, prop) => {
        if (previousEntry) {
          if (newValue !== previousEntry[prop]) {
            entry.previous[prop] = previousEntry[prop]
            entry[prop] = newValue
          }
        } else entry[prop] = newValue
      }

      const obj = {
        slug,
        itemId: i.item,
        previous: previousItem ? {} : null
      }

      updateValue(obj, i.market_value, previousItem, 'marketValue')
      updateValue(obj, i.historical_value, previousItem, 'historicalValue')
      updateValue(obj, i.min_buyout, previousItem, 'minBuyout')
      updateValue(obj, i.num_auctions, previousItem, 'numAuctions')
      updateValue(obj, i.quantity, previousItem, 'quantity')

      return obj
    })))

    await Promise.all(parallel)

    return res.send('added!')
  }
}

module.exports = Current
