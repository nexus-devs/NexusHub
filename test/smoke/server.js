const Cubic = require('cubic')
const Api = require('cubic-api')
const Auth = require('cubic-auth')
const Core = require('cubic-core')
const Ui = require('cubic-ui')
const request = require('request-promise')
const Client = require('cubic-client')

/**
 * Configuration
 */
const wfhooks = require(`${process.cwd()}/config/cubic/hooks/warframe.js`)
const redisUrl = 'redis://redis'
const mongoUrl = 'mongodb://mongodb'
const webpack = require(`${process.cwd()}/.webpack.json`).enable
const ci = process.env.DRONE
const prod = process.env.NODE_ENV === 'production'
const config = {
  cubic: require(`${process.cwd()}/config/cubic/cubic`),
  auth: require(`${process.cwd()}/config/cubic/auth.js`),
  ui: require(`${process.cwd()}/config/cubic/ui.js`),
  main: require(`${process.cwd()}/config/cubic/main.js`),
  warframe: require(`${process.cwd()}/config/cubic/warframe.js`)
}
config.cubic.logLevel = 'silent'

/**
 * Use different database URLs for CI (because docker)
 */
if (ci) {
  config.auth.api = { redisUrl }
  config.auth.core.redisUrl = redisUrl
  config.auth.core.mongoUrl = mongoUrl
  config.ui.api = { redisUrl }
  config.ui.core.redisUrl = redisUrl
  config.ui.core.mongoUrl = mongoUrl
  config.main.api.redisUrl = redisUrl
  config.main.core.redisUrl = redisUrl
  config.main.core.mongoUrl = mongoUrl
  config.warframe.core.redisUrl = redisUrl
  config.warframe.core.mongoUrl = mongoUrl
}

/**
 * Bundle webpack before starting cubic if we're in production.
 */
if (prod) {
  config.ui.webpack.skipBuild = true
}

/**
 * Helper function to resolve as soon as UI server responds with rendered UI.
 */
async function getIndex () {
  return new Promise(async resolve => {
    try {
      resolve(await request.get('http://localhost:3000'))
    } catch (err) {
      setTimeout(async () => {
        resolve(await getIndex())
      }, 500)
    }
  })
}

/**
 * Load up cubic api to connect to and auth node to authenticate at.
 */
before(async function () {
  const cubic = new Cubic(config.cubic)
  await cubic.use(new Auth(config.auth))
  await cubic.use(new Api(config.main.api))
  await cubic.use(new Core(config.main.core))
  cubic.hook('warframe.core', wfhooks.verifyIndices)
  cubic.hook('warframe.core', wfhooks.verifyItemList)
  await cubic.use(new Core(config.warframe.core))

  // Prevent dev-webpack-build if changes aren't necessary.
  if (webpack) {
    await cubic.use(new Ui(config.ui))
  }
})

/**
 * Test for properly connecting to cubic-api node.
 */
describe('Server', function () {
  it('should load up API node', async function () {
    const client = new Client()
    await client.connections()
  })

  // Skip UI tests if no changes were present
  if (webpack) {
    it('should load up UI node', async function () {
      await getIndex()
    })
  }
})
