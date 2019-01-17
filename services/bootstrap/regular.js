const Api = require('cubic-api')
const Auth = require('cubic-auth')
const Ui = require('cubic-ui')
const wfhooks = require('../../hooks/warframe.js')
const config = {
  auth: require('../../config/cubic/auth.js'),
  ui: require('../../config/cubic/ui.js'),
  main: require('../../config/cubic/main.js'),
  warframe: require('../../config/cubic/warframe.js')
}

module.exports = async function () {
  // Auth server for verifying users
  await cubic.use(new Auth(config.auth))

  // View server for providing the web client
  cubic.use(new Ui(config.ui))

  // Main API setup. In development, this also covers all game-specific endpoints
  // since they'd occupy the same port otherwise. However, in production, they're
  // split into separate nodes for better scaling
  cubic.hook('main.api', wfhooks.verifyIndices)
  cubic.hook('main.api', wfhooks.verifyItemList.bind(wfhooks))
  await cubic.use(new Api(config.main.api))

  // Load services
  require('../../services/warframe/tradechat.js')
  require('../../services/warframe/opm.js')
}
