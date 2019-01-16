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
  const node = process.env.NEXUS_TARGET_NODE

  // Load node depending on env var
  if (node === 'auth') {
    await cubic.use(new Auth(config.auth))
  }
  else if (node === 'ui') {
    await cubic.use(new Ui(config.ui))
  }
  else if (node === 'warframe') {
    cubic.hook('warframe.api', wfhooks.verifyIndices)
    cubic.hook('warframe.api', wfhooks.verifyItemList.bind(wfhooks))
    await cubic.use(new Api(config[node].api))

    // Warframe Services
    require('../../services/warframe/opm.js')
  }

  // All nodes require a URL for internal healthchecks with docker, so we add
  // those here.
  cubic.nodes[node].api.use('/healthcheck', (req, res) => {
    res.send('ok')
    return true
  })
}
