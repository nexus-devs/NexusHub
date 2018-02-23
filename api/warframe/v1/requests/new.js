const Endpoint = blitz.nodes.warframe.core.Endpoint
const Statistics = require(__dirname + '/../items/statistics.js')
const _ = require('lodash')
const moment = require('moment')

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Request extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)

    // Modify schema
    this.schema.method = 'POST'
    this.schema.scope = 'write_requests_warframe'
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main(req, res) {
    const request = req.body

    // Convert date to actual timestamp so Mongo can treat it as such
    request.createdAt = new Date(request.createdAt)

    // Publish and save request on db. We also make sure to publish the request
    // with its raw message first, but then remove it for storage
    this.publish(_.cloneDeep(request), '/warframe/v1/requests')
    delete request.subMessage
    delete request.rawMessage
    this.db.collection('requests').insertOne(request)

    // Get statistics for item
    let statistics = new Statistics(this.api, this.db, '/warframe/v1/items/' + request.item + '/statistics')
    let _req = {
      params: {
        item: request.item
      },
      query: {
        timestart: moment().endOf('day').valueOf(),
        timeend: moment().subtract(7, 'days').startOf('day').valueOf(),
        region: '',
        rank: null,
        intervals: 14
      }
    }
    let data = await new Promise(resolve => {
      let _res = {
        send(data) {
          resolve(data)
        }
      }
      _res.status = () => _res
      statistics.main(_req, _res)
    })

    // Publish and save resulting statistics
    this.publish(data, '/warframe/v1/items/' + request.item + '/statistics')
    data.components ? this.saveStats(data) : null
    res.send('Request processed. (' + JSON.stringify(request) + ')')
  }


  /**
   * Save prices/demand in local db for use by other endpoints
   */
  async saveStats(data) {
    let prices = []
    let distribution = []

    data.components.forEach(component => {
      let price = {
        name: component.name,
        selling: {
          avg: component.selling.avg,
          median: component.selling.median,
          min: component.selling.min,
          max: component.selling.max
        },
        buying: {
          avg: component.buying.avg,
          median: component.buying.median,
          min: component.buying.min,
          max: component.buying.max
        },
        combined: {
          avg: component.combined.avg,
          median: component.combined.median,
          min: component.combined.min,
          max: component.combined.max
        }
      }
      prices.push(price)

      let dist = {
        name: component.name,
        supply: component.selling.offers,
        demand: component.buying.offers
      }
      distribution.push(dist)
    })

    await this.db.collection('items').updateOne({
      name: new RegExp('^' + data.name + '$', 'i')
    }, {
      $set: {
        prices,
        distribution
      }
    }, {
      upsert: true
    })
  }
}

module.exports = Request
