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
const switchContext = async() => {
  await blitz.pingAll(blitz.nodes.view.workers)
  setTimeout(async() => {
    console.log(' ')
    console.log(`:: blitz.js stack ready in ${(new Date - epoch) / 1000}s`)
    console.log(intro.border)
    console.log(' ')

    // Activate info logging two levels down. Recursion isn't possible because
    // references can't be preserved across processes
    if (blitz.config.local.environment) {
      for (let prop in blitz.nodes) {
        let node = blitz.nodes[prop]

        node.run(function() {
          blitz.config.local.logLevel = 'info'
          for (let prop in blitz.nodes) {
            let node = blitz.nodes[prop]

            node.run(function() {
              blitz.config.local.logLevel = 'info'
            })
          }
        })
      }
      blitz.config.local.logLevel = 'info'
    }
  }, 1500) // too lazy to add ping propagation function right now
}

/**
 * Import hooks
 */
const resourceHooks = require('./hooks/mongo')

/**
 * Authentication Server for incoming api connections
 */
const Auth = require('blitz-js-auth')
blitz.use(new Auth({
  mongoURL: 'mongodb://localhost/warframe-nexus-auth'
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
  endpointPath: __dirname + '/endpoints/api',
  mongoURL: 'mongodb://localhost/warframe-nexus-core',
}))

/**
 * View node for rendering webpages
 */
const View = require('../../blitz/blitz-js-view')
blitz.use(new View({
  mongoURL: 'mongodb://localhost/warframe-nexus-view',
  endpointPath: __dirname + '/endpoints/view',
  sourcePath: __dirname + '/view/src',
  publicPath: __dirname + '/view/dist',
  cacheDuration: 1
}))

switchContext()
