const mongodb = require('mongodb').MongoClient
const _ = require('lodash')

class Hook {
  /**
   * Ensure database indices are set up correctly
   */
  async verifyIndices () {
    cubic.log.verbose('Core      | verifying warframe indices')
    const config = cubic.config.api
    const db = await mongodb.connect(config.mongoUrl, { useNewUrlParser: true })
    const verify = async (db, col, index) => {
      return db.db(config.mongoDb).collection(col).createIndex(index)
    }

    // Order listings
    await verify(db, 'activeOrders', {
      item: 1
    })
    await verify(db, 'activeOrders', {
      item: 1,
      online: 1
    })
    await verify(db, 'activeOrders', {
      user: 1,
      item: 1,
      component: 1,
      offer: 1
    })

    // Prices
    await verify(db, 'orders', {
      item: 1,
      component: 1,
      createdAt: 1,
      price: 1
    })

    // OPM
    await verify(db, 'orders', {
      item: 1,
      createdAt: 1
    })
    await verify(db, 'orders', {
      createdAt: 1
    })

    // Aggregations
    await verify(db, 'ordersAggregation', {
      name: 1,
      createdAt: 1,
      scope: 1
    })

    // Item list
    await verify(db, 'items', {
      uniqueName: 1
    })
    await verify(db, 'items', {
      name: 1
    })
    await verify(db, 'items', {
      tradable: 1
    })

    // Users
    await verify(db, 'users', {
      name: 1
    })
    await db.close()
  }

  /**
   * Add item list on startup
   */
  async verifyItemList () {
    const Items = require('warframe-items')
    const config = cubic.config.api
    const url = config.mongoUrl
    const mongo = await mongodb.connect(url, { useNewUrlParser: true })
    const db = mongo.db(config.mongoDb)
    const items = new Items()
    const storedItems = (await db.collection('items').find().toArray()).map(({ _id, ...props }) => props) // avoid mutating _id on update
    const parallel = []

    for (const item of items) {
      const stored = storedItems.find(i => i.uniqueName === item.uniqueName)

      parallel.push(this.separatePatchlogs(item, db))
      this.addItemSet(item)
      this.addItemUrl(item)
      if (item.tradable) this.addEconomyData(item, stored)

      if (!_.isEqual(stored, item)) {
        parallel.push(db.collection('items').updateMany({
          uniqueName: item.uniqueName
        }, {
          $set: _.merge(stored || {}, item)
        }, {
          upsert: true
        }))
      }
    }

    await Promise.all(parallel)
    await mongo.close()
  }

  /**
   * Remove patchlogs from items. We'll query them separately to reduce traffic.
   */
  async separatePatchlogs (item, db) {
    delete item.patchlogs
  }

  /**
   * Add item set as separate component, makes things easier to work with.
   */
  addItemSet (item) {
    const set = {
      name: 'Set'
    }

    set.uniqueName = item.uniqueName
    if (item.tradable) set.tradable = true
    if (item.drops) set.drops = item.drops
    if (item.components && item.components[0].ducats) {
      let ducats = 0

      for (const component of item.components) {
        ducats += component.ducats ? component.ducats : 0
      }
      set.ducats = ducats
    }
    if (item.components) {
      item.components.unshift(set)
    } else {
      item.components = [set]
    }
  }

  /**
   * Useful links, especially necessary on list view where only limited amounts
   * of data are displayed.
   */
  addItemUrl (item) {
    item.apiUrl = `/warframe/v1/items/${encodeURIComponent(item.name)}`
    item.webUrl = `/warframe/items/${item.name.split(' ').join('-').toLowerCase()}`
    item.imgUrl = `/img/warframe/items/${item.imageName}`

    for (const component of item.components) {
      component.imgUrl = component.imageName ? `/img/warframe/items/${component.imageName}` : item.imgUrl
      delete component.imageName
    }
    if (item.abilities) {
      for (const ability of item.abilities) {
        ability.imgUrl = '/img/placeholder.svg'
      }
    }
    delete item.imageName
  }

  /**
   * Add economy data defaults
   */
  addEconomyData (item, stored) {
    for (const component of item.components) {
      const economyData = {
        orders: 0,
        min: null,
        max: null,
        median: null
      }
      const fullData = {
        ...economyData,
        ...{
          days: new Array(7).fill(economyData),
          hours: []
        }
      }

      // Skip if data is already present
      if (stored) {
        const storedComponent = stored.components.find(c => c.name === component.name)
        if (storedComponent && storedComponent.prices) {
          continue
        }
      }
      component.prices = {}
      component.prices.selling = component.prices.buying = {
        current: fullData,
        previous: fullData
      }
    }
  }
}

module.exports = new Hook()
