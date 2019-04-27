/**
 * Clear Warframe's Order every few minutes.
 */
const prod = process.env.NODE_ENV === 'production'
const docker = process.env.DOCKER
const staging = process.env.NEXUS_STAGING
let userKey, userSecret, apiUrl, authUrl
if (docker && prod) {
  const fs = require('fs')
  userKey = fs.readFileSync(`/run/secrets/nexus-cubic-key`, 'utf-8').trim()
  userSecret = fs.readFileSync(`/run/secrets/nexus-cubic-secret`, 'utf-8').trim()
  apiUrl = staging ? 'wss://api.staging.nexushub.co/ws' : 'wss://api.nexushub.co/ws'
  authUrl = staging ? 'wss://auth.staging.nexushub.co/ws' : 'wss://auth.nexushub.co/ws'
} else {
  userKey = cubic.nodes.auth.api.systemUser.user_key
  userSecret = cubic.nodes.auth.api.systemUser.user_secret
}
const config = {
  api_url: apiUrl,
  auth_url: authUrl,
  user_key: userKey,
  user_secret: userSecret
}
console.log(config)
const Client = require('cubic-client')
const client = new Client(config)

// This repeats the cleaning process with a delay of 1 minute between
// clearing. This does not mean that it is cleared every minute.
async function monitor () {
  while (true) {
    await client.get('/warframe/v1/orders/clear')
    await new Promise(resolve => setTimeout(resolve, 1000 * 60))
  }
}
monitor()
