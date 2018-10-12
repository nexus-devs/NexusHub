/**
 * Dev-only service that listens to orders sent to the real API, just to have
 * some sample data when developing.
 */
const Client = require('cubic-client')
const client = new Client({
  api_url: 'wss://api.staging.nexushub.co/ws',
  auth_url: 'wss://auth.staging.nexushub.co/ws'
})
const local = new Client({
  user_key: 'nexus-warframe-bot',
  user_secret: 'dev-only'
})

client.subscribe('/warframe/v1/orders', req => {
  try {
    local.post('/warframe/v1/orders', req)
  } catch (err) {
    // just try again later, these are usually issues when bootstrapping
  }
})
