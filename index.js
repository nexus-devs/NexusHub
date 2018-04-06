const Cubic = require('../../cubic/cubic')
const Api = require('cubic-api')
const Core = require('cubic-core')
const Auth = require('cubic-auth')
const View = require('../../cubic/cubic-ui')
const wfhooks = require('./hooks/warframe.js')
const config = {
  cubic: require('./config/cubic/cubic'),
  auth: require('./config/cubic/auth.js'),
  ui: require('./config/cubic/view.js'),
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
cubic.use(new View(config.ui))

/**
 * Warframe API setup
 */
cubic.hook('warframe.core', wfhooks.verifyIndices)
cubic.hook('warframe.core', wfhooks.verifyItemList)
cubic.use(new Api(config.warframe.api))
cubic.use(new Core(config.warframe.core))
