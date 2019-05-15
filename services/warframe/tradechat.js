/**
 * Dev-only service that listens to orders sent to the real API, just to have
 * some sample data when developing.
 */
const getClient = require('../getClient.js')

async function monitor () {
  const Client = require('cubic-client')
  const client = new Client({
    api_url: 'wss://api.nexushub.co/ws',
    auth_url: 'wss://auth.nexushub.co/ws'
  })
  const local = await getClient()

  client.subscribe('/warframe/v1/orders', req => {
    if (req.source !== 'Warframe Market') local.post('/warframe/v1/orders', req)
  })
}
monitor()
