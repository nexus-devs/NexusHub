const fs = require('fs')
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
    await cubic.use(new Auth(config.auth))
  }
  else if (group === 'ui') {
    await cubic.use(new Ui(config.ui))
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
      require('../../services/warframe/opm.js')
    }
  }

  // Healthchecks
  //
  // APIs have a middleware added to check if **they** are responsive, without
  // relying on the core node.
  if (node === 'api') {
    cubic.nodes[group][node].use('/healthcheck', (req, res) => {
      res.send('ok')
      return true
    })
  }

  // Core nodes write their connection status to the API to a text file on
  // close/open. This doesn't check if endpoints actually work, but that should
  // be covered in unit tests.
  if (node === 'core') {
    const core = cubic.nodes[group][node]
    const client = core.client.api
    const write = up => {
      fs.writeFile(`${process.cwd()}/.health`, up ? '1' : '0')
    }
    const listen = async () => {
      await client.connecting()
      write(true) // If we got here, the initial connection already worked.
      client.connection.client.on('close', () => {
        write(false)
        setTimeout(() => listen(), 10)
      })
      client.connection.client.on('error', () => {
        write(false)
        setTimeout(() => listen(), 10)
      })
      client.connection.client.on('open', () => {
        write(true)
      })
    }
    listen()
  }
}
