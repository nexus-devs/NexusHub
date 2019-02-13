const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE
let config = { api: {} }

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && prod && node === 'api') {
  const fs = require('fs')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').trim()
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  config = {
    redisUrl,
    certPublic,
    mongoUrl
  }
}

config = {
  ...config,
  ...{
    mongoDb: 'nexus-api',
    endpointPath: `${process.cwd()}/api/`,
    endpointPathExclude: /\/lib/
  }
}

module.exports = config
