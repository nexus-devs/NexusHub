const wfhooks = require(`${process.cwd()}/hooks/warframe.js`)

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
  const parser = require('../lib/EndpointParser.js')
  const endpoints = cubic.nodes.warframe.core.client.endpointController.endpoints

  describe('Warframe API endpoints', function () {
    it('should pass Warframe hooks', async function () {
      await wfhooks.verifyIndices()
      await wfhooks.verifyItemList()
    })
    it('should prime database with test order', async function () {
      const postOrder = endpoints.find(e => e.route === '/warframe/v1/orders' && e.method === 'POST')
      await parser.client.post(postOrder.route, postOrder.request.body)
    })
    for (let endpoint of endpoints) {
      it(`should return the specified response for ${endpoint.method} ${endpoint.route}`, async function () {
        await parser.verifyEndpoint(endpoint)
      })
    }
  })
})
