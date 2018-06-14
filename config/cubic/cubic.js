const prod = process.env.NODE_ENV === 'production'
const docker = process.env.DOCKER

module.exports = {
  logLevel: prod ? 'monitor' : 'info',
  skipAuthCheck: prod && docker,
  throwErrors: !prod
}
