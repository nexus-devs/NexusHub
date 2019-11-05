const Endpoint = require('cubic-api/endpoint')
const request = require('request-promise')
const parseXml = require('xml2js').parseStringPromise

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
      marketValue: Number
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

    // Keep this in case the blizzard api doesn't work
    const metaReq = await request({
      uri: `https://wowhead.com/item=${item['Id'] || item['ItemId']}&xml`, // TODO: Change this to classic subdomain once data is there
      headers: { 'User-Agent': 'Request-Promise' }
    })
    const meta = (await parseXml(metaReq)).wowhead.item[0]

    let response = {
      itemId: item['Id'] || item['ItemId'],
      name: item['Name'],
      icon: `https://wow.zamimg.com/images/wow/icons/large/${meta.icon[0]._}.jpg`,
      tags: [meta.class[0]._]
    }
    if (meta.inventorySlot[0]._) response.tags.push(meta.inventorySlot[0]._)

    // TODO: Redo this once api is there
    // Parse tooltip
    let tooltip = meta.htmlTooltip[0]
    tooltip = tooltip.substring(tooltip.indexOf('<!--ndend-->') + 12, tooltip.length - 18) // Cuts of start and end
    response.tooltip = tooltip

    let description = {
      ilvl: this.getTooltipAttribute(tooltip, 'ilvl'),
      bind: this.getTooltipAttribute(tooltip, 'bo'),
      requiredLvl: this.getTooltipAttribute(tooltip, 'rlvl')
    }
    response.description = description

    if (region && server) {
      response['region'] = region
      response['server'] = server
      response['minBuyout'] = item['MinBuyout']
      response['marketValue'] = item['MarketValue']
      response['qty'] = item['Quantity']

      response[region] = {
        minBuyout: item['RegionMinBuyoutAvg'],
        marketValue: item['RegionMarketAvg'],
        qty: item['RegionQuantity']
      }
    } else {
      if (region) response['region'] = region
      response['EU'] = {
        minBuyout: item['EUMinBuyoutAvg'],
        marketValue: item['EUMarketAvg'],
        qty: item['EUQuantity']
      }
      response['US'] = {
        minBuyout: item['USMinBuyoutAvg'],
        marketValue: item['USMarketAvg'],
        qty: item['USQuantity']
      }
    }

    res.send(response)
  }

  getTooltipAttribute (tooltip, attribute) {
    attribute = `<!--${attribute}-->`
    return tooltip.split(attribute)[0].split('<')[0]
  }
}

module.exports = Items
