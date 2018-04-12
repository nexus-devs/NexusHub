const assert = require('assert')
const Cubic = require('cubic')
const Api = require('cubic-api')
const Auth = require('cubic-auth')
const Core = require('cubic-core')
const Ui = require('cubic-ui')
const Client = require('cubic-client')

// Config
const wfhooks = require('../config/cubic/hooks/warframe.js')
const redisUrl = 'redis://redis'
const mongoUrl = 'mongodb://mongodb'
const ci = process.env.DRONE_CI
const config = {
  cubic: require('../config/cubic/cubic'),
  auth: require('../config/cubic/auth.js'),
  ui: require('../config/cubic/ui.js'),
  main: require('../config/cubic/main.js'),
  warframe: require('../config/cubic/warframe.js')
}
config.cubic.logLevel = 'silent'

// Use different database URLs for CI (because docker)
if (ci) {
  config.auth.api = { redisUrl }
  config.auth.core.redisUrl = redisUrl
  config.auth.core.mongoUrl = mongoUrl
  config.ui.api = { redisUrl }
  config.ui.core.redisUrl = redisUrl
  config.ui.core.mongoUrl = mongoUrl
  cubic.main.api.redisUrl = redisUrl
  cubic.main.core.redisUrl = redisUrl
  cubic.main.core.mongoUrl = mongoUrl
  config.warframe.api.redisUrl = redisUrl
  config.warframe.core.redisUrl = redisUrl
  config.warframe.core.mongoUrl = mongoUrl
}

/**
 * Load up cubic api to connect to and auth node to authenticate at.
 */
before(async () => {
  const cubic = new Cubic(config.cubic)
  cubic.use(new Auth(config.auth))
  cubic.use(new Ui(config.ui))
  cubic.hook('warframe.core', wfhooks.verifyIndices)
  cubic.hook('warframe.core', wfhooks.verifyItemList)
  cubic.use(new Api(config.main.api))
  cubic.use(new Core(config.main.core))
  cubic.use(new Api(config.warframe.api))
  cubic.use(new Core(config.warframe.core))
})


/**
 * Test for properly connecting to cubic-api node.
 */
describe('Server', function () {
  it('should become ready to connect to', async function () {
    const client = new Client()
    assert(await client.get('/foo') === 'bar')
  })
})