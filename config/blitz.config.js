const wf = require('../hooks/warframe.js')
const mongoUrl = 'mongodb://localhost/'

module.exports = {
  blitz: {
    logLevel: 'silly',
    environment: 'development'
  },
  core: {
    endpointPath: __dirname + '/../api/core-warframe',
    mongoUrl,
    mongoDb: 'nexus-core-warframe',
    hooks: [ wf.verifyIndices, wf.verifyItemList ],
    id: 'warframe_core'
  },
  auth: {
    core: {
      mongoUrl,
      mongoDb: 'nexus-core-auth'
    }
  },
  view: {
    core: {
      mongoUrl,
      mongoDb: 'nexus-core-view',
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