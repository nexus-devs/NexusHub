/**
 * Checks if new scans from TSM exist and add them to the database.
 * Only do this every 10 minutes, since new scans are only processed at max 1 per hour.
 */
const getClient = require('../getClient.js')
const TSMRequest = require(`${process.cwd()}/api/lib/tsm-request.js`)
const prod = process.env.NODE_ENV === 'production'
const staging = process.env.NEXUS_STAGING
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
if (prod) {
  process.on('uncaughtException', (err) => {
    console.log(err)
    process.exit(1)
  })
  process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
  })
}

async function monitor () {
  const client = await getClient()
  let lastDone = new Date()
  const TSMReq = new TSMRequest()

  if (!TSMReq.tsmKey) return

  if (staging) console.log('Starting in staging mode (only retrieve the last 7 days)')

  // Kill service if it gets stuck (5 minutes without activity). Docker will auto-restart it.
  setInterval(() => {
    if (prod && new Date() - lastDone > 1000 * 60 * 5) {
      process.exit()
    }
  }, 1000 * 60 * 5)

  while (true) {
    const reqRealms = await TSMReq.get('/realms')
    if (!reqRealms.success) console.log(`Could not fetch realms: ${reqRealms.error}`)
    else {
      const realms = reqRealms.data.filter(r => [200, 201].includes(r.region_id)) // BCC EU and US
      for (const realm of realms) {
        const lastScan = await client.get(`/wow-classic/v1/scans/latest/${realm.master_slug}`) // TODO

        // If there are no scans or the last scan is outdated
        lastScan.scannedAt = lastScan.error ? new Date(0) : new Date(lastScan.scannedAt)
        let lastScanUnix = Math.floor(lastScan.scannedAt.getTime() / 1000)
        if (lastScanUnix < realm.last_modified) {
          const scans = await TSMReq.get(`/realm/${realm.master_slug}/scans`) // TODO
          if (!scans.success) {
            console.log(`Could not fetch scans for ${realm.master_slug}: ${reqRealms.error}`) // TODO
            continue
          }

          // If staging, only add entries from max 7 days ago
          if (staging) {
            lastScanUnix = new Date()
            lastScanUnix.setDate(lastScanUnix.getDate() - 7)
            lastScanUnix = Math.floor(lastScanUnix.getTime() / 1000)
          }

          // Sort TSM scans by date and add them
          // Also remove scans that were already added
          // Do old -> new so there aren't data holes if the service get's interrupted
          scans.data = scans.data.filter((s) => s.last_modified > lastScanUnix).sort((a, b) => a.last_modified - b.last_modified)
          console.log(`Inserting ${scans.data.length} scans for ${realm.master_slug}...`) // TODO
          for (const scan of scans.data) {
            const scannedAt = scan.last_modified * 1000

            // Await to avoid overloading the TSM servers
            await client.post('/wow-classic/v1/scans/new', { slug: realm.master_slug, region: realm.region, scanId: scan.id, scannedAt }) // TODO
            lastDone = new Date()
          }
          console.log('Inserting current data...')
          await client.post('/wow-classic/v1/scans/current', { slug: realm.master_slug }) // TODO
          console.log('...done\n')
        } else console.log(`No new scans found for ${realm.master_slug}\n`) // TODO

        lastDone = new Date()
      }

      lastDone = new Date()
      await sleep(300) // Breathing room
    }
  }
}

monitor()
