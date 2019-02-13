const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE
const staging = process.env.NEXUS_STAGING

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && prod && node === 'ui') {
  const fs = require('fs')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').trim()
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  const config = {
    api: {
      redisUrl,
      certPublic,
      mongoUrl,
      mongoDb: 'nexus-ui',
      limit: {
        interval: 5000,
        maxInInterval: 100
      },
      publicPath: `${process.cwd()}/ui/assets`
    },
    webpack: {
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    }
  }
  if (prod) {
    const userKey = fs.readFileSync(`/run/secrets/nexus-cubic-key`, 'utf-8').trim()
    const userSecret = fs.readFileSync(`/run/secrets/nexus-cubic-secret`, 'utf-8').trim()
    config.client = {
      apiUrl: staging ? 'wss://api.staging.nexushub.co/ws' : 'wss://api.nexushub.co/ws',
      authUrl: staging ? 'wss://auth.staging.nexushub.co/ws' : 'wss://auth.nexushub.co/ws',
      user_key: userKey,
      user_secret: userSecret
    }
    config.webpack.skipBuild = true
  }
  module.exports = config
}

// Normal environment should be fine with default config.
else {
  module.exports = {
    api: {
      limit: {
        interval: 5000,
        maxInInterval: 100
      },
      mongoDb: 'nexus-ui',
      publicPath: `${process.cwd()}/ui/assets`
    },
    webpack: {
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    }
  }
}
