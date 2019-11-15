const Endpoint = require('cubic-api/endpoint')
const request = require('request-promise')

/**
 * Provides basic item statistics for a specific item
 */
class Items extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get basic item stats. Usage of this data for commerical purposes must be discussed with us before.'
    this.schema.url = '/wow-classic/v1/items/:item'
    this.schema.request = { url: '/wow-classic/v1/items/2589' }
    this.schema.query = [
      {
        name: 'region',
        default: 'all',
        description: 'Region to return data from.'
      },
      {
        name: 'server',
        default: '',
        description: 'Server to return data from.'
      }
    ]
    this.schema.response = {
      itemId: Number,
      name: String,
      qty: Number,
      minBuyout: Number,
      marketValue: Number,
      previous: {
        qty: Number,
        minBuyout: Number,
        marketValue: Number
      }
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const region = (['US', 'EU'].includes(req.query.region.toUpperCase())) ? req.query.region.toUpperCase() : null
    const server = req.query.server ? req.query.server.toLowerCase() : null

    let uri = 'http://api.tradeskillmaster.com/v1/item/'
    if (region && server) {
      uri += region + '/'
      uri += (server || 'blackhand') + '/' // add dummy server so we can request TSM API
    }
    uri += req.params.item

    // TODO: Put all the requests in parallel
    const item = await request({
      uri,
      json: true,
      headers: { 'User-Agent': 'Request-Promise' },
      qs: {
        format: 'json',
        apiKey: 'iymI28H-EW5H0jne2M_Zm_pylkDRNfAC'
      }
    })

    const meta = await this.db.collection('items').findOne({ itemId: item.Id || item.ItemId })

    const response = {
      itemId: item.Id || item.ItemId,
      name: item.Name,
      icon: `https://wow.zamimg.com/images/wow/icons/large/${meta.icon}.jpg`,
      tags: [meta.class]
    }

    response.tooltip = ''

    if (region && server) {
      response.region = region
      response.server = server
      response.minBuyout = item.MinBuyout
      response.marketValue = item.MarketValue
      response.qty = item.Quantity
      response.previous = this.generatePreviousSampleData(response)

      response[region] = {
        minBuyout: item.RegionMinBuyoutAvg,
        marketValue: item.RegionMarketAvg,
        qty: item.RegionQuantity
      }
      response[region].previous = this.generatePreviousSampleData(response[region])
    } else {
      if (region) response.region = region
      response.EU = {
        minBuyout: item.EUMinBuyoutAvg,
        marketValue: item.EUMarketAvg,
        qty: item.EUQuantity
      }
      response.EU.previous = this.generatePreviousSampleData(response.EU)
      response.US = {
        minBuyout: item.USMinBuyoutAvg,
        marketValue: item.USMarketAvg,
        qty: item.USQuantity
      }
      response.US.previous = this.generatePreviousSampleData(response.US)
    }

    res.send(response)
  }

  generatePreviousSampleData (item) {
    const rand = () => Math.random() * (1.5 - 0.5) + 0.5
    return {
      minBuyout: item.minBuyout * rand(),
      marketValue: item.marketValue * rand(),
      qty: item.qty * rand()
    }
  }
}

module.exports = Items
