before(async function () {
  const awaitCubic = new Promise(resolve => {
    const awaitInterval = setInterval(() => {
      try {
        if (cubic.nodes.warframe.core) {
          resolve()
          clearInterval(awaitInterval)
        }
      }
      catch (err) {}
    }, 500)
  })
  await awaitCubic

  // Prime database with at least one test order
  const Client = require('cubic-client')
  let client = new Client({
    user_key: cubic.config.main.core.userKey,
    user_secret: cubic.config.main.core.userSecret
  })
  const endpoints = cubic.nodes.warframe.core.client.endpointController.endpoints
  const postOrder = endpoints.find(e => e.route === '/warframe/v1/orders' && e.method === 'POST')
  await client.post(postOrder.route, postOrder.request.body)

  // Load parser here so the API client has access to cubic's root credentials
  const parser = require('../lib/EndpointParser.js')

  describe('Warframe API endpoints', function () {
    for (let endpoint of endpoints) {
      it(`should return the specified response for ${endpoint.method} ${endpoint.route}`, async function () {
        await parser.verifyEndpoint(endpoint)
      })
    }
    client = null
  })
})
