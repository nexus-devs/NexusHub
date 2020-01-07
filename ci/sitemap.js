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

async function generate () {
  const sitemap = []
  let sitemapCounter = 0
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

  // Create write stream. This is because the sitemap array runs out of memory eventually.
  // Deletion needed because write stream doesn't overwrite anymore
  if (fs.existsSync(`${cubic.config.ui.api.publicPath}/sitemap.txt`)) fs.unlinkSync(`${cubic.config.ui.api.publicPath}/sitemap.txt`)
  const stream = fs.createWriteStream(`${cubic.config.ui.api.publicPath}/sitemap.txt`, { flags: 'a' })

  // Generate static page sitemap
  for (const endpoint of cubic.nodes.ui.api.server.http.endpoints.endpoints) {
    if (!endpoint.route.includes('/:')) {
      sitemap.push(`https://nexushub.co${endpoint.route}`)
    }
  }

  // Generate warframe item pages
  const mongo = (await mongodb.connect(cubic.config.api.mongoUrl, { useNewUrlParser: true }))
    .db(cubic.config.api.mongoDb)
  const items = await mongo.collection('items').find().toArray()
  for (const item of items) {
    sitemap.push(`https://nexushub.co${item.webUrl}`)
    if (item.tradable) sitemap.push(`https://nexushub.co${item.webUrl}/prices`)
    if (item.tradable) sitemap.push(`https://nexushub.co${item.webUrl}/trading`)
    if (item.patchlogs) sitemap.push(`https://nexushub.co${item.webUrl}/patchlogs`)
  }

  sitemapCounter += writeSitemapToStream(stream, sitemap)

  // Generate wow-classic item and server pages
  const mongoWow = (await mongodb.connect(cubic.config.api.mongoUrl, { useNewUrlParser: true }))
    .db(cubic.config.api.overrideEndpoint['/wow-classic'].mongoDb)
  const itemsWow = await mongoWow.collection('items').find().toArray()
  const servers = await mongoWow.collection('server').find().toArray()
  for (const server of servers) {
    sitemap.push(`https://nexushub.co/wow-classic/${server.slug}`)
    for (const item of itemsWow) {
      sitemap.push(`https://nexushub.co/wow-classic/items/${server.slug}/${item.itemId}`)
      sitemap.push(`https://nexushub.co/wow-classic/items/${server.slug}/${item.itemId}/crafting`)
    }

    sitemapCounter += writeSitemapToStream(stream, sitemap)
  }

  // Save to file
  console.log(`* Saved sitemap with ${sitemapCounter} entries.`)
  stream.end()
}

// Helper function to write sitemap to stream, empty it and return the count
function writeSitemapToStream (stream, sitemap) {
  const count = sitemap.length
  stream.write(`${sitemap.join('\n')}\n`)
  sitemap.splice(0, count) // Empty array reference
  return count
}

generate().then(() => process.exit())
