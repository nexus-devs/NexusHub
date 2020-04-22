const Endpoint = require('cubic-ui/endpoint')
const Cookies = require('cookies')
const request = require('requestretry').defaults({ fullResponse: false })

class Index extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.url = '/wow-classic/items/:slug?/:item'
    this.schema.view = '/sites/wow-classic/items/overview.vue'
  }

  async main (req, res) {
    const slug = req.params.slug
    const item = req.params.item
    const cookies = new Cookies(req, res)
    const lastVisitedRealm = cookies.get('lastVisitedRealm')

    const itemId = !isNaN(parseFloat(item)) && isFinite(item) ? parseInt(item) : false
    if (itemId) {
      const storedItem = await request({ url: `https://api.nexushub.co/wow-classic/v1/item/${itemId}`, json: true })
      if (storedItem) {
        res.status(301).redirect(`/wow-classic/items/${slug ? slug + '/' : ''}${storedItem.uniqueName}`)
        return
      }
    }

    if (lastVisitedRealm && !slug) res.status(307).redirect(`/wow-classic/items/${lastVisitedRealm}/${item}`)
    else super.main(req, res)
  }
}

module.exports = Index
