const Endpoint = cubic.nodes.warframe.core.Endpoint
const _ = require('lodash')
const moment = require('moment')

/**
 * Provides detailed item statistics for specific item
 */
class Prices extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Get item statistics between now and a specified time range.'
    this.schema.url = '/warframe/v1/items/:item/prices'
    this.schema.query = [
      {
        name: 'timerange',
        default: 7,
        description: 'Time range from now in the past, in days.'
      },
      {
        name: 'region',
        default: '',
        description: 'Region to select requests from.'
      }
    ]
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const item = req.params.item
    const region = req.query.region
    const timerange = req.query.timerange
    const timeNow = moment()

    // Get item from db
    let itemResult = await this.db.collection('items').findOne({
      name: new RegExp('^' + item + '$', 'i')
    })
    if (!itemResult) {
      let response = {
        error: 'Could not find data for ' + item + '.',
        reason: 'Item doesn\'t exist.'
      }
      this.cache(response, 60)
      return res.status(404).send(response)
    }

    let doc = this.generateDocument(itemResult, timerange)
    this.getPrices(timeNow, timerange, item)

    res.send(doc)
  }

  /**
   * Generates the response document
   */
  generateDocument (itemResult, timerange) {
    let doc = { // Main document
      name: itemResult.name,
      components: []
    }

    this.generateComponents(doc, itemResult, timerange)
    return doc
  }

  /**
   * Generates the components to a corresponding item
   */
  generateComponents (doc, itemResult, timerange) {
    itemResult.components.forEach(comp => {
      const data = {
        median: null,
        min: null,
        max: null,
        offers: null,
        days: []
      }
      const dataSection = {
        current: _.cloneDeep(data),
        previous: _.cloneDeep(data)
      }
      let component = {
        name: comp.name,
        buying: _.cloneDeep(dataSection),
        selling: _.cloneDeep(dataSection),
        combined: _.cloneDeep(dataSection)
      }

      // Fill component with intervals
      const day = _.cloneDeep(data)
      delete day.days

      // TODO: Maybe put day pushing into own function?
      for (let i = 0; i < timerange; i++) {
        component.buying.current.days.push(_.cloneDeep(day))
        component.buying.previous.days.push(_.cloneDeep(day))
        component.selling.current.days.push(_.cloneDeep(day))
        component.selling.previous.days.push(_.cloneDeep(day))
        component.combined.current.days.push(_.cloneDeep(day))
        component.combined.previous.days.push(_.cloneDeep(day))
      }

      // Add to result
      doc.components.push(component)
    })
  }

  /**
   * Main function: fetches item prices
   */
  async getPrices (timeNow, timerange, item) {
    // Get either pre-saved prices, or generate them if they don't exist
    for (let i = 1; i <= timerange * 2; i++) {
      const dayCursor = timeNow.subtract(i, 'days').startOf('day')
      let cursorResult = await this.db.collection('items_presaves').findOne({
        name: new RegExp('^' + item + '$', 'i'),
        createdAt: dayCursor
      })
      if (!cursorResult) {

      } else {

      }
    }
  }
}

module.exports = Prices
