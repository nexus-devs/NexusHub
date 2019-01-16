const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE

// This node is only loaded separately in production. Otherwise it's covered by
// the endpointPath of the main node.
if (process.env.DOCKER && prod && node === 'warframe') {
  const fs = require('fs')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').trim()
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  const config = {
    api: {
      mongoUrl,
      mongoDb: 'nexus-warframe',
      redisUrl,
      endpointPath: `${process.cwd()}/api/warframe`,
      baseUrl: '/warframe',
      group: 'warframe'
    }
  }
  module.exports = config
}
