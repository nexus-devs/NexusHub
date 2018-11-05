const Api = require('cubic-api')
const Core = require('cubic-core')
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

    // Warframe Hooks
    if (group === 'warframe' && node === 'core') {
      cubic.hook('warframe.core', wfhooks.verifyIndices)
      cubic.hook('warframe.core', wfhooks.verifyItemList.bind(wfhooks))
    }
    await cubic.use(new Node(config[group][node]))

    // Warframe Services
    if (group === 'warframe' && node === 'core') {
      require('../../services/warframe/warframe.market.js')
      require('../../services/warframe/opm.js')
    }
  }
}
