/**
 * Update Warframe's OPM for all items every few seconds. It just makes no sense
 * to recalculate this on every order, as we do with item OPM, since it would
 * change faster than the UI could display anyways.
 */
const Opm = require('../../api/warframe/v1/orders/opm.js')

// This repeats every 10 seconds if everything goes *perfectly*, but if something
// blocks the database, we won't insist on forcing it every 10 seconds
async function monitor () {
  const endpoints = cubic.nodes.api.server.ws.endpoints
  const db = (await endpoints.db).db(endpoints.config.mongoDb)
  const options = { db, cache: endpoints.cache, ws: endpoints.ws, url: `/warframe/v1/orders/opm` }

  while (true) {
    const opm = new Opm(options)
    const data = await opm.filter()
    opm.publish(data)
    opm.cache(data, 60)
    await new Promise(resolve => setTimeout(resolve, 1000 * 5))
  }
}
monitor()
