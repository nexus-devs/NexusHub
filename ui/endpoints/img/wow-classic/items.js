const Endpoint = require('cubic-api/endpoint')
const request = require('requestretry').defaults({ fullResponse: false })

/**
 * Helper endpoint to get item images from Blizzard.
 * These responses should be cached by Cloudflare, so what we essentially do
 * is just putting a cache between us and Blizzard while providing the images
 * through our domain.
 */
class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/img/wow-classic/items/:icon'
    this.schema.limit = {
      disable: true
    }
    this.schema.query = [{
      name: 'size',
      default: 56,
      description: 'Image size in pixel (only 56, 36 and 18 are valid).'
    }]
  }

  async main (req, res) {
    const icon = req.params.icon
    const size = req.query.size

    const image = await request({
      url: `https://render-classic-us.worldofwarcraft.com/icons/${size}/${icon}`,
      encoding: null
    })

    res.send(image)
  }
}

module.exports = Index
