const Endpoint = require('cubic-ui/endpoint')
const Cookies = require('cookies')

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic/items/:slug?/:item'
    this.schema.view = '/sites/wow-classic/items/overview.vue'
  }

  async main (req, res) {
    const cookies = new Cookies(req, res)
    const lastVisitedRealm = cookies.get('lastVisitedRealm')

    if (lastVisitedRealm && !req.params.slug) res.status(301).redirect(`/wow-classic/items/${lastVisitedRealm}/${req.params.item}`)
    else super.main(req, res)
  }
}

module.exports = Index
