const Blitz = require('blitz-js')
const Api = require('blitz-js-api')
const Core = require('blitz-js-core')
const Auth = require('blitz-js-auth')
const View = require('blitz-js-view')
const wfhooks = require('./hooks/warframe.js')

/**
 * Load nodes with custom config
 */
const blitz = new Blitz({
  logLevel: 'info'
})
blitz.use(new Auth({
  core: {
    mongoDb: 'nexus-auth'
  }
}))
blitz.use(new View({
  client: {
    apiUrl: 'https://api.nexus-stats.com',
    authUrl: 'https://auth.nexus-stats.com'
  },
  core: {
    mongoDb: 'nexus-view',
  }
}))
blitz.hook('warframe.core', wfhooks.verifyIndices)
blitz.hook('warframe.core', wfhooks.verifyItemList)
blitz.use(new Api({
  group: 'warframe'
}))
blitz.use(new Core({
  endpointPath: __dirname +'/api/warframe',
  baseUrl: '/warframe',
  mongoDb: 'nexus-warframe',
  group: 'warframe'
}))
