const Cubic = require('cubic')
const Api = require('cubic-api')
const Core = require('cubic-core')
const Auth = require('cubic-auth')
const Ui = require('cubic-ui')
const wfhooks = require('./config/cubic/hooks/warframe.js')
const config = {
  cubic: require('./config/cubic/cubic'),
  auth: require('./config/cubic/auth.js'),
  ui: require('./config/cubic/ui.js'),
  main: require('./config/cubic/main.js'),
  warframe: require('./config/cubic/warframe.js')
}
const cubic = new Cubic(config.cubic)

/**
 * Auth server for verifying users
 */
cubic.use(new Auth(config.auth))

/**
 * View server for providing the web client
 */
cubic.use(new Ui(config.ui))

/**
 * Main API setup. Used for 'global' endpoints not specific to any game.
 * Core nodes of other games will still connect to this API server though.
 */
cubic.use(new Api(config.main.api))
cubic.use(new Core(config.main.core))

/**
 * Warframe Core node
 */
cubic.hook('warframe.core', wfhooks.verifyIndices)
cubic.hook('warframe.core', wfhooks.verifyItemList)
cubic.use(new Core(config.warframe.core))
