const resourceHooks = require('./hooks/mongo')

/**
 * Load blitz-js framework
 */
const Blitz = require('blitz-js')({
  blitz: {
    logLevel: 'monitor',
    environment: 'development'
  },
  auth: {
    core: {
      mongoURL: 'mongodb://localhost/warframe-nexus-auth'
    }
  },
  api: {
    mongoURL: 'mongodb://localhost/warframe-nexus-core',
    limiter: {
      mid: {
        minDifference: 10
      },
      high: {
        minDifference: 50
      }
    }
  },
  core: {
    hooks: [resourceHooks.verifyItemIndices],
    endpointPath: __dirname + '/api',
    mongoURL: 'mongodb://localhost/warframe-nexus-core',
  },
  view: {
    core: {
      mongoURL: 'mongodb://localhost/warframe-nexus-view',
      endpointPath: __dirname + '/view/endpoints',
      sourcePath: __dirname + '/view/src',
      publicPath: __dirname + '/view/dist'
    },
    webpack: {
      serverConfig: __dirname + '/config/webpack/server.config.js',
      clientConfig: __dirname + '/config/webpack/client.config.js'
    }
  }
})

// Big useless intro
const intro = require('./config/logger.js')
