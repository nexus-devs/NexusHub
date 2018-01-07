const mongo = require('../hooks/mongo')
const db = require('../hooks/db')
const mongoUrl = 'mongodb://localhost/'

module.exports = {
  blitz: {
    logLevel: 'monitor',
    environment: 'development'
  },
  core: {
    endpointPath: __dirname + '/../api',
    mongoUrl,
    mongoDb: 'nexus-core-warframe',
    hooks: [mongo.verifyItemIndices, db.verifyItemList]
  },
  auth: {
    core: {
      mongoUrl,
      mongoDb: 'nexus-auth'
    }
  },
  view: {
    core: {
      mongoUrl,
      mongoDb: 'nexus-view',
      endpointPath: __dirname + '/../view/endpoints',
      sourcePath: __dirname + '/../view',
      publicPath: __dirname + '/../assets',
    },
    client: {
      apiUrl: 'https://api.nexus-stats.com',
      authUrl: 'https://auth.nexus-stats.com'
    }
  }
}