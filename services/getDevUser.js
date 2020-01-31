/**
 * Generates user with root perms for dev-mode services.
 */
async function getDevUser () {
  function getEndpointFile (endpoint) {
    return cubic.nodes.auth.api.server.ws.endpoints.endpoints
      .find(e => e.name === endpoint).file
  }
  let userKey
  const userSecret = 'dev'

  // In dev mode: Register new user if necessary and give it root perms
  const Register = getEndpointFile('register')
  const endpoints = cubic.nodes.auth.api.server.ws.endpoints
  const db = this.db = (await endpoints.db).db(endpoints.config.mongoDb)
  const options = { db, cache: endpoints.cache, ws: endpoints.ws }
  const res = {}
  res.status = () => res
  res.send = () => {}

  // Register dev user
  const uid = 'nexus-dev'
  const register = new (require(Register))({ ...options, ...{ url: '/register' } })
  register.res = res
  const req = { body: { user_id: uid, user_secret: 'dev' }, user: { uid: '::1' } }
  userKey = await register.newUser(req.body, req)

  // No user_key means the user is already registered
  if (!userKey) {
    userKey = (await db.collection('users').findOne({ user_id: uid })).user_key
  }

  // Give root perms
  await db.collection('users').updateOne({ user_id: uid }, { $set: { scope: 'write_root' } })

  return { userKey, userSecret }
}

module.exports = getDevUser
