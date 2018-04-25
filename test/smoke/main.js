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
