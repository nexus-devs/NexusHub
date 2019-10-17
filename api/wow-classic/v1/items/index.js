const Endpoint = require('cubic-api/endpoint')
const request = require('request-promise')

/**
 * Provides basic item statistics for a specific item
 */
class Items extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get basic item price statistics. Usage of this data for commerical purposes must be discussed with us before.'
    this.schema.url = '/wow-classic/v1/items/:item'
    this.schema.request = { url: '/wow-classic/v1/items/linen' }
    this.schema.response = {
      itemId: Number,
      itemName: String,
      qty: Number,
      minBuyout: Number,
      marketValue: Number
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const item = await request({
      uri: 'http://api.tradeskillmaster.com/v1/item/' + req.params.item ,
      json: true,
      headers: { 'User-Agent': 'Request-Promise' },
      qs: {
        format: 'json',
        apiKey: 'iymI28H-EW5H0jne2M_Zm_pylkDRNfAC'
      }
    })

    const qty = item['USQuantity'] + item['EUQuantity']
    const minBuyout = (item['USMinBuyoutAvg'] + item['EUMinBuyoutAvg']) / 2
    const marketValue = (item['USMarketAvg'] + item['EUMarketAvg']) / 2

    // TODO: Currently global
    res.send({
      itemId: item['ItemId'],
      name: item['Name'],
      qty,
      minBuyout,
      marketValue,
      current: this.generateSampleWeek(qty, minBuyout, marketValue),
      previous: this.generateSampleWeek(qty, minBuyout, marketValue)
    })
  }

  generateSampleWeek (qty, minBuyout, marketValue) {
    const week = {
      qty: 0,
      minBuyout: 0,
      marketValue: 0,
      intervals: []
    }

    for (let i = 0; i < 7; i++) {
      const day = this.generateSampleDay(qty, minBuyout, marketValue)
      week.intervals[i] = day
      week.qty += day.qty
      week.minBuyout += day.minBuyout
      week.marketValue += day.marketValue
    }
    Math.round(week.minBuyout = week.minBuyout / 7)
    Math.round(week.marketValue = week.marketValue / 7)

    return week
  }

  generateSampleDay (qty, minBuyout, marketValue) {
    const day = {
      qty: 0,
      minBuyout: 0,
      marketValue: 0,
      intervals: []
    }

    for (let i = 0; i < 24; i++) {
      qty = this.generateSampleData(qty, qty / 4, i)
      minBuyout = this.generateSampleData(minBuyout, minBuyout / 4, i)
      marketValue = this.generateSampleData(marketValue, marketValue / 4, i)

      day.intervals[i] = { qty, minBuyout, marketValue }
      day.qty += qty
      day.minBuyout += minBuyout
      day.marketValue += marketValue
    }
    Math.round(day.minBuyout = day.minBuyout / 24)
    Math.round(day.marketValue = day.marketValue / 24)

    return day
  }

  // Generates sin wave formed sample data
  generateSampleData (base, variance, iteration) {
    return Math.round(base + Math.sin(iteration) * variance)
  }

  /*
  async main (req, res) {
    const item = req.params.item
    const orders = await this.db.collection('orders').find({
      item,
      timeLeftUpper: { $gte: new Date() }
    }).toArray()
    if (!orders) {
      let response = {
        error: `Could not find up-to-date data for ${item}.`,
        reason: 'No auctions currently online, or no new data scanned.'
      }
      // this.cache(response, 60)
      return res.status(404).send(response)
    }

    // TODO: GET THE FUCKING QUANITITY CALCULATION IN HERE WHAT THE FUCK

    // Get quantity and average
    const qty = orders.length
    const sum = orders.reduce((a, b) => { return a + b.buyout }, 0)
    const avg = sum / qty

    // Get median
    orders.sort((a, b) => (a.buyout > b.buyout) ? 1 : ((b.buyout > a.buyout) ? -1 : 0))
    const medianLow = Math.floor((qty - 1) / 2)
    const medianHigh = Math.ceil((qty - 1) / 2)
    const median = (orders[medianLow].buyout + orders[medianHigh].buyout) / 2

    res.send({
      item,
      qty,
      price: orders[0].buyout,
      median,
      avg
    })
  } */
}

module.exports = Items
