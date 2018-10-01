process.env.NODE_ENV = 'production'
process.env.NEXUS_TARGET_NODE = 'ui-core'
process.env.NEXUS_STAGING = process.argv.includes('staging')

const fs = require('fs')
const mongodb = require('mongodb').MongoClient
const loader = require('cubic-loader')
const Ui = require('cubic-ui')
const Core = require('cubic-core')
const wfhooks = require(`${process.cwd()}/hooks/warframe.js`)
const ui = require(`${process.cwd()}/config/cubic/ui.js`)
const warframe = require(`${process.cwd()}/config/cubic/warframe.js`)
if (process.env.DRONE) {
  ui.api.disable = true
  ui.core.mongoUrl = warframe.core.mongoUrl = 'mongodb://mongodb'
  ui.core.redisUrl = warframe.core.redisUrl = 'redis://redis'
  ui.webpack.skipBuild = true
}

async function generate () {
  const sitemap = []
  loader({ logLevel: 'silent', skipAuthCheck: true })
  cubic.use(new Ui(ui))
  cubic.use(new Core(warframe.core))
  await wfhooks.verifyItemList()
  console.log('* Verified item list!')

  // Generate static page sitemap
  for (let endpoint of cubic.nodes.ui.core.client.endpointController.endpoints) {
    if (!endpoint.route.includes('/:')) {
      sitemap.push(`https://nexushub.co${endpoint.route}`)
    }
  }

  // Generate warframe item pages
  const mongo = (await mongodb.connect(cubic.config.warframe.core.mongoUrl)).db(cubic.config.warframe.core.mongoDb)
  const items = await mongo.collection('items').find().toArray()
  for (let item of items) {
    sitemap.push(`https://nexushub.co${item.webUrl}`)
    if (item.tradable) sitemap.push(`https://nexushub.co${item.webUrl}/prices`)
    if (item.tradable) sitemap.push(`https://nexushub.co${item.webUrl}/trading`)
    if (item.patchlogs) sitemap.push(`https://nexushub.co${item.webUrl}/patchlogs`)
  }

  // Save to file
  fs.writeFileSync(`${cubic.config.ui.core.publicPath}/sitemap.txt`, sitemap.join('\n'))
  console.log(`* Saved sitemap with ${sitemap.length} entries.`)
  process.exit()
}

generate()
