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

  if (!await TSMReq.init()) {
    console.log('Couldn\'t initialize TSMRequest')
    return
  }

  if (staging) console.log('Starting in staging mode (only retrieve the last 7 days)')

  // Kill service if it gets stuck (5 minutes without activity). Docker will auto-restart it.
  setInterval(() => {
    if (prod && new Date() - lastDone > 1000 * 60 * 5) {
      process.exit()
    }
  }, 1000 * 60 * 5)

  while (true) {
    const regionLookup = {
      13: 'us',
      14: 'eu'
    }
    const reqRealms = await TSMReq.get('realm', '/realms')
    const regions = reqRealms.items.filter(r => [13, 14].includes(r.regionId))

    for (const region of regions) {
      for (const realm of region.realms) {
        const realmSlug = realm.name
          .replace(/'/g, '')
          .replace(/ /g, '-')
          .toLowerCase()

        for (const auctionHouse of realm.auctionHouses) {
          const auctionHouseSlug = auctionHouse.type.toLowerCase()
          const slug = `${realmSlug}-${auctionHouseSlug}`

          const lastScan = await client.get(`/wow-classic/v1/scans/latest/${slug}`)
          const lastScannedAt = lastScan.error ? new Date(0) : new Date(lastScan.scannedAt)
          let lastScannedUnix = Math.floor(lastScannedAt.getTime() / 1000)
          if (lastScannedUnix >= auctionHouse.lastModified) {
            console.log(`No new scans found for ${slug}\n`)
            lastDone = new Date()
            continue
          }

          let page = 1
          let totalPages = 1
          while (page <= totalPages) {
            let scans = {}
            try {
              scans = await TSMReq.get('pricing', `/ah/${auctionHouse.auctionHouseId}/scan?page=${page}&pageSize=50`)
              totalPages = scans.metadata.totalPages
            } catch (err) {
              console.log(`Could not fetch scans for ${slug}: ${err}`)
              break
            }

            // If staging, only add entries from max 7 days ago
            if (staging) {
              lastScannedUnix = new Date()
              lastScannedUnix.setDate(lastScannedUnix.getDate() - 7)
              lastScannedUnix = Math.floor(lastScannedUnix.getTime() / 1000)
            }

            // Filter new scans - sort them from old->new to avoid data holes on service interruption
            scans.items = scans.items
              .filter(s => s.scanTime > lastScannedUnix)
              .sort((a, b) => a.scanTime - b.scanTime)
            console.log(`Inserting ${scans.items.length} scans for ${slug}...`)
            for (const scan of scans.items) {
              // Await to avoid overloading the TSM servers
              try {
                await client.post('/wow-classic/v1/scans/new', {
                  slug,
                  region: regionLookup[region.regionId],
                  scanId: scan.scanId,
                  scannedAt: scan.scanTime * 1000,
                  auctionHouseId: auctionHouse.auctionHouseId
                })
                lastDone = new Date()
              } catch (err) {
                console.log(`Could not insert scan ${scan.scanId} for ${slug}: ${err}`)
              }
            }

            // Break loop if old scans in current page
            if (scans.items.length < scans.metadata.itemsPerPage) break
            page++
          }

          console.log('Inserting current data...')
          await client.post('/wow-classic/v1/scans/current', {
            slug,
            auctionHouseId: auctionHouse.auctionHouseId
          })
          console.log('...done\n')
          lastDone = new Date()
        }
      }
    }

    lastDone = new Date()
    await sleep(300) // Breathing room
  }
}

monitor()
