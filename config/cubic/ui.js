const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE
const staging = process.env.NEXUS_STAGING
let config = { api: {} }

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && prod && node === 'ui') {
  const fs = require('fs')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').trim()
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  config = {
    api: {
      redisUrl,
      certPublic,
      mongoUrl
    }
  }
  const userKey = fs.readFileSync(`/run/secrets/nexus-cubic-key`, 'utf-8').trim()
  const userSecret = fs.readFileSync(`/run/secrets/nexus-cubic-secret`, 'utf-8').trim()
  config.client = {
    apiUrl: staging ? 'wss://api.staging.nexushub.co/ws' : 'wss://api.nexushub.co/ws',
    authUrl: staging ? 'wss://auth.staging.nexushub.co/ws' : 'wss://auth.nexushub.co/ws'
  }
  config.server = {
    apiUrl: 'ws://nexus_api:3003',
    authUrl: 'ws://nexus_auth:3030',
    user_key: userKey,
    user_secret: userSecret
  }
  config.webpack.skipBuild = true
}

config = {
  api: {
    ...config.api,
    ...{
      limit: {
        interval: 5000,
        maxInInterval: 100
      },
      mongoDb: 'nexus-ui',
      publicPath: `${process.cwd()}/ui/assets`
    }
  },
  webpack: {
    ...config.webpack,
    ...{
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    }
  }
}

module.exports = config
