/**
 * Checks if new scans from TSM exist and add them to the database.
 * Only do this every 10 minutes, since new scans are only processed at max 1 per hour.
 */
const getClient = require('../getClient.js')
const TSMRequest = require(`${process.cwd()}/api/lib/tsm-request.js`)
const prod = process.env.NODE_ENV === 'production'
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
if (prod) {
  process.on('uncaughtException', () => process.exit(1))
  process.on('unhandledRejection', () => process.exit(1))
}

async function monitor () {
  const client = await getClient()
  let lastDone = new Date()
  const TSMReq = new TSMRequest()

  if (!TSMReq.tsmKey) return

  // Kill service if it gets stuck (2 hours without being done). Docker will auto-restart it.
  setInterval(() => {
    if (prod && new Date() - lastDone > 1000 * 60 * 60 * 2) {
      process.exit()
    }
  }, 1000 * 60 * 60 * 2)

  while (true) {
    const timer = new Date()

    const reqRealms = await TSMReq.get('/realms')
    if (!reqRealms.success) console.log(`Could not fetch realms: ${reqRealms.error}`)
    else {
      const realms = reqRealms.data
      for (const realm of realms) {
        const lastScan = await client.get(`/wow-classic/v1/scans/latest/${realm.master_slug}`)

        // If there are no scans or the last scan is outdated
        lastScan.scannedAt = lastScan.error ? new Date(0) : new Date(lastScan.scannedAt)
        const lastScanUnix = Math.floor(lastScan.scannedAt.getTime() / 1000)
        if (lastScanUnix < realm.last_modified) {
          const scans = await TSMReq.get(`/realm/${realm.master_slug}/scans`)
          if (!scans.success) {
            console.log(`Could not fetch scans for ${realm.master_slug}: ${reqRealms.error}`)
            break
          }

          // Sort TSM scans by date and add them
          // Also remove scans that were already added
          // Do old -> new so there aren't data holes if the service get's interrupted
          scans.data = scans.data.filter((s) => s.last_modified > lastScanUnix).sort((a, b) => a.last_modified - b.last_modified)
          console.log(`Inserting ${scans.data.length} scans for ${realm.master_slug}...`)
          for (const scan of scans.data) {
            const scannedAt = scan.last_modified * 1000

            // Await to avoid overloading the TSM servers
            await client.post('/wow-classic/v1/scans/new', { slug: realm.master_slug, region: realm.region, scanId: scan.id, scannedAt })
          }
          console.log('Inserting current data...')
          await client.post('/wow-classic/v1/scans/current', { slug: realm.master_slug })

          console.log('...done\n')

          // Wait 5 seconds before processing next realm
          // The worst case (~8 seconds per realm) is only 36.4 minutes, well in the TSM update interval (>=35 min)
          // If there are no scans, all realms take 14 minutes
          // If there are >= 5 scans being inserted, assume that the server has some catching up to do and ignore the delay
          if (scans.data.length < 5) await sleep(1000 * 5)
        } else await sleep(1000 * 5)
      }
    }

    if (prod) console.log(`Done in ${new Date() - timer}ms`)
    lastDone = new Date()
  }
}

monitor()
