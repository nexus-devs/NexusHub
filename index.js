const config = require('./config/local.js')
const hooks = require('./hooks/mongo')
const Core = require('../../blitz/blitz-js-core')

/**
 * Load blitz-js framework
 */
const Blitz = require('../../blitz/blitz-js')(config)

/**
 * Core worker node for heavy processing. Item statistics, player data, etc.
 */
blitz.hook('core_worker', hooks.verifyItemIndices)
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
