const prod = process.env.NODE_ENV === 'production'
const debug = process.env.NODE_DEBUG
const docker = process.env.DOCKER

module.exports = {
  logLevel: debug ? 'silly' : (prod ? 'monitor' : 'info'),
  skipAuthCheck: prod && docker,
  throwErrors: !prod
}
