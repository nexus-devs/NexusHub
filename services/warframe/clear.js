/**
 * This service cleans the database from outdated warframe
 * orders every few minutes. This script is supposed to run
 * in a separate docker service.
 */
const getClient = require('../getClient.js')
const prod = process.env.NODE_ENV === 'production'
if (prod) {
  process.on('uncaughtException', () => process.exit(1))
  process.on('unhandledRejection', () => process.exit(1))
}

async function monitor () {
  const client = await getClient()

  while (true) {
    const timer = new Date()
    await client.get('/warframe/v1/orders/clear')
    await new Promise(resolve => setTimeout(resolve, 1000 * 60))
    if (prod) console.log(`Done in ${new Date() - timer}ms`)
  }
}
monitor()
