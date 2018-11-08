/**
 * Dev-only service that listens to orders sent to the real API, just to have
 * some sample data when developing.
 */
const Client = require('cubic-client')
const client = new Client({
  api_url: 'wss://api.nexushub.co/ws',
  auth_url: 'wss://auth.nexushub.co/ws'
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

setInterval(() => {
  local.get('/warframe/v1/orders/clearExternal')
}, 1000 * 60 * 3)
