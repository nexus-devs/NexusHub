module.exports = {
  blitz: {
    logLevel: 'monitor',
    environment: 'development'
  },
  auth: {
    core: {
      mongoUrl: 'mongodb://127.0.0.1/warframe-nexus-auth'
    }
  },
  core: {
    disable: true // we'll load them in index separately
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
