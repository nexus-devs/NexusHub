/**
 * Update Warframe's OPM for all items every few seconds. It just makes no sense
 * to recalculate this on every order, as we do with item OPM, since it would
 * change faster than the UI could display anyways.
 */
const Opm = require('../../api/warframe/v1/orders/opm.js')

// This repeats every 10 seconds if everything goes *perfectly*, but if something
// blocks the database, we won't insist on forcing it every 10 seconds
async function monitor () {
  const core = cubic.nodes.warframe.core.client
  const api = core.api
  const db = (await core.endpointController.db).db(core.config.mongoDb)
  await api.connecting()

  while (true) {
    const opm = new Opm(api, db, `/warframe/v1/orders/opm`)
    const data = await opm.filter()
    opm.publish(data)
    opm.cache(data, 60)
    await new Promise(resolve => setTimeout(resolve, 1000 * 5))
  }
}
monitor()
