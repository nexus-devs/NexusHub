const mongodb = require('mongodb').MongoClient
const Items = require('warframe-items')
const _ = require('lodash')

class Hook {
  /**
   * Ensure database indices are set up correctly
   */
  async verifyIndices () {
    cubic.log.verbose('Core      | verifying warframe indices')
    const db = await mongodb.connect(cubic.config.warframe.core.mongoUrl)
    const verify = async (db, col, index) => {
      return db.db(cubic.config.warframe.core.mongoDb).collection(col).createIndex(index)
    }

    await verify(db, 'activeOrders', {
      item: 1
    })
    await verify(db, 'orders', {
      item: 1,
      component: 1,
      createdAt: 1,
      price: 1
    })
    await verify(db, 'orders', {
      item: 1,
      createdAt: 1
    })
    await verify(db, 'orders', {
      createdAt: 1
    })
    await verify(db, 'ordersAggregation', {
      name: 1,
      createdAt: 1,
      scope: 1
    })
    await verify(db, 'items', {
      name: 1
    })
    await verify(db, 'users', {
      name: 1
    })
    db.close()
  }

  /**
   * Add item list on startup
   */
  async verifyItemList () {
    const url = cubic.config.warframe.core.mongoUrl
    const mongo = await mongodb.connect(url)
    const db = mongo.db(cubic.config.warframe.core.mongoDb)
    const items = new Items()
    const storedItems = await db.collection('items').find().toArray()
    const parallel = []

    for (let item of items) {
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
    mongo.close()
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

      for (let component of item.components) {
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

    for (let component of item.components) {
      component.imgUrl = component.imageName ? `/img/warframe/items/${component.imageName}` : item.imgUrl
      delete component.imageName
    }
    if (item.abilities) {
      for (let ability of item.abilities) {
        ability.imgUrl = '/img/placeholder.svg'
      }
    }
    delete item.imageName
  }

  /**
   * Add economy data defaults
   */
  addEconomyData (item, stored) {
    for (let component of item.components) {
      const economyData = {
        median: null,
        min: null,
        max: null,
        orders: null
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
        current: economyData,
        previous: economyData
      }
    }
  }
}

module.exports = new Hook()
