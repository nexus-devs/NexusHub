const Endpoint = require(blitz.config[blitz.id].endpointParent)
const Statistics = require(__dirname + '/../items/statistics.js')
const _ = require('lodash')

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

    // Modify request
    request.createdAt = new Date(request.createdAt)

    // Publish and save request on db
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
        component: '',
        timestart: new Date().getTime(),
        timeend: new Date(new Date().setDate(new Date().getDate() - 7)).getTime(),
        intervals: 7
      }
    }
    let data = await new Promise(resolve => {
      let _res = {
        send(data) {
          resolve(data)
        }
      }
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
        avg: component.avg,
        median: component.median,
        min: component.min,
        max: component.max
      }
      prices.push(price)

      let dist = {
        name: component.name,
        supply: component.supply,
        demand: component.demand
      }
      distribution.push(dist)
    })

    await this.db.collection('items').updateOne({
      name: new RegExp('^' + data.title + '$', 'i')
    }, {
      $set: {
        prices: prices,
        distribution: distribution
      }
    }, {
      upsert: true
    })
  }
}

module.exports = Request
