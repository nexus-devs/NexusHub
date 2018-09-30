const prod = process.env.NODE_ENV === 'production'
const WebSocket = require('ws')
const Client = require('cubic-client')
const client = new Client({
  api_url: prod ? 'http://main_api:3003' : 'http://localhost:3003',
  auth_url: prod ? 'http://auth_api:3030' : 'http://localhost:3030',
  user_key: cubic.config.warframe.core.userKey,
  user_secret: cubic.config.warframe.core.userSecret
})

/**
 * Get item offers from warframe.market in realtime, similar to the trade chat.
 */
class WFM {
  constructor () {
    this.items = []
  }

  async init () {
    this.initWs()
    await this.initItems()
    await this.updateOrders()
    setInterval(this.initItems, 1000 * 60)
    setInterval(this.updateOrders, 1000 * 60 * 3)
  }

  /**
   * Listen to realtime orders on warframe.market
   */
  initWs () {
    this.ws = new WebSocket('wss://warframe.market/socket')
    this.ws.on('error', console.error)
    this.ws.on('close', () => this.initWs())
    this.ws.on('open', () => {
      this.ws.send(JSON.stringify({ type: '@WS/SUBSCRIBE/MOST_RECENT' }))
    })
    this.ws.on('message', data => {
      data = JSON.parse(data)

      if (data.type === '@WS/SUBSCRIPTIONS/MOST_RECENT/NEW_ORDER') {
        this.postOrder(data.payload.order)
      }
    })
  }

  /**
   * Store orders on our resource servers
   */
  postOrder (order) {
    if (order.platform === 'pc') {
      let matchedItem
      let matchedComponent

      for (let item of this.items) {
        const name = item.name.split(' ')
        const orderName = order.item.en.item_name.split(' ')

        for (let i = 0; i < name.length; i++) {
          if (name[i] === orderName[i] && i === name.length - 1) {
            matchedItem = item.name

            if (orderName.length === name.length) {
              matchedComponent = 'Set'
            } else {
              matchedComponent = orderName.slice(name.length).join()
            }
          }
          if (name[i] !== orderName[i]) {
            break
          }
        }
      }

      if (matchedItem && matchedComponent) {
        try {
          client.post('/warframe/v1/orders', {
            user: order.user.ingame_name,
            offer: order.order_type === 'sell' ? 'Selling' : 'Buying',
            item: matchedItem,
            component: matchedComponent,
            price: order.platinum,
            rank: order.mod_rank,
            quantity: order.quantity,
            source: 'Warframe Market',
            wfmName: order.item.url_name
          })
        } catch (err) {
          // just try again later, these are usually issues when bootstrapping
        }
      }
    }
  }

  /**
   * Get list of items for comparison with wfm
   */
  async initItems () {
    try {
      this.items = await client.get('/warframe/v1/items')
    } catch (err) {
      setTimeout(this.initItems, 1000 * 30)
    }
  }

  /**
   * Discard old offers and change user's online status
   */
  async updateOrders () {
    // .emit() instead of .get() so it won't get the queue stuck. The cleaning
    // task may take very long.
    client.emit('GET', '/warframe/v1/orders/clearExternal')
  }
}

const wfm = new WFM()
wfm.init()
