// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER) {
  const prod = process.env.NODE_ENV === 'production'
  const fs = require('fs')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').replace(/(\n|\r)+$/, '')
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  const config = {
    core: {
      mongoUrl,
      mongoDb: 'nexus-warframe',
      redisUrl,
      endpointPath: `${process.cwd()}/api/warframe`,
      baseUrl: '/warframe',
      group: 'warframe'
    }
  }
  if (prod) {
    config.core.apiUrl = 'http://main_api:3003'
    config.core.authUrl = 'http://auth_api:3030'
    config.core.userKey = fs.readFileSync('/run/secrets/nexus-warframe-key', 'utf-8').replace(/(\n|\r)+$/, '')
    config.core.userSecret = fs.readFileSync('/run/secrets/nexus-warframe-secret', 'utf-8').replace(/(\n|\r)+$/, '')
  }
  module.exports = config
}

// Normal environment should be fine with default config.
else {
  module.exports = {
    core: {
      endpointPath: `${process.cwd()}/api/warframe`,
      baseUrl: '/warframe',
      mongoDb: 'nexus-warframe',
      group: 'warframe'
    }
  }
}
