const Endpoint = cubic.nodes.warframe.core.Endpoint
const Statistics = require(`${__dirname}/../items/statistics.js`)
const _ = require('lodash')
const moment = require('moment')

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Request extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.method = 'POST'
    this.schema.scope = 'write_requests_warframe'
    this.schema.url = '/warframe/v1/requests'
    this.schema.request = {
      body: {
        user: '[DE]Glen',
        offer: 'Buying',
        item: 'Ammo Drum',
        component: 'Set',
        price: 900,
        rank: 0,
        count: 1,
        index: 0,
        message: 'Hello, I\'m Glen and I\'d like to buy Ammo Drum for 900p. I won\'t ban you, promise.',
        createdAt: new Date()
      }
    }
    this.schema.response = String
    this.schema.pubsub = {
      url: '/warframe/v1/items/ammo%20drum/statistics',
      body: new Statistics().schema.response
    }
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main (req, res) {
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
        send (data) {
          resolve(data)
        }
      }
      _res.status = () => _res
      statistics.main(_req, _res)
    })

    // Publish and save resulting statistics
    this.publish(data, '/warframe/v1/items/' + request.item + '/statistics')
    if (data.components) this.saveStats(data)
    res.send('Request processed. (' + JSON.stringify(request) + ')')
  }

  /**
   * Save prices/demand in local db for use by other endpoints
   */
  async saveStats (data) {
    let item = await this.db.collection('items').findOne({ name: data.name })

    for (let component of item.components) {
      let componentStats = data.components.find(c => c.name === component.name)
      component = Object.assign(component, {
        selling: {
          median: componentStats.selling.median,
          min: componentStats.selling.min,
          max: componentStats.selling.max,
          offers: componentStats.selling.offers.count
        },
        buying: {
          median: componentStats.buying.median,
          min: componentStats.buying.min,
          max: componentStats.buying.max,
          offers: componentStats.buying.offers.count
        }
      })
    }

    await this.db.collection('items').updateOne({ name: data.name }, item)
  }
}

module.exports = Request
