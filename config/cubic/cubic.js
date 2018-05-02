const prod = process.env.NODE_ENV === 'production'

module.exports = {
  logLevel: prod ? 'monitor' : 'info'
}
