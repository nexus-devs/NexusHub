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

async function monitor () {
  const client = await getClient()
  const items = await client.get('/warframe/v1/items?tradable=true')

  while (true) {
    for (const item of items) {
      const timer = new Date()
      const result = await client.get(`/warframe/v1/orders/clear?item=${item.name}`)
      if (prod) {
        console.log(`${item.name}: ${result.discarded} removed, ${result.updated} modified, ${result.total} total in ${new Date() - timer}ms`)
      }
      await sleep(100 * 1) // Give our and WFM's API some breathing room
    }
  }
}
monitor()
