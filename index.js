const Blitz = require('blitz-js')
const Api = require('blitz-js-api')
const Core = require('blitz-js-core')
const Auth = require('blitz-js-auth')
const View = require('blitz-js-view')
const wfhooks = require('./hooks/warframe.js')
const config = {
  blitz: require('./config/blitz/blitz.js'),
  auth: require('./config/blitz/auth.js'),
  view: require('./config/blitz/view.js'),
  warframe: require('./config/blitz/warframe.js')
}
const blitz = new Blitz(config.blitz)

/**
 * Auth server for verifying users
 */
blitz.use(new Auth(config.auth))

/**
 * View server for providing the web client
 */
blitz.use(new View(config.view))

/**
 * Warframe API setup
 */
blitz.hook('warframe.core', wfhooks.verifyIndices)
blitz.hook('warframe.core', wfhooks.verifyItemList)
blitz.use(new Api(config.warframe.api))
blitz.use(new Core(config.warframe.core))
