// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER) {
  const fs = require('fs')
  const certPrivate = fs.readFileSync(`/run/secrets/nexus-private-key`, 'utf-8')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').replace(/(\n|\r)+$/, '')
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'

  module.exports = {
    api: {
      redisUrl,
      certPublic
    },
    core: {
      mongoUrl,
      mongoDb: 'nexus-auth',
      redisUrl
    },
    certPrivate
  }
}

// Normal environment should be fine with default config.
else {
  module.exports = {
    core: {
      mongoDb: 'nexus-auth'
    }
  }
}
