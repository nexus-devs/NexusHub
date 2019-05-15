/**
 * Update Warframe's OPM for all items every few seconds. It just makes no sense
 * to recalculate this on every order, as we do with item OPM, since it would
 * change faster than the UI could display anyways.
 */
const getClient = require('../getClient.js')

async function monitor () {
  const client = await getClient()

  while (true) {
    await client.get('/warframe/v1/orders/opm')
    await new Promise(resolve => setTimeout(resolve, 1000 * 5))
  }
}
monitor()
