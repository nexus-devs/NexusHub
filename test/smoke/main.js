const bcrypt = require('bcryptjs')
const mongodb = require('mongodb').MongoClient

before(async function () {
  const awaitCubic = new Promise(resolve => {
    const awaitInterval = setInterval(() => {
      try {
        if (cubic.nodes.main.core) {
          resolve()
          clearInterval(awaitInterval)
        }
      }
      catch (err) {}
    }, 500)
  })
  await awaitCubic

  // Generate test user with root perms, so endpoint tests can all pass
  const mongo = await mongodb.connect(cubic.config.auth.core.mongoUrl, { useNewUrlParser: true })
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

  describe('Main API endpoints', function () {
    for (let endpoint of cubic.nodes.main.core.client.endpointController.endpoints) {
      it(`should return the specified response for ${endpoint.method} ${endpoint.route}`, async function () {
        await parser.verifyEndpoint(endpoint)
      })
    }
  })
})
