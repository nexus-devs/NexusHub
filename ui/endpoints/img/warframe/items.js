const Endpoint = cubic.nodes.ui.core.Endpoint

/**
 * Helper endpoint to get item images from the warframe-items repo on Github.
 * These responses should be cached by Cloudflare, so what we essentially do
 * is just putting a cache between us and Github while providing the images
 * through our domain.
 */
class Index extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.url = '/img/warframe/items/:item'
    this.schema.limit = {
      disable: true
    }
  }

  async main (req, res) {
    const item = req.params.item
    res.redirect(`https://raw.githubusercontent.com/WFCD/warframe-items/development/data/img/${item}`)
  }
}

module.exports = Index
