const prod = process.env.NODE_ENV === 'production'
const debug = process.env.NODE_DEBUG

module.exports = {
  logLevel: debug ? 'silly' : (prod ? 'monitor' : 'info'),
  throwErrors: !prod
}
