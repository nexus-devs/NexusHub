const staging = process.argv.includes('staging')
process.env.NODE_ENV = 'production'
if (staging) process.env.NEXUS_STAGING = true
const rm = require('rimraf')
const { promisify } = require('util')
const webpack = require('webpack')
const enabled = require(`${process.cwd()}/config/webpack/build.json`).enable
const config = require(`${process.cwd()}/config/cubic/ui.js`)
const chalk = require('chalk')
const tree = require('files-tree')

if (process.env.DRONE) {
  config.api.mongoUrl = 'mongodb://mongodb'
  config.api.redisUrl = 'redis://redis'
  config.client = {
    apiUrl: staging ? 'wss://api.staging.nexushub.co/ws' : 'wss://api.nexushub.co/ws',
    authUrl: staging ? 'wss://auth.staging.nexushub.co/ws' : 'wss://auth.nexushub.co/ws'
  }
}
config.webpack.skipBuild = true
config.client = { disableSsr: true }

/**
 * Bundle webpack for production. This will imitate a cubic-ui node to auto-
 * generate all routes and get the required default config during build.
 */
async function build () {
  /**
   * Only keep one build at a time. This way files are always there for
   * production builds and test units.
   */
  console.log('* Removing old builds...')
  rm.sync(`${process.cwd()}/ui/assets/bundles/*`)

  /**
   * We should now have a clear bundle history and actual commit to the build.
   */
  console.log('* Starting webpack build process. This might take a while...\n')

  /**
   * Load up Cubic to generate routes config file.
   */
  const Cubic = require('cubic')
  const cubic = new Cubic({ logLevel: 'silent' })

  /**
   * Load up UI node. No Auth needed, we only need to register the endpoints
   * as routes.
   */
  const Ui = require('cubic-ui')
  await cubic.use(new Ui(config))

  /**
   * Trigger endpoint mapping which will also create the custom routes.
   */
  await cubic.nodes.ui.api.webpackServer.registerEndpoints()
  const client = require(cubic.config.ui.webpack.clientConfig)
  const server = require(cubic.config.ui.webpack.serverConfig)
  const Progress = require('progress-bar-webpack-plugin')
  const serverProgress = {
    format: 'server [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
    clear: false
  }
  const clientProgress = {
    format: serverProgress.format.replace('server', 'client'),
    clear: false
  }
  server.plugins.push(new Progress(serverProgress))
  client.plugins.push(new Progress(clientProgress))

  /**
   * Actual webpack build process.
   */
  const build = webpack([client, server])
  const compile = promisify(build.run).bind(build)
  await compile()
  console.log('* Compilation done. Resulting file tree:')
  console.log(tree.tree(client.output.path))
  process.exit()
}

if (enabled) {
  build()
} else {
  console.log('* No webpack rebuild required.')
}
