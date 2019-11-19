/**
 * Checks if new scans from TSM exist and add them to the database.
 * Only do this every 10 minutes, since new scans are only processed at max 1 per hour.
 */
const request = require('request-promise')
const fs = require('fs')
const getClient = require('../getClient.js')
const prod = process.env.NODE_ENV === 'production'
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
if (prod) {
  process.on('uncaughtException', () => process.exit(1))
  process.on('unhandledRejection', () => process.exit(1))
}

async function monitor () {
  const client = await getClient()
  const tsmKey = fs.readFileSync('/run/secrets/tsm-api-key', 'utf-8').trim()
  let lastDone = new Date()

  // Kill service if it gets stuck. Docker will auto-restart it.
  setInterval(() => {
    if (prod && new Date() - lastDone > 1000 * 60 * 30) {
      process.exit()
    }
  }, 1000 * 60 * 30)

  while (true) {
    const timer = new Date()

    const reqRealms = await requestTSM(tsmKey, '/realms')
    if (!reqRealms.success) console.log(`Could not fetch realms: ${reqRealms.error}`)
    else {
      const realms = reqRealms.data
    }

    if (prod) {
      console.log(`Done in ${new Date() - timer}ms`)
      await sleep(1000 * 60 * 10)
    } else await sleep(1000 * 10)
    lastDone = new Date()
  }
}

async function requestTSM (tsmKey, endpoint) {
  return request({
    uri: `http://api2.tradeskillmaster.com${endpoint}`,
    json: true,
    headers: { 'User-Agent': 'Request-Promise', 'X-API-Key': tsmKey }
  })
}

monitor()
