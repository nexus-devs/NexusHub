const _ = require('lodash')
const request = require("request-promise")
const cheerio = require('cheerio')
const minify = require('imagemin')
const minifyPng = require('imagemin-pngquant')
const chalk = require('chalk')
const queue = require("async-delay-queue")
const fs = require('fs')
const Progress = require('progress')
const additional = require('../config/additional.json')
const exceptions = require('../config/exceptions.json')
const dropChancesBaseUrl = 'https://raw.githubusercontent.com/WFCD/warframe-drop-data/gh-pages'
const marketBaseUrl = "https://api.warframe.market/v1"
const timeout = (fn, s) => queue.delay(fn, 'push', 50)

class Scraper {
  constructor() {
    this.scraped = []
    this.doFetchMarketData = true
  }

  /**
   * Gather List of items and run through each of them
   */
  async getItems() {
    const dropChances = JSON.parse(await request.get(dropChancesBaseUrl + '/data/all.json'))
    const marketData = JSON.parse(await request.get(marketBaseUrl + "/items"))
    const items = marketData.payload.items.en

    // Only scrape the warframe.market API if we specify we it to. This takes a
    // few minutes, so it's recommended to disable it while developing
    if (this.doFetchMarketData) {
      console.log('Fetching items from warframe.market...')
      const progress = new Progress('[:bar]', {
        total: items.length,
        width: 40,
        complete: '█',
        incomplete: ' '
      })

      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const url = item.url_name

        await this.getItemData(url, i)
        progress.tick()
      }

      // Save scraped data separately so we can lazily load it when we don't wanna refetch all data
      fs.writeFileSync(__dirname + '/../data/scraped.json', JSON.stringify(this.scraped, null, 2), 'utf-8')
    }

    // Take pre-scraped data instead
    else {
      this.scraped = require('../data/scraped.json')
    }

    // Merge with base data (non-scraped)
    let data = this.merge(additional, this.scraped)

    // Get drop chances for each component
    this.applyDropChances(data, dropChances)

    // Drop chances may hold relic information that we don't have scraped
    data = data.concat(this.backfillRelics(data, dropChances))

    // Add relevant links to each item
    data = this.addURLs(data)

