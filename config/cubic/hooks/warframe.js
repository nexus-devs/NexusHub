const fs = require('fs-extra')
const mongodb = require('mongodb').MongoClient
const Items = require('warframe-items')
const items = new Items()
const _ = require('lodash')

class Hook {
  /**
   * Add item list on startup
   */
  async verifyItemList () {
    const url = cubic.config.warframe.core.mongoUrl
    const db = await mongodb.connect(url)

    for (let item of items) {
      if (item.tradable) {
        const stored = await db.db(cubic.config.warframe.core.mongoDb).collection('items').findOne({
          uniqueName: item.uniqueName
        })

        this.addItemSet(item)
        this.addItemUrl(item)
        this.addEconomyData(item, stored)
        if (!stored) {
          this.copyImage(item)
        }
        delete item.imageName

        if (!_.isEqual(stored, item)) {
          await db.db(cubic.config.warframe.core.mongoDb).collection('items').update({
            uniqueName: item.uniqueName
          }, {
            $set: _.merge(stored || {}, item)
          }, {
            upsert: true
          })
        }
      }
    }
    db.close()
  }

  /**
   * Add item set as separate component, makes things easier to work with.
   */
  addItemSet (item) {
    const set = { name: 'Set' }

    if (item.drops) set.drops = item.drops
    if (item.components && item.name.includes('Prime')) {
      let ducats = 0

      for (let component of item.components) {
        ducats += component.ducats
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
      component.apiUrl = `/warframe/v1/items/${encodeURIComponent(item.name)}`
      component.webUrl = `/warframe/items/${item.name.split(' ').join('-').toLowerCase()}`
      component.imgUrl = component.name === 'Set' ? item.imgUrl : `/img/warframe/items/${component.name.split(' ').join('-').toLowerCase()}.png`
    }
    if (item.abilities) {
      for (let ability of item.abilities) {
        ability.imgUrl = '/img/placeholder.svg'
      }
    }
  }

  /**
   * Add economy data defaults
   */
  addEconomyData (item, stored) {
    function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    for (let component of item.components) {
      const current = {
        median: r(20, 300),
        min: r(5, 20),
        max: r(300, 500),
        offers: r(500, 8000)
      }
      const previous = {
        median: r(20, 300),
        min: r(5, 20),
        max: r(300, 500),
        offers: r(500, 8000)
      }
      if (stored) {
        const storedComponent = stored.components.find(c => c.name === component.name)
        if (storedComponent && storedComponent.selling && storedComponent.buying) {
          continue
        }
      }
      // component.selling = component.buying = economyData
      component.selling = component.buying = { current, previous }
    }
  }

  /**
   * The warframe-items package comes with pre-rendered images
   */
  async copyImage (item) {
    const original = `${process.cwd()}/node_modules/warframe-items/data/img/${item.imageName}`
    const target = `${process.cwd()}/assets${item.imgUrl}`

    if (!await fs.pathExists(target)) {
      await fs.copy(original, target)
    }
  }

  async verifyIndices () {
    cubic.log.verbose('Core      | verifying warframe indices')
    const db = await mongodb.connect(cubic.config.warframe.core.mongoUrl)
    const verify = async (db, col, index) => {
      return db.db(cubic.config.warframe.core.mongoDb).collection(col).createIndex(index)
    }

    verify(db, 'requests', {
      item: 1,
      createdAt: 1
    })
    verify(db, 'requests', {
      item: 1,
      createdAt: 1,
      region: 1,
      rank: 1
    })
    db.close()
  }
}

module.exports = new Hook()
