/**
 * Dev-only service that listens to orders sent to the real API, just to have
 * some sample data when developing.
 */
const Client = require('cubic-client')
const client = new Client({
  api_url: 'https://api.nexus-stats.com'
})
const local = new Client({
  user_key: 'nexus-warframe-bot',
  user_secret: 'dev-only'
})

client.subscribe('/warframe/v1/requests', req => {
  try {
    local.post('/warframe/v1/orders', {
      user: req.user,
      offer: req.offer,
      item: req.item,
      component: req.component,
      price: req.price,
      rank: req.rank,
      quantity: req.count,
      source: 'Trade Chat'
    })
  } catch (err) {
    // just try again later, these are usually issues when bootstrapping
  }
})