    // Write to disk
    fs.writeFileSync(__dirname + "/../data/merged.json", JSON.stringify(data, null, 2), "utf-8")
  }

  /**
   * Actual data scraping
   */
  async getItemData(url, mult) {
    const targetUrl = marketBaseUrl + '/items/' + url.replace('’', '%E2%80%99')
    let item

    try {
      item = await queue.delay(() => request.get(targetUrl, 'push', 50))
    } catch (err) {
      return this.getItemData(url, mult)
    }

    if (!item.includes('[404]')) {
      if (!this.isAdded(url, this.scraped)) {
        const itemSet = JSON.parse(item).payload.item.items_in_set

        let parsed = {}
        parsed.name = this.getItemName(itemSet)
        parsed.type = this.getItemType(itemSet)
        parsed.ranks = this.getItemMaxRank(itemSet)
        parsed.description = this.getItemDescription(itemSet)
        parsed.components = this.getItemComponents(itemSet, parsed.name)
        this.saveItemImage(itemSet, parsed.name)
        this.scraped.push(parsed)
      }
    }
  }

  /**
   * Check if an item with including this name has already been scraped.
   * Warframe.market stores all components as individual objects whereas
   * we store them in the item's component array
   */
  isAdded(itemname, dataset) {
    itemname = itemname.toLowerCase();
    for (let i = 0; i < dataset.length; i++) {
      if (itemname.replace(/_/g, ' ').includes(dataset[i].name.toLowerCase())) {
        return true
      }
    }
    return false
  }

  /**
   * Find item name by checking for consistent string among all components
   * Nikana Blade, Nikana Hilt, Nikana Blueprint -> Nikana
   */
  getItemName(itemSet) {
    let name = itemSet[0].en.item_name
    let names = []

    itemSet.forEach(item => {
      names.push(item.en.item_name)
    })
    names.forEach(subname => {
      let matched = []
      for (let i = 0; i < subname.length; i++) {
        if (subname[i] === name[i]) {
          matched.push(subname[i])
        } else {
          break
        }
      }
      name = matched.join("").replace(/\s+$/g,'')
    })
    return name
  }

  /**
   * Retrieve intersection of elements in each component's tag array.
   * [prime, blade], [prime, hilt], [prime, blueprint] -> [prime]
   */
  getItemType(itemSet) {
    let tags = itemSet[0].tags
    let name = itemSet[0].en.item_name.toLowerCase()

    // Expect all primes to have 'Prime' in their name
    if (name.includes('prime') && !name.includes('primed')) {
      return 'Prime'
    }

    for (let i = 1; i < itemSet.length; i++) {
      tags = tags.filter(tag => itemSet[i].tags.includes(tag))
    }

    // Remove 'parts' tag, because it's pretty damn useless
    let index = tags.indexOf('parts')
    if (index > -1) {
      tags.splice(index, 1)
    }
    let result = tags[0]

    // Capitalize output or log warning if nothing was found
    if (result) {
      result = result.replace(/([^a-z]|^)([a-z])(?=[a-z]{2})/g, (_, g1, g2) => g1 + g2.toUpperCase())
    } else {
      console.log(`:: ${chalk.yellow('WARN')}: Could not find item type for ${itemSet[0].en.item_name} -> assigning 'Misc'`)
      result = 'Misc'
    }
    return result
  }

  getItemComponents(itemSet, itemName) {
    let components = []

    itemSet.forEach(item => {
      let componentName = item.en.item_name.replace(itemName, '')
      componentName = componentName.startsWith(' ') ? componentName.slice(1) : componentName

      components.push({
        name: componentName ? componentName : 'Set',
        ducats: item.ducats || 0,
        drop: []
      })
    })

    // Add ducats to Set
    const set = components.findIndex(c => c.name.toLowerCase() === 'set')
    components.forEach((c, i) => {
      components[set].ducats += i !== set ? c.ducats : 0
    })

    return components.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })
  }

  getItemMaxRank(itemSet) {
    let ranks = []

    itemSet.forEach(item => {
      if (item.tags.includes('mod')) {
        ranks.push(item.mod_max_rank)
      }
    })
    return ranks[0]
  }

  getItemDescription(itemSet) {
    let descriptions = []

    itemSet.forEach(item => {
      if (!(item.tags.includes('prime') && item.tags.includes('parts'))) {
        descriptions.push(item.en.description.replace('</p><p>', '. ').replace(/<[^>]*>/g, ''))
      }
    })
    return descriptions[0]
  }

  /**
   * Apply drop chances to each component in given dataset
   */
  applyDropChances(data, dropChances) {
    console.log('\nFetching items from warframe.market...')
    const progress = new Progress('[:bar]', {
      total: data.length,
      width: 40,
      complete: '█',
      incomplete: ' '
    })

    data.forEach((item, i) => {
      item.components.forEach((component, j) => {

        // Multi-component items
        if (item.components.length > 1 && component.name !== 'Set') {
          data[i].components[j].drop = this.findDropLocations(`${item.name} ${component.name}`, dropChances)
          if (!data[i].components[j].drop.length) {
            console.log(`:: ${chalk.yellow('WARN')}: Could not find drop chances for ${item.name} ${component.name}`)
          }
        }

        // Single component items
        if (item.components.length <= 1) {
          data[i].components[j].drop = this.findDropLocations(item.name.replace(' Intact', ' Relic')
                                                                       .replace(' Exceptional', ' Relic')
                                                                       .replace(' Flawless', ' Relic')
                                                                       .replace(' Radiant', ' Relic'), dropChances)
          if (!data[i].components[j].drop.length) {
            console.log(`:: ${chalk.yellow('WARN')}: Could not find drop chances for ${item.name} ${component.name}`)
          }
        }
      })
      progress.tick()
    })
  }

  /**
   * Take drop locations and chances from the official drop chance tables
   */
  findDropLocations(component, dropChances) {
    let result = []
    let dropLocations = []

    this.findDropRecursive(component, dropChances, dropLocations, '')

    // The find function returns an array of mentions with their respective paths.
    // So because I'm lazy and don't want to directly implement it into the
    // recursion, we'll gather the info "around" the found key here.
    dropLocations.forEach(location => {
      const path = location.path.replace(/\[/g, '').replace(/\]/g, ' ').split(' ')
      const dropData = dropChances[path[0]][path[1]]
      const drop = {
        location: '',
        type: path[0].replace(/([a-z](?=[A-Z]))/g, '$1 '), // Regex transforms camelCase to normal words
        rarity: location.drop.rarity,
        chance: location.drop.chance * 0.01
      }
      // Capitalize drop type
      drop.type = drop.type[0].toUpperCase() + drop.type.slice(1)

      // First few Properties of the first object form the drop location name
      for (let prop in dropData) {
        if (typeof dropData[prop] === 'string' && prop !== '_id') {
          drop.location += dropData[prop] + ' '
        }
      }

      // Remove trailing space from location
      drop.location = drop.location.slice(0, -1)
      result.push(drop)
    })
    return result
  }

  /**
   * Helper function for recursive object detection
   */
  findDropRecursive(target, child, locations, path) {
    if (typeof child === 'object') {
      for (let prop in child) {
        const nextPath = `${path}[${prop}]`
        const found = this.findDropRecursive(target, child[prop], locations, nextPath)
        found ? locations.push({
          path: nextPath,
          drop: child
        }) : 0
      }
    }

    // String ? check if it's the component we want
    else if (typeof child === 'string') {
      return child === target || child === target + ' Blueprint' ? child : null
    }
  }

  /**
   * The drop chances may contain more relics than we got through scraping, so
   * we should backfill those as well
   */
  backfillRelics(items, dropChances) {
    const results = []

    // First pass, gather relics unless duplicates
    items.forEach(item => {
      item.components.forEach(component => {
        component.drop.forEach(drop => {
          if (drop.type === 'Relics' &&
              !results.find(r => r.name === drop.location) &&
              !items.find(i => i.name.includes(drop.location.replace(/\s(\w+)$/, '').slice(0, -1)))) {
            results.push({
              name: drop.location,
              type: 'Void Relic',
              description: 'Void Relics are Orokin objects that can be opened to reveal valuable treasure enclosed within by completing Void Fissure missions. They are the principal means of acquiring Prime and Forma Blueprints.',
              components: [
                {
                  name: 'Set',
                  ducats: 0,
                  drop: []
                }
              ]
            })
          }
        })
      })
    })

    // Second pass, get drop locations for relics themselves
    this.applyDropChances(results, dropChances)

    // Merge with original
    return results
  }

  /**
   * Get item image by scraping the wikia page. Then minify and save in /assets/
   * We detect the link to the item image through HTML scraping.
   */
  async saveItemImage(itemSet, itemName) {
    const url = itemSet[0].en.wiki_link
    const path = './assets/img/warframe/items/' // relative to cwd

    // The wikia isn't exactly reliable, so we might get a bunch of connection issues here
    try {
      const html = await request(url)
      const $ = cheerio.load(html)
      let image = $('#mw-content-text aside img').first()
      let imageUrl = image.attr('data-src') || image.attr('src')

      // Some images are in a floatright el, not in an aside box (e.g. scimitar)
      if (!imageUrl) {
        image = $("#mw-content-text .floatright img").first()
        imageUrl = image.attr('data-src') || image.attr('src')
      }

      // Exception handling
      if (!imageUrl) {
        exceptions.forEach(exception => {
          if (new RegExp("\\b" + exception.name + "\\b").test(itemName.toLowerCase())) {
            imageUrl = exception.url
          }
        })
      }

      // Still no Image URL? -> Print warning to have it looked up
      if (!imageUrl) {
        imageUrl = `https://warframe.market/static/assets/${itemSet[0].icon}`
      } else {
        imageUrl = imageUrl.split('.png')[0] + '.png' // Modify URL to get full size version
      }

      // Save image in /assets/
      request.head(imageUrl, (err, res, body) => {
        request(imageUrl).pipe(fs.createWriteStream(path + itemName.toLowerCase().replace(/ /g, '-') + ".png"))
          .on('close', () => {
            minify([path + itemName.toLowerCase().replace(/ /g, '-') + ".png"], path, {
              plugins: [
                minifyPng({
                  quality: '20-40'
                })
              ]
            })
          })
      })
    }

    // 404, timeouts, etc
    catch (err) {}
  }

  /**
   * Merge existing data with scraped one
   */
  merge(base, scraped) {
    let result = []

    // First merge existing data with scraped
    base.forEach((item, i) => {
      let index = scraped.findIndex(d => d.name === item.name)

      if (index > -1) {
        base[i] = Object.assign(item, scraped[index])
      }
    })
    result = result.concat(base)

    // Then add items that aren't included in base
    scraped.forEach(item => {
      let index = base.findIndex(d => d.name === item.name)

      if (index < 0) {
        result.push(item)
      }
    })

    return result
  }

  /**
   * Add important URL links like images or web page location
   */
  addURLs(data) {
    let result = []

    data.forEach(item => {
      // Components
      item.components.forEach(component => {
        component.imgUrl = `/img/warframe/items/${component.name === 'Set' ? item.name.split(" ").join("-").toLowerCase() : component.name.split(" ").join("-").toLowerCase()}.png`
      })
      // Item Root
      result.push(Object.assign(item, {
        apiUrl: `/warframe/v1/items/${item.name.split(" ").join("%20")}`,
        webUrl: `/warframe/items/${item.name.split(" ").join("-").toLowerCase()}`,
        imgUrl: `/img/warframe/items/${item.name.split(" ").join("-").toLowerCase()}.png`,
      }))
    })

    return result
  }
}
module.exports = new Scraper()
