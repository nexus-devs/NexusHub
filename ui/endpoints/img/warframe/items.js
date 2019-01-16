const Endpoint = require('cubic-api/endpoint')
const request = require('requestretry').defaults({ fullResponse: false })

/**
 * Helper endpoint to get item images from the warframe-items repo on Github.
 * These responses should be cached by Cloudflare, so what we essentially do
 * is just putting a cache between us and Github while providing the images
 * through our domain.
 */
class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/img/warframe/items/:item'
    this.schema.limit = {
      disable: true
    }
  }

  async main (req, res) {
    const item = req.params.item
    const image = await request({
      url: `https://raw.githubusercontent.com/WFCD/warframe-items/development/data/img/${item}`,
      encoding: null
    })
    res.send(image)
  }
}

module.exports = Index
