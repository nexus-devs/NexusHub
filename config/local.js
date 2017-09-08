module.exports = {
  blitz: {
    logLevel: 'monitor',
    environment: 'development'
  },
  auth: {
    core: {
      mongoURL: 'mongodb://localhost/warframe-nexus-auth'
    }
  },
  core: {
    disable: true // we'll load them in index separately
  },
  view: {
    core: {
      mongoURL: 'mongodb://localhost/warframe-nexus-view',
      endpointPath: __dirname + '/../view/endpoints',
      sourcePath: __dirname + '/../view',
      publicPath: __dirname + '/../assets'
    }
  }
}
