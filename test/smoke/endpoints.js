const bcrypt = require('bcryptjs')
const mongodb = require('mongodb').MongoClient
const Cubic = require('../lib/cubic.js')
const wfhooks = require(`${process.cwd()}/hooks/warframe.js`)

before(async function () {
  await Cubic.await('main')

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

    it('should prime database with test order', async function () {
      const endpoints = cubic.nodes.main.api.server.ws.endpoints.endpoints
      const postOrder = endpoints.find(e => e.route === '/warframe/v1/orders' && e.method === 'POST')
      await parser.client.post(postOrder.route, postOrder.request.body)
    })

    for (const endpoint of cubic.nodes.main.api.server.ws.endpoints.endpoints) {
      it(`should return the specified response for ${endpoint.method} ${endpoint.route}`, async function () {
        await parser.verifyEndpoint(endpoint)
      })
    }
  })
})
