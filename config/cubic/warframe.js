// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER) {
  const fs = require('fs')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').replace(/(\n|\r)+$/, '')
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'

  module.exports = {
    core: {
      mongoUrl,
      mongoDb: 'nexus-warframe',
      redisUrl,
      endpointPath: `${process.cwd()}/api/warframe`,
      baseUrl: '/warframe',
      group: 'warframe'
    }
  }
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
