/**
 * This service cleans the database from outdated warframe
 * orders every few minutes. This script is supposed to run
 * in a separate docker service.
 */
const getClient = require('../getClient.js')
const prod = process.env.NODE_ENV === 'production'
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
if (prod) {
  process.on('uncaughtException', () => process.exit(1))
  process.on('unhandledRejection', () => process.exit(1))
}

async function getItems (client) {
  return client.get('/warframe/v1/items?tradable=true')
}

async function monitor () {
  const client = await getClient()
  let items = await getItems(client)
  let lastDone = new Date()

  setInterval(async () => {
    // Kill service if it gets stuck. Docker will auto-restart it.
    if (prod && new Date() - lastDone > 1000 * 60) {
      process.exit()
    }
    items = await getItems(client)
  }, 1000 * 60)

  while (true) {
    for (const item of items) {
      const timer = new Date()
      let result = {}

      try {
        result = await client.get(`/warframe/v1/orders/clear?item=${encodeURIComponent(item.name)}`)
      } catch (err) {
        if (prod) console.log(`Failed at ${item.name}`)
        continue
      } finally {
        lastDone = new Date()
      }

      if (prod) {
        console.log(`${item.name}: ${result.discarded} removed, ${result.updated} modified, ${result.total} total in ${new Date() - timer}ms`)
      }
      // Give our and WFM's API some breathing room. WFM rate limits
      // will be 3RPS. In addition, we'll only wait if we actually made
      // a request to WFM, which is not the case if result.total is 0.
      if (result.total) await sleep(333)
    }
  }
}
monitor()
