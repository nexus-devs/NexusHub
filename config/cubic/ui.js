const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE
const staging = process.env.NEXUS_STAGING
const group = node ? node.split('-')[0] : null // auth-core, ui-core, etc, take first word before dash

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && (prod ? group === 'ui' : true)) {
  const fs = require('fs')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').trim()
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  const config = {
    api: {
      redisUrl,
      certPublic,
      limit: {
        interval: 5000,
        maxInInterval: 100
      },
      publicPath: `${process.cwd()}/ui/assets`
    },
    core: {
      mongoUrl,
      mongoDb: 'nexus-ui',
      redisUrl,
      publicPath: `${process.cwd()}/ui/assets`
    },
    webpack: {
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    }
  }
  if (prod) {
    config.core.apiUrl = 'ws://ui_api:3000/ws'
    config.core.authUrl = 'ws://auth_api:3030/ws'
    config.core.userKey = fs.readFileSync('/run/secrets/nexus-ui-key', 'utf-8').trim()
    config.core.userSecret = fs.readFileSync('/run/secrets/nexus-ui-secret', 'utf-8').trim()
    config.client = {
      apiUrl: staging ? 'wss://api.staging.nexushub.co/ws' : 'wss://api.nexushub.co/ws',
      authUrl: staging ? 'wss://auth.staging.nexushub.co/ws' : 'wss://auth.nexushub.co/ws'
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
      publicPath: `${process.cwd()}/ui/assets`
    },
    core: {
      mongoDb: 'nexus-ui',
      publicPath: `${process.cwd()}/ui/assets`
    },
    webpack: {
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    }
  }
}
