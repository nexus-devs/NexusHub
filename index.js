/**
 * blitz.js setup
 */
const epoch = new Date
const Blitz = require('blitz-js')({
  logLevel: 'monitor',
  environment: 'development'
})

/**
 * Big useless intro
 */
const intro = require('./config/logger.js')

/**
 * Import hooks
 */
const resourceHooks = require('./hooks/mongo')

/**
 * Authentication Server for incoming api connections
 */
const Auth = require('blitz-js-auth')
blitz.use(new Auth({
  core: {
    mongoURL: 'mongodb://localhost/warframe-nexus-auth'
  }
}))

/**
 * API Server for resource nodes
 */
const API = require('blitz-js-api')
blitz.use(new API({
  mongoURL: 'mongodb://localhost/warframe-nexus-core',
  limiter: {
    mid: {
      minDifference: 10
    },
    high: {
      minDifference: 50
    }
  }
}))

/**
 * Resource worker which serves data to the API
 */
const Core = require('blitz-js-core')
blitz.hook(Core, resourceHooks.verifyItemIndices)
blitz.use(new Core({
  endpointPath: __dirname + '/api',
  mongoURL: 'mongodb://localhost/warframe-nexus-core',
}))

/**
 * View node for rendering webpages
 */
const View = require('blitz-js-view')
blitz.use(new View({
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
}))
