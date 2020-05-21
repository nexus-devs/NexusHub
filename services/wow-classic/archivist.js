/**
 * Acts as a calling helper service for the TSM scan archive.
 */
const getClient = require('../getClient.js')
const prod = process.env.NODE_ENV === 'production'
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

  // Kill service if it gets stuck (1 hour without activity). Docker will auto-restart it.
  setInterval(() => {
    if (prod && new Date() - lastDone > 1000 * 60 * 60) {
      process.exit()
    }
  }, 1000 * 60 * 60)

  while (true) {
    // Archive 20k docs per call
    await client.post('/wow-classic/v1/scans/archive', { batchSize: 10000, batchAmount: 20, regionSize: 3000, regionAmount: 1 })

    // Run more archive calls between 4am and 10am (least amount of activity)
    const currentHour = new Date().getHours()
    if (currentHour >= 4 && currentHour <= 10) await sleep(1000 * 20)
    else await sleep(1000 * 60)

    lastDone = new Date()
  }
}

monitor()
