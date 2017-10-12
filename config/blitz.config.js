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
    },
    client: {
      api: 'https://api.nexus-stats.com',
      auth: 'https://auth.nexus-stats.com',
      user_key: 'UaGcdduMzAdMmuML9Sk45epsaxjh74x1B97qdzYkgBfI9CDaZFoYAhu5YPA6w982',
      user_secret: 'OHCufWlBHM4izpfBcZB3HYN2IqBrFpBk8Z1xjEhlQ6VeKLgQ0pX03TjQmHNoIYEI'
    }
  }
}
