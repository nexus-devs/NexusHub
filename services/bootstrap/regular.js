const Api = require('cubic-api')
const Core = require('cubic-core')
const Auth = require('cubic-auth')
const Ui = require('cubic-ui')
const wfhooks = require('../../hooks/warframe.js')
const mongodb = require('mongodb').MongoClient
const bcrypt = require('bcryptjs')
const config = {
  auth: require('../../config/cubic/auth.js'),
  ui: require('../../config/cubic/ui.js'),
  main: require('../../config/cubic/main.js'),
  warframe: require('../../config/cubic/warframe.js')
}

module.exports = async function () {
  // Auth server for verifying users
  cubic.use(new Auth(config.auth))

  // View server for providing the web client
  cubic.use(new Ui(config.ui))

  // Main API setup. Used for 'global' endpoints not specific to any game.
  // Core nodes of other games will still connect to this API server though.
  cubic.use(new Core(config.main.core))
  cubic.use(new Api(config.main.api))

  // Warframe Core node
  cubic.hook('warframe.core', wfhooks.verifyIndices)
  cubic.hook('warframe.core', wfhooks.verifyItemList.bind(wfhooks))
  await cubic.use(new Core(config.warframe.core))

  // Generate service users (Remember this file only runs in dev environments)
  const mongo = await mongodb.connect(cubic.config.auth.core.mongoUrl)
  const db = mongo.db('nexus-auth')
  await db.collection('users').updateOne({
    user_key: 'nexus-warframe-bot'
  }, {
    $set: {
      user_id: 'nexus-warframe-bot',
      user_key: 'nexus-warframe-bot',
      user_secret: await bcrypt.hash('dev-only', 1),
      last_ip: [],
      scope: 'write_orders_warframe'
    }
  }, {
    upsert: true
  })

  // Load services
  require('../../services/warframe/tradechat.js')
  // require('../../services/warframe/warframe.market.js')
}
