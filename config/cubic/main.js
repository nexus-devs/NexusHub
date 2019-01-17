const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE
console.log(process.env.DOCKER && prod && node)
// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && prod && node === 'main') {
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
      mongoDb: 'nexus-main',
      endpointPath: `${process.cwd()}/api/`,
      endpointPathExclude: /(\/warframe|\/lib)/,
      group: 'main'
    }
  }
  module.exports = config
}

// Normal environment should be fine with default config.
else {
  module.exports = {
    api: {
      endpointPath: `${process.cwd()}/api/`,
      endpointPathExclude: /\/lib/, // Merge warframe node with main node in dev mode since they'd take the same port
      mongoDb: 'nexus-main',
      group: 'main'
    }
  }
}
