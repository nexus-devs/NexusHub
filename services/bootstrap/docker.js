module.exports = async function () {
  const node = process.env.NEXUS_TARGET_NODE
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

  // Load node depending on env var
  if (node === 'auth') {
    await cubic.use(new Auth(config.auth))
  }
  else if (node === 'ui') {
    await cubic.use(new Ui(config.ui))
  }
  else if (node.slice(0, 3) === 'api') {
    cubic.hook(Api, wfhooks.verifyIndices)
    cubic.hook(Api, wfhooks.verifyItemList.bind(wfhooks))
    cubic.hook(Api, wowhooks.verifyIndices)
    cubic.hook(Api, wowhooks.verifyItemList.bind(wowhooks))
    cubic.hook(Api, wowhooks.verifyServerList.bind(wowhooks))
    await cubic.use(new Api(config.api))
  }

  // All nodes require a URL for internal healthchecks with docker, so we add
  // those here.
  const api = node.slice(0, 3) === 'api' ? cubic.nodes.api : cubic.nodes[node].api
  api.use('/healthcheck', (req, res) => {
    res.send('ok')
    return true
  })
}
