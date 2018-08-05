const Cubic = require('cubic')
const Api = require('cubic-api')
const Auth = require('cubic-auth')
const Core = require('cubic-core')
const Client = require('cubic-client')

/**
 * Configuration
 */
const wfhooks = require(`${process.cwd()}/hooks/warframe.js`)
const redisUrl = 'redis://redis'
const mongoUrl = 'mongodb://mongodb'
const ci = process.env.DRONE
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
  config.main.api.redisUrl = redisUrl
  config.main.core.redisUrl = redisUrl
  config.main.core.mongoUrl = mongoUrl
  config.warframe.core.redisUrl = redisUrl
  config.warframe.core.mongoUrl = mongoUrl
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
  await cubic.use(new Core(config.warframe.core))
})

/**
 * Test for properly connecting to cubic-api node.
 */
describe('Server', function () {
  it('should load up API node', async function () {
    const client = new Client()
    await client.connecting
  })
  it('should store Warframe items before tests.', async function () {
    await wfhooks.verifyItemList()
  })
})
