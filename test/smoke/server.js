const Cubic = require('cubic')
const Api = require('cubic-api')
const Auth = require('cubic-auth')
const Client = require('cubic-client')
const redisUrl = 'redis://redis'
const mongoUrl = 'mongodb://mongodb'
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
})

/**
 * Test for properly connecting to cubic-api node.
 */
describe('Server', function () {
  it('should load up API node', async function () {
    const client = new Client()
    await client.connecting()
  })
})
