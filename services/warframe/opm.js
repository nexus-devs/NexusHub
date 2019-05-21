/**
 * Update Warframe's OPM for all items every few seconds. It just makes no sense
 * to recalculate this on every order, as we do with item OPM, since it would
 * change faster than the UI could display anyways.
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
    await client.get('/warframe/v1/orders/opm')
    await new Promise(resolve => setTimeout(resolve, 1000 * 5))
    if (prod) console.log(`Done in ${new Date() - timer}ms`)
  }
}
monitor()
