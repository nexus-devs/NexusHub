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
  const tsmKey = process.env.TSM_API_KEY || fs.readFileSync('/run/secrets/tsm-api-key', 'utf-8').trim()
  let lastDone = new Date()

  // Kill service if it gets stuck. Docker will auto-restart it.
  setInterval(() => {
    if (prod && new Date() - lastDone > 1000 * 60 * 60) {
      process.exit()
    }
  }, 1000 * 60 * 60)

  while (true) {
    const timer = new Date()

    const reqRealms = await requestTSM(tsmKey, '/realms')
    if (!reqRealms.success) console.log(`Could not fetch realms: ${reqRealms.error}`)
    else {
      const realms = reqRealms.data
      for (const realm of realms) {
        const lastScan = await client.get(`/wow-classic/v1/scans/latest/${realm.master_slug}`)

        // If there are no scans or the last scan is outdated
        lastScan.scannedAt = lastScan.error ? new Date(0) : new Date(lastScan.scannedAt)
        const lastScanUnix = Math.floor(lastScan.scannedAt.getTime() / 1000)
        if (lastScanUnix < realm.last_modified) {
          const scans = await requestTSM(tsmKey, `/realm/${realm.master_slug}/scans`)
          if (!scans.success) {
            console.log(`Could not fetch scans for ${realm.master_slug}: ${reqRealms.error}`)
            break
          }

          // Sort TSM scans by date and add them
          // Do old -> new so there aren't data holes if the service get's interrupted
          scans.data.sort((a, b) => a.last_modified - b.last_modified)
          console.log(`Inserting ${scans.data} scans for ${realm.master_slug}`)
          for (const scan of scans.data) {
            if (scan.last_modified <= lastScanUnix) continue // If scan is already added

            const scannedAt = new Date(scan.last_modified * 1000)

            // Await to avoid overloading the TSM servers
            await client.post('/wow-classic/v1/scans/new', { slug: realm.master_slug, region: realm.region, scanId: scan.id, scannedAt })
          }
        }
      }
    }

    if (prod) console.log(`Done in ${new Date() - timer}ms`)
    await sleep(1000 * 60 * 10)
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
