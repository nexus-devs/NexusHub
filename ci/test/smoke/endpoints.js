const bcrypt = require('bcryptjs')
const mongodb = require('mongodb').MongoClient
const Cubic = require('../lib/cubic.js')
const wfhooks = require(`${process.cwd()}/hooks/warframe.js`)
const wowhooks = require(`${process.cwd()}/hooks/wow-classic.js`)

before(async function () {
  await Cubic.await('api')

  // Generate test user with root perms, so endpoint tests can all pass
  const mongo = await mongodb.connect(cubic.config.auth.api.mongoUrl, { useNewUrlParser: true })
  const db = mongo.db('nexus-auth')
  await db.collection('users').updateOne({
    user_key: 'test'
  }, {
    $set: {
      user_id: 'test',
      user_key: 'test',
      user_secret: await bcrypt.hash('test', 1),
      last_ip: [],
      scope: 'write_root',
      refresh_token: null
    }
  }, {
    upsert: true
  })

  // Load parser here so the API client has access to cubic's root credentials
  const parser = require('../lib/EndpointParser.js')

  describe('API endpoints', function () {
    it('should pass Warframe hooks', async function () {
      await wfhooks.verifyIndices()
      await wfhooks.verifyItemList()
    })

    it('should pass WoW Classic hooks', async function () {
      await wowhooks.verifyIndices()
      await wowhooks.verifyItemList()
      await wowhooks.verifyServerList()
    })

    it('should prime database with test notification', async function() {
      const endpoints = cubic.nodes.api.server.ws.endpoints.endpoints
      const postNotification = endpoints.find(e => e.route === '/warframe/v1/orders' && e.method === 'POST')
      await parser.client.post(postNotification.route, postNotification.request.body)
    })

    it('should prime database with test order', async function () {
      const endpoints = cubic.nodes.api.server.ws.endpoints.endpoints
      const postOrder = endpoints.find(e => e.route === '/warframe/v1/orders' && e.method === 'POST')
      await parser.client.post(postOrder.route, postOrder.request.body)

      // We'll also need one for the `previous` time interval (>30 days ago)
      postOrder.request.body.createdAt = new Date() - 1000 * 60 * 60 * 24 * 31
      await parser.client.post(postOrder.route, postOrder.request.body)
    })

    it('should prime WoW Classic database with test scan', async function () {
      const endpoints = cubic.nodes.api.server.ws.endpoints.endpoints
      const postScan = endpoints.find(e => e.route === '/wow-classic/v1/scans/new' && e.method === 'POST')
      const postCurrent = endpoints.find(e => e.route === '/wow-classic/v1/scans/current' && e.method === 'POST')
      await Promise.all([parser.client.post(postScan.route, postScan.request.body), parser.client.post(postCurrent.route, postCurrent.request.body)])
    })

    for (const endpoint of cubic.nodes.api.server.ws.endpoints.endpoints) {
      it(`should return the specified response for ${endpoint.method} ${endpoint.route}`, async function () {
        await parser.verifyEndpoint(endpoint)
      })
    }
  })
})
