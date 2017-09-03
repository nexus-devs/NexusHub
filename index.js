const hooks = require('./hooks/mongo')
const Core = require('blitz-js-core')

/**
 * Load blitz-js framework
 */
const Blitz = require('blitz-js')({
  blitz: {
    logLevel: 'info',
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
    disable: true // we'll load them below to be more clear
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

/**
 * Core worker node for heavy processing. Item statistics, player data, etc.
 */
blitz.hook(hooks.verifyItemIndices)
blitz.use(new Core({
  endpointPath: __dirname + '/api/core',
  mongoURL: 'mongodb://localhost/warframe-nexus-core',
  id: 'core_worker'
}))

/**
 * Client worker for simple read queries. We run this one separately to improve
 * accessibility to the processed data, in case core workers are busy.
 */
blitz.use(new Core({
  endpointPath: __dirname + '/api/client',
  mongoURL: 'mongodb://localhost/warframe-nexus-core',
  id: 'client_worker'
}))

// Big useless intro
const intro = require('./config/logger.js')
