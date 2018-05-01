// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER) {
  const fs = require('fs')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').replace(/(\n|\r)+$/, '')
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'

  module.exports = {
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
