const prod = process.env.NODE_ENV === 'production'
const group = process.env.NEXUS_TARGET_NODE.split('-')[0]

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && (prod ? group === 'main' : true)) {
  const fs = require('fs')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').replace(/(\n|\r)+$/, '')
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  const config = {
    api: {
      redisUrl,
      certPublic,
      group: 'main'
    },
    core: {
      mongoUrl,
      mongoDb: 'nexus-main',
      redisUrl,
      endpointPath: `${process.cwd()}/api/`,
      endpointPathExclude: /\/warframe/,
      group: 'main'
    }
  }
  if (prod) {
    config.core.apiUrl = 'http://main_api:3003'
    config.core.authUrl = 'http://auth_api:3030'
    config.core.userKey = fs.readFileSync('/run/secrets/nexus-main-key', 'utf-8').replace(/(\n|\r)+$/, '')
    config.core.userSecret = fs.readFileSync('/run/secrets/nexus-main-secret', 'utf-8').replace(/(\n|\r)+$/, '')
  }
  module.exports = config
}

// Normal environment should be fine with default config.
else {
  module.exports = {
    api: {
      group: 'main'
    },
    core: {
      endpointPath: `${process.cwd()}/api/`,
      endpointPathExclude: /\/warframe/,
      mongoDb: 'nexus-main',
      group: 'main'
    }
  }
}
