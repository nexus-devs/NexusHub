const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && prod && node === 'auth') {
  const fs = require('fs')
  const certPrivate = fs.readFileSync(`/run/secrets/nexus-private-key`, 'utf-8')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').trim()
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  const config = {
    api: {
      redisUrl,
      certPublic,
      mongoUrl,
      mongoDb: 'nexus-auth',
      skipInitialSetup: true
    },
    certPrivate
  }
  module.exports = config
}

// Normal environment should be fine with default config.
else {
  module.exports = {
    api: {
      mongoDb: 'nexus-auth'
    }
  }
}
