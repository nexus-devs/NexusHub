const Cubic = require('cubic')
const Api = require('cubic-api')
const Core = require('../../cubic/cubic-core')
const Auth = require('cubic-auth')
const Ui = require('cubic-ui')
const wfhooks = require('./hooks/warframe.js')
const config = {
  cubic: require('./config/cubic/cubic'),
  auth: require('./config/cubic/auth.js'),
  ui: require('./config/cubic/ui.js'),
  main: require('./config/cubic/main.js'),
  warframe: require('./config/cubic/warframe.js')
}
const cubic = new Cubic(config.cubic)

/**
 * Load every node into a single controller when in dev mode.
 */
if (!(process.env.DOCKER && process.env.NODE_ENV === 'production')) {
  // Auth server for verifying users
  cubic.use(new Auth(config.auth))

  // View server for providing the web client
  cubic.use(new Ui(config.ui))

  // Main API setup. Used for 'global' endpoints not specific to any game.
  // Core nodes of other games will still connect to this API server though.
  cubic.use(new Api(config.main.api))
  cubic.use(new Core(config.main.core))

  // Warframe Core node
  cubic.hook('warframe.core', wfhooks.verifyIndices)
  cubic.hook('warframe.core', wfhooks.verifyItemList.bind(wfhooks))
  cubic.use(new Core(config.warframe.core))
}

/**
 * Docker production deployments will only spawn a single node per container.
 * This way we can scale things exactly as needed. The node to be spawned is
 * set in the NEXUS_TARGET_NODE environment variable.
 */
else {
  const target = process.env.NEXUS_TARGET_NODE

  // Target looks like auth-api, ui-core, etc, with the group first, node second
  const group = target.split('-')[0]
  const node = target.split('-')[1]

  // Disable the other node that we don't need
  config[group][node === 'api' ? 'core' : 'api'].disable = true

  // Load single node
  if (group === 'auth') {
    cubic.use(new Auth(config.auth))
  }
  else if (group === 'ui') {
    cubic.use(new Ui(config.ui))
  }
  else {
    const Node = node === 'api' ? Api : Core

    // Hooks
    if (group === 'warframe' && node === 'core') {
      cubic.hook('warframe.core', wfhooks.verifyIndices)
      cubic.hook('warframe.core', wfhooks.verifyItemList)
    }
    cubic.use(new Node(config[group][node]))
  }
}
