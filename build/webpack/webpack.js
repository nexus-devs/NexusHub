const staging = process.argv.includes('staging')
process.env.NODE_ENV = 'production'
if (staging) process.env.NEXUS_STAGING = true
const rm = require('rimraf')
const enabled = require(`${process.cwd()}/config/webpack/build.json`).enable
const config = require(`${process.cwd()}/config/cubic/ui.js`)
if (process.env.DRONE) {
  config.api.mongoUrl = 'mongodb://mongodb'
  config.api.redisUrl = 'redis://redis'
  config.client = {
    disableSsr: true, // disables server-sided
    apiUrl: staging ? 'wss://api.staging.nexushub.co/ws' : 'wss://api.nexushub.co/ws',
    authUrl: staging ? 'wss://auth.staging.nexushub.co/ws' : 'wss://auth.nexushub.co/ws'
  }
}

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
  console.log('* Starting webpack build process. This might take a while...')
  const timer = new Date()

  /**
   * Load up Cubic to generate routes config file.
   */
  const Cubic = require('cubic')
  const cubic = new Cubic({ logLevel: 'silent' })

  /**
   * Load up UI node. No Auth needed, we only need to register the endpoints
   * as routes.
   */
  const Api = require('cubic-api')
  const Auth = require('cubic-auth')
  const Ui = require('cubic-ui')
  const apiConfig = require('../../config/cubic/main.js').api
  if (process.env.DRONE) apiConfig.mongoUrl = 'mongodb://mongodb'
  if (process.env.DRONE) apiConfig.redisUrl = 'redis://redis'
  const authConfig = process.env.DRONE ? {
    api: {
      mongoUrl: 'mongodb://mongodb',
      redisUrl: 'redis://redis'
    }
  } : {}
  await cubic.use(new Auth(authConfig))
  await cubic.use(new Api(apiConfig))
  await cubic.use(new Ui(config))

  /**
   * Trigger endpoint mapping which will also create the custom routes.
   */
  await cubic.nodes.ui.api.webpackServer.registerEndpoints()
  await cubic.nodes.ui.api.webpackServer.done

  console.log(`> Webpack build successful (${new Date() - timer}ms)`)
  process.exit()
}

if (enabled || !staging) {
  build()
} else {
  console.log('* No webpack rebuild required.')
}
