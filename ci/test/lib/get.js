/**
 * Helper function get http response as soon as server loaded
 */
const request = require('request-promise')
let counter = 0

module.exports = async function get (url, port = 3003) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async resolve => {
    try {
      resolve(await request.get(`http://localhost:${port}${url}`))
    } catch (err) {
      counter++
      if (counter > 20) {
        console.error(err.message)
        console.log('Retrying in 500ms...')
      }
      setTimeout(async () => {
        resolve(await get(url, port))
      }, 500)
    }
  })
}
