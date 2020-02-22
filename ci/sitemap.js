process.env.NODE_ENV = 'production'
process.env.NEXUS_TARGET_NODE = 'ui-core'
process.env.NEXUS_STAGING = process.argv.includes('staging')
const fs = require('fs')
const mongodb = require('mongodb').MongoClient
const config = require(`${process.cwd()}/config/cubic/ui.js`)
const wfhooks = require(`${process.cwd()}/hooks/warframe.js`)
const wowhooks = require(`${process.cwd()}/hooks/wow-classic.js`)
if (process.env.DRONE) {
  config.api.mongoUrl = 'mongodb://mongodb'
  config.api.redisUrl = 'redis://redis'
  config.client = {
    disableSsr: true
  }
  config.webpack.skipBuild = true
}

class Sitemap {
  constructor () {
    this.sitemap = []
    this.sitemapCounter = 0
  }

  /**
   * Start sitemap generation
   */
  async generate () {
    const Cubic = require('cubic')

    // eslint-disable-next-line no-new
    new Cubic({ logLevel: 'silent', skipAuthCheck: true })

    // Load up UI node
    const Api = require('cubic-api')
    const Auth = require('cubic-auth')
    const Ui = require('cubic-ui')
    const apiConfig = require('../config/cubic/api.js')
    if (process.env.DRONE) apiConfig.mongoUrl = 'mongodb://mongodb'
    if (process.env.DRONE) apiConfig.redisUrl = 'redis://redis'
    const authConfig = process.env.DRONE ? {
      api: {
        mongoUrl: 'mongodb://mongodb',
        redisUrl: 'redis://redis'
      }
    } : {}
    await cubic.use(new Auth(authConfig))
    await cubic.use(new Api(apiConfig))
    await cubic.use(new Ui(config))
    await wfhooks.verifyItemList()
    console.log('* Verified warframe item list!')
    await wowhooks.verifyItemList()
    console.log('* Verified wow-classic item list!')
    await wowhooks.verifyServerList()
    console.log('* Verified wow-classic server list!')

    await this.generateStaticPages()
    await this.generateWarframePages()
    await this.generateWowClassicPages()

    if (this.sitemapCounter > 0) {
      fs.writeFileSync(`${cubic.config.ui.api.publicPath}/sitemap${this.sitemapCounter}.txt`, this.sitemap.join('\n'))
    }
    this.generateSitemapIndex()
    console.log(`* Saved ${this.sitemapCounter} sitemaps with ${this.sitemapCounter * 50000 + this.sitemap.length} entries.`)
  }

  /**
   * Generate static pages
   */
  async generateStaticPages () {
    for (const endpoint of cubic.nodes.ui.api.server.http.endpoints.endpoints) {
      if (!endpoint.route.includes('/:')) {
        this.pushToSitemap(`https://nexushub.co${endpoint.route}`)
      }
    }
  }

  /**
   * Generate warframe pages
   */
  async generateWarframePages () {
    const mongo = (await mongodb.connect(cubic.config.api.mongoUrl, { useNewUrlParser: true }))
      .db(cubic.config.api.mongoDb)
    const items = await mongo.collection('items').find().toArray()
    for (const item of items) {
      this.pushToSitemap(`https://nexushub.co${item.webUrl}`)
      if (item.tradable) this.pushToSitemap(`https://nexushub.co${item.webUrl}/prices`)
      if (item.tradable) this.pushToSitemap(`https://nexushub.co${item.webUrl}/trading`)
      if (item.patchlogs) this.pushToSitemap(`https://nexushub.co${item.webUrl}/patchlogs`)
    }
  }

  /**
   * Generate wow-classic pages
   */
  async generateWowClassicPages () {
    const mongoWow = (await mongodb.connect(cubic.config.api.mongoUrl, { useNewUrlParser: true }))
      .db(cubic.config.api.overrideEndpoint['/wow-classic'].mongoDb)
    const itemsWow = await mongoWow.collection('items').find().toArray()
    const servers = await mongoWow.collection('server').find().toArray()
    for (const server of servers) {
      this.pushToSitemap(`https://nexushub.co/wow-classic/${server.slug}`)
      for (const item of itemsWow) {
        this.pushToSitemap(`https://nexushub.co/wow-classic/items/${server.slug}/${item.itemId}`)
        this.pushToSitemap(`https://nexushub.co/wow-classic/items/${server.slug}/${item.itemId}/crafting`)
      }
    }
  }

  /**
   * Generates the main sitemap index file that points to each sitemap
   * For this trivial xml there is no need for a third party lib
   */
  generateSitemapIndex () {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for (let i = 0; i <= this.sitemapCounter; i++) {
      xml += `\t<sitemap><loc>https://nexushub.co/sitemap${i}.txt</loc></sitemap>\n`
    }
    xml += '</sitemapindex>'
    fs.writeFileSync(`${cubic.config.ui.api.publicPath}/sitemap.xml`, xml)
  }

  /**
   * Helper function to chunk sitemap automatically
   */
  pushToSitemap (value) {
    if (this.sitemap.length >= 50000) { // Max 50k entries per sitemap file
      fs.writeFileSync(`${cubic.config.ui.api.publicPath}/sitemap${this.sitemapCounter}.txt`, this.sitemap.join('\n'))
      this.sitemapCounter++
      this.sitemap = []
    }
    this.sitemap.push(value)
  }
}

const sitemap = new Sitemap()
sitemap.generate().then(() => process.exit())
