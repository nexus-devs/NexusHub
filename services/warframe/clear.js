/**
 * This service cleans the database from outdated warframe
 * orders every few minutes. This script is supposed to run
 * in a separate docker service.
 */
const getClient = require('../getClient.js')

async function monitor () {
  const client = await getClient()

  while (true) {
    await client.get('/warframe/v1/orders/clear')
    await new Promise(resolve => setTimeout(resolve, 1000 * 60))
  }
}
monitor()
