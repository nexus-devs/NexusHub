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
    const now = moment()

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
    await this.getPrices(doc, now, timerange, itemResult)

    res.send(doc)
  }

  /**
   * Generates the response document
   */
  generateDocument (item, timerange) {
    let doc = { // Main document
      name: item.name,
      components: []
    }

    this.generateComponents(doc, item, timerange)
    return doc
  }

  /**
   * Generates the components to a corresponding item
   */
  generateComponents (doc, item, timerange) {
    item.components.forEach(comp => {
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
  async getPrices (doc, now, timerange, item) {
    // Get either pre-saved day prices, or generate them if they don't exist
    for (let i = 1; i < timerange * 2; i++) {
      const dayCursor = now.clone().subtract(i, 'days').startOf('day')
      let cursorResult = await this.db.collection('orderHistorySaves').findOne({
        name: item.name,
        type: 'day',
        createdAt: dayCursor.toDate()
      })
      if (!cursorResult) {
        cursorResult = { name: item.name, type: 'day', components: [], createdAt: dayCursor.toDate() }

        // Aggregate and save into block
        for (let c of doc.components) {
          const data = {
            median: null,
            min: null,
            max: null,
            offers: null
          }
          const position = cursorResult.components.push({
            name: c.name,
            buying: _.cloneDeep(data),
            selling: _.cloneDeep(data),
            combined: _.cloneDeep(data)
          })

          const comp = cursorResult.components[position - 1]

          const medianQuery = {
            item: item.name,
            component: c.name,
            createdAt: { $gte: dayCursor.toDate(), $lt: dayCursor.clone().add(1, 'days').toDate() },
            price: { $ne: null }
          }
          const median = await this.getMedian(medianQuery)
          const medianBuying = await this.getMedian(Object.assign({ offer: 'Buying' }, medianQuery))
          const medianSelling = await this.getMedian(Object.assign({ offer: 'Selling' }, medianQuery))
          comp.combined.median = median

          let aggregation = await this.db.collection('orderHistory').aggregate([
            { $match: {
              item: item.name,
              component: c.name,
              createdAt: { $gte: dayCursor.toDate(), $lt: dayCursor.clone().add(1, 'days').toDate() },
              price: { $gte: median * 0.3, $lte: median * 3 }
            } },
            { $group: { _id: '$offer', offers: { $sum: 1 }, min: { $min: '$price' }, max: { $max: '$price' } } }
          ]).toArray()

          // TODO: for the love of god, put this in a function
          let buying = _.find(aggregation, x => x._id === 'Buying')
          if (buying) {
            if (buying.min < comp.buying.min || !comp.buying.min) comp.buying.min = buying.min
            if (buying.max > comp.buying.max || !comp.buying.max) comp.buying.max = buying.max
            comp.buying.offers += buying.offers
            comp.buying.median = medianBuying
            if (buying.min < comp.combined.min || !comp.combined.min) comp.combined.min = buying.min
            if (buying.max > comp.combined.max || !comp.combined.max) comp.combined.max = buying.max
            comp.combined.offers += buying.offers
          }

          let selling = _.find(aggregation, x => x._id === 'Selling')
          if (selling) {
            if (selling.min < comp.selling.min || !comp.selling.min) comp.selling.min = selling.min
            if (selling.max > comp.selling.max || !comp.selling.max) comp.selling.max = selling.max
            comp.selling.offers += selling.offers
            comp.selling.median = medianSelling
            if (selling.min < comp.combined.min || !comp.combined.min) comp.combined.min = selling.min
            if (selling.max > comp.combined.max || !comp.combined.max) comp.combined.max = selling.max
            comp.combined.offers += selling.offers
          }
        }

        // Delete all pre-saved hours and save day
        await this.db.collection('orderHistorySaves').insertOne(cursorResult)
        this.db.collection('orderHistorySaves').remove({
          type: 'hour',
          createdAt: { $gte: dayCursor.toDate(), $lt: dayCursor.clone().add(1, 'days').toDate() }
        })
      }

      // Transfer from pre-saved day
      for (let preComp of cursorResult.components) {
        let comp = _.find(doc.components, x => x.name === preComp.name) // Get corresponding component in doc
        if (i < timerange) {
          // Current week
          comp.buying.current.days[i] = preComp.buying
          comp.selling.current.days[i] = preComp.selling
          comp.combined.current.days[i] = preComp.combined
        } else {
          // Previous week
          const previousDay = i % timerange
          comp.buying.previous.days[previousDay] = preComp.buying
          comp.selling.previous.days[previousDay] = preComp.selling
          comp.combined.previous.days[previousDay] = preComp.combined
        }
      }
    }

    // Get either pre-saved hour prices for the current day, or generate them if they don't exist
    const startOfDay = now.clone().startOf('day')
    for (let i = 0; startOfDay.clone().add(i, 'hours').isBefore(moment(now).startOf('hour')); i++) {
      const hourCursor = startOfDay.clone().add(i, 'hours')
      let cursorResult = await this.db.collection('orderHistorySaves').findOne({
        name: item.name,
        type: 'hour',
        createdAt: hourCursor.toDate()
      })

      if (!cursorResult) {
        cursorResult = { name: item.name, type: 'hour', components: [], createdAt: hourCursor.toDate() }

        // Aggregate and save into block
        for (let c of doc.components) {
          const data = {
            min: null,
            max: null,
            offers: null
          }
          const position = cursorResult.components.push({
            name: c.name,
            buying: _.cloneDeep(data),
            selling: _.cloneDeep(data),
            combined: _.cloneDeep(data)
          })

          const comp = cursorResult.components[position - 1]

          // Get median for the last 24 hours
          const medianQuery = {
            item: item.name,
            component: comp.name,
            createdAt: { $gte: now.clone().subtract(24, 'hours').toDate() },
            price: { $ne: null }
          }
          const median = await this.getMedian(medianQuery)

          let aggregation = await this.db.collection('orderHistory').aggregate([
            { $match: {
              item: item.name,
              component: c.name,
              createdAt: { $gte: hourCursor.toDate(), $lt: hourCursor.clone().add(1, 'hours').toDate() },
              price: { $gte: median * 0.3, $lte: median * 3 }
            } },
            { $group: { _id: '$offer', offers: { $sum: 1 }, min: { $min: '$price' }, max: { $max: '$price' } } }
          ]).toArray()

          // TODO: for the love of god, put this in a function
          let buying = _.find(aggregation, x => x._id === 'Buying')
          if (buying) {
            if (buying.min < comp.buying.min || !comp.buying.min) comp.buying.min = buying.min
            if (buying.max > comp.buying.max || !comp.buying.max) comp.buying.max = buying.max
            comp.buying.offers = buying.offers
            if (buying.min < comp.combined.min || !comp.combined.min) comp.combined.min = buying.min
            if (buying.max > comp.combined.max || !comp.combined.max) comp.combined.max = buying.max
            comp.combined.offers = buying.offers
          }

          let selling = _.find(aggregation, x => x._id === 'Selling')
          if (selling) {
            if (selling.min < comp.selling.min || !comp.selling.min) comp.selling.min = selling.min
            if (selling.max > comp.selling.max || !comp.selling.max) comp.selling.max = selling.max
            comp.selling.offers = selling.offers
            if (selling.min < comp.combined.min || !comp.combined.min) comp.combined.min = selling.min
            if (selling.max > comp.combined.max || !comp.combined.max) comp.combined.max = selling.max
            comp.combined.offers = selling.offers
          }
        }

        await this.db.collection('orderHistorySaves').insertOne(cursorResult)
      }

      // Transfer from pre-saved hour
      // No median here, it gets set on the current hour requests later
      for (let preComp of cursorResult.components) {
        let comp = _.find(doc.components, x => x.name === preComp.name) // Get corresponding component in doc
        // TODO: Put this in own function / make prettier
        comp.buying.current.days[0].offers += preComp.buying.offers
        if (preComp.buying.min < comp.buying.current.days[0].min || !comp.buying.current.days[0].min) comp.buying.current.days[0].min = preComp.buying.min
        if (preComp.buying.max > comp.buying.current.days[0].max || !comp.buying.current.days[0].max) comp.buying.current.days[0].max = preComp.buying.max
        comp.selling.current.days[0].offers += preComp.selling.offers
        if (preComp.selling.min < comp.selling.current.days[0].min || !comp.selling.current.days[0].min) comp.selling.current.days[0].min = preComp.selling.min
        if (preComp.selling.max > comp.selling.current.days[0].max || !comp.selling.current.days[0].max) comp.selling.current.days[0].max = preComp.selling.max
        comp.combined.current.days[0].offers += preComp.combined.offers
        if (preComp.combined.min < comp.combined.current.days[0].min || !comp.combined.current.days[0].min) comp.combined.current.days[0].min = preComp.combined.min
        if (preComp.combined.max > comp.combined.current.days[0].max || !comp.combined.current.days[0].max) comp.combined.current.days[0].max = preComp.combined.max
      }
    }

    // Gets current hour results
    for (let comp of doc.components) {
      // Get median for the last 24 hours
      const medianQuery = {
        item: item.name,
        component: comp.name,
        createdAt: { $gte: now.clone().subtract(24, 'hours').toDate() },
        price: { $ne: null }
      }
      const median = await this.getMedian(medianQuery)
      const medianBuying = await this.getMedian(Object.assign({ offer: 'Buying' }, medianQuery))
      const medianSelling = await this.getMedian(Object.assign({ offer: 'Selling' }, medianQuery))

      let aggregation = await this.db.collection('orderHistory').aggregate([
        { $match: {
          item: item.name,
          component: comp.name,
          createdAt: { $gte: now.clone().startOf('hour').toDate() },
          price: { $gte: median * 0.3, $lte: median * 3 }
        } },
        { $group: { _id: '$offer', offers: { $sum: 1 }, min: { $min: '$price' }, max: { $max: '$price' } } }
      ]).toArray()

      comp.combined.current.days[0].median += median
      comp.buying.current.days[0].median += medianBuying
      comp.selling.current.days[0].median += medianSelling

      // TODO: for the love of god, put this in a function
      let buying = _.find(aggregation, x => x._id === 'Buying')
      if (buying) {
        if (buying.min < comp.buying.current.days[0].min || !comp.buying.current.days[0].min) comp.buying.current.days[0].min = buying.min
        if (buying.max > comp.buying.current.days[0].max || !comp.buying.current.days[0].max) comp.buying.current.days[0].max = buying.max
        comp.buying.current.days[0].offers += buying.offers
        if (buying.min < comp.combined.current.days[0].min || !comp.combined.current.days[0].min) comp.combined.current.days[0].min = buying.min
        if (buying.max > comp.combined.current.days[0].max || !comp.combined.current.days[0].max) comp.combined.current.days[0].max = buying.max
        comp.combined.current.days[0].offers += buying.offers
      }

      let selling = _.find(aggregation, x => x._id === 'Selling')
      if (selling) {
        if (selling.min < comp.selling.current.days[0].min || !comp.selling.current.days[0].min) comp.selling.current.days[0].min = selling.min
        if (selling.max > comp.selling.current.days[0].max || !comp.selling.current.days[0].max) comp.selling.current.days[0].max = selling.max
        comp.selling.current.days[0].offers += selling.offers
        if (selling.min < comp.combined.current.days[0].min || !comp.combined.current.days[0].min) comp.combined.current.days[0].min = selling.min
        if (selling.max > comp.combined.current.days[0].max || !comp.combined.current.days[0].max) comp.combined.current.days[0].max = selling.max
        comp.combined.current.days[0].offers += selling.offers
      }
    }
  }

  // Gets the median from a given query
  async getMedian (query) {
    const count = await this.db.collection('orderHistory').find(query).count()
    if (count === 0) return null
    else {
      const medianOffer = await this.db.collection('orderHistory').find(query).sort({'price': 1}).skip(count / 2 - 1).limit(1).toArray()
      return medianOffer[0].price
    }
  }
}

module.exports = Prices
