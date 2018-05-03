const prod = process.env.NODE_ENV === 'production'

module.exports = {
  logLevel: prod ? 'monitor' : 'info',
  skipAuthCheck: prod && process.env.DOCKER
}
