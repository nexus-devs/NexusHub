module.exports = async function () {
  const Api = require('cubic-api')
  const Auth = require('cubic-auth')
  const Ui = require('cubic-ui')
  const wfhooks = require('../../hooks/warframe.js')
  const wowhooks = require('../../hooks/wow-classic.js')
  const config = {
    auth: require('../../config/cubic/auth.js'),
    ui: require('../../config/cubic/ui.js'),
    api: require('../../config/cubic/api.js')
  }

  // Auth server for verifying users
  await cubic.use(new Auth(config.auth))

  // View server for providing the web client
  cubic.use(new Ui(config.ui))

  // Main API setup. In development, this also covers all game-specific endpoints
  // since they'd occupy the same port otherwise. However, in production, they're
  // split into separate nodes for better scaling
  cubic.hook(Api, wfhooks.verifyIndices)
  cubic.hook(Api, wfhooks.verifyItemList.bind(wfhooks))
  cubic.hook(Api, wowhooks.verifyIndices)
  cubic.hook(Api, wowhooks.verifyItemList.bind(wowhooks))
  cubic.hook(Api, wowhooks.verifyServerList.bind(wowhooks))
  await cubic.use(new Api(config.api))

  // Load services
  /* require('../../services/warframe/tradechat.js')
  require('../../services/warframe/opm.js')
  require('../../services/warframe/clear.js')
  // require('../../services/warframe/wfm.js')
  require('../../services/wow-classic/scans.js') */
}
