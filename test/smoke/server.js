const Cubic = require('cubic')
const Api = require('cubic-api')
const Auth = require('cubic-auth')
const Ui = require('cubic-ui')
const Client = require('cubic-client')
const get = require('../lib/get.js')
const redisUrl = 'redis://redis'
const mongoUrl = 'mongodb://mongodb'
const webpack = require('../../config/webpack/build.json')
const ci = process.env.DRONE
const config = {
  cubic: require(`${process.cwd()}/config/cubic/cubic`),
  auth: require(`${process.cwd()}/config/cubic/auth.js`),
  ui: require(`${process.cwd()}/config/cubic/ui.js`),
  api: require(`${process.cwd()}/config/cubic/api.js`)
}
config.cubic.logLevel = 'silent'

/**
 * Use different database URLs for CI (because docker)
 */
if (ci) {
  config.auth.api.redisUrl = redisUrl
  config.auth.api.mongoUrl = mongoUrl
  config.ui.api.redisUrl = redisUrl
  config.ui.api.mongoUrl = mongoUrl
  config.api.redisUrl = redisUrl
  config.api.mongoUrl = mongoUrl
}

/**
 * Load up cubic api to connect to and auth node to authenticate at.
 */
before(async function () {
  const cubic = new Cubic(config.cubic)
  await cubic.use(new Auth(config.auth))
  await cubic.use(new Api(config.api))
  await cubic.use(new Ui(config.ui))
})

/**
 * Test for properly connecting to cubic-api node.
 */
describe('Server', function () {
  it('should load up API node', async function () {
    const client = new Client()
    await client.connecting()
  })

  // Check if webpack build works(only if rebuild was required)
  if (webpack.enable) {
    it('should load up UI node - GET /', async function () {
      await get('/', 3000)
    })
  }
})
