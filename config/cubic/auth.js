const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE
let config = { api: {} }

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && prod && node === 'auth') {
  const fs = require('fs')
  const certPrivatePath = '/run/secrets/nexus-private-key'
  const certPublicPath = '/run/secrets/nexus-public-key'
  const certPrivate = fs.readFileSync('/run/secrets/nexus-private-key', 'utf-8')
  const certPublic = fs.readFileSync('/run/secrets/nexus-public-key', 'utf-8')
  const dbSecret = fs.readFileSync('/run/secrets/mongo-admin-pwd', 'utf-8').trim()
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  config = {
    api: {
      redisUrl,
      certPublic,
      mongoUrl
    },
    skipInitialSetup: true,
    certPrivatePath,
    certPublicPath,
    certPrivate
  }
  module.exports = config
}

config.api.mongoDb = 'nexus-auth'

module.exports = config
