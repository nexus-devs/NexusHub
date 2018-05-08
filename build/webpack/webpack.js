process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const enabled = require(`${process.cwd()}/.webpack.json`).enable
const rm = require('rimraf')
const ci = process.env.DRONE

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
  rm.sync(`${process.cwd()}/assets/bundles/*`)

  /**
   * We should now have a clear bundle history and actual commit to the build.
   */
  console.log('* Starting webpack build process. This might take a while...')
  const timer = new Date()

  /**
   * Load up Cubic to generate routes config file.
   */
  const loader = require('cubic-loader')
  loader({ logLevel: 'silent', skipAuthCheck: true })

  /**
   * Load up UI node. No Auth needed, we only need to register the endpoints
   * as routes.
   */
  const Ui = require('cubic-ui')
  const redisUrl = 'redis://redis'
  const mongoUrl = 'mongodb://mongodb'
  const config = {
    api: { disable: true },
    webpack: {
      skipBuild: true,
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    },
    client: {
      apiUrl: 'https://api.nexus-stats.com',
      authUrl: 'https://auth.nexus-stats.com'
    }
  }
  await cubic.use(new Ui(ci ? {
    api: { redisUrl, disable: true },
    core: { redisUrl, mongoUrl },
    webpack: config.webpack,
    client: config.client
  } : config))

  /**
   * Trigger endpoint mapping which will also create the custom routes.
   */
  await cubic.nodes.ui.core.webpackServer.registerEndpoints()
  const client = require(cubic.config.ui.webpack.clientConfig)
  const server = require(cubic.config.ui.webpack.serverConfig)

  /**
   * Actual webpack build process.
   */
  await new Promise((resolve, reject) => {
    webpack([client, server], (err, stats) => {
      if (err || stats.hasErrors()) {
        return reject(err || stats.toJson().errors)
      }
      console.log(`> Webpack build successful (${new Date() - timer}ms)`)
      resolve()
    })
  })
  process.exit()
}

if (enabled) {
  build()
}
