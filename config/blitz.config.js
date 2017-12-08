const mongo = require('../hooks/mongo')
const db = require('../hooks/db')

module.exports = {
  blitz: {
    logLevel: 'monitor',
    environment: 'development'
  },
  core: {
    endpointPath: __dirname + '/../api',
    mongoUrl: 'mongodb://127.0.0.1/warframe-nexus-core',
    hooks: [mongo.verifyItemIndices, db.verifyItemList]
  },
  auth: {
    core: {
      mongoUrl: 'mongodb://127.0.0.1/warframe-nexus-auth'
    }
  },
  view: {
    core: {
      mongoUrl: 'mongodb://127.0.0.1/warframe-nexus-view',
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
