/**
 * Generates authenticated client to prod/staging/local.
 * This is mostly used for services that trigger updates via the API
 * periodically
 */
const prod = process.env.NODE_ENV === 'production'
const docker = process.env.DOCKER
let userKey, userSecret, apiUrl, authUrl

async function getClient () {
  // On staging/prod build? Just read use the pre-generated credentials.
  if (docker && prod) {
    const fs = require('fs')
    userKey = fs.readFileSync('/run/secrets/nexus-cubic-key', 'utf-8').trim()
    userSecret = fs.readFileSync('/run/secrets/nexus-cubic-secret', 'utf-8').trim()
    apiUrl = 'ws://api_warframe:3003/ws'
    authUrl = 'ws://auth:3030/ws'
  }

  // In dev mode: Register new user if necessary and give it root perms
  else {
    const getDevUser = require('./getDevUser.js')
    const user = await getDevUser()
    userKey = user.userKey
    userSecret = user.userSecret
  }

  const config = {
    api_url: apiUrl || 'ws://localhost:3003/ws',
    auth_url: authUrl || 'ws://localhost:3030/ws',
    user_key: userKey,
    user_secret: userSecret
  }
  const Client = require('cubic-client')
  const client = new Client(config)
  return client
}

module.exports = getClient
