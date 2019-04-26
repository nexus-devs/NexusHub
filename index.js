const docker = require('./services/bootstrap/docker.js')
const regular = require('./services/bootstrap/regular.js')
const config = { cubic: require('./config/cubic/cubic') }
const Cubic = require('cubic')

// eslint-disable-next-line no-new
new Cubic(config.cubic)

/**
 * Load cubic nodes separately so they can run in their own docker container or
 * launch them in a single controller in dev mode.
 */
if (process.env.DOCKER && process.env.NODE_ENV === 'production') {
  docker()
}
else {
  regular()
}
