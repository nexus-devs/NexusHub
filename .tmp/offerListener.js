const Client = require('../../cubic/cubic-client')
const client = new Client({
  api_url: 'https://api.nexus-stats.com'
})
const local = new Client()

client.subscribe('/warframe/v1/requests', req => {
  console.log(req.user, req.item, req.component)
  local.post('/warframe/v1/orders/new', {
    user: req.user,
    offer: req.offer,
    item: req.item,
    component: req.component,
    price: req.price,
    rank: req.rank,
    count: req.count,
    message: req.rawMessage,
    source: 'Trade Chat'
  })
})
