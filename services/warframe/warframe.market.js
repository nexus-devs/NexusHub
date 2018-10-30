const prod = process.env.NODE_ENV === 'production'
const docker = process.env.DOCKER
const fs = require('fs')
let key, secret
if (prod && docker) {
  key = fs.readFileSync('/run/secrets/nexus-warframe-bot-key', 'utf-8').trim()
  secret = fs.readFileSync('/run/secrets/nexus-warframe-bot-secret', 'utf-8').trim()
}
const WebSocket = require('ws')
const Client = require('cubic-client')
const client = new Client({
  api_url: prod && docker ? 'ws://main_api:3003/ws' : 'ws://localhost:3003/ws',
  auth_url: prod && docker ? 'ws://auth_api:3030/ws' : 'ws://localhost:3030/ws',
  user_key: key || 'nexus-warframe-bot',
  user_secret: secret || 'dev-only'
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
    setInterval(this.updateOrders, 1000 * 60 * 5)
  }

  /**
   * Listen to realtime orders on warframe.market
   */
  initWs () {
    this.ws = new WebSocket('wss://warframe.market/socket')
    this.ws.on('close', () => this.initWs())
    this.ws.on('error', () => this.initWs())
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
        if (!item.components.find(c => c.name === 'Set').tradable) continue
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
            platform: order.platform.toUpperCase(),
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
    try {
      client.get('/warframe/v1/orders/clearExternal')
    } catch (err) {
      // just try again later, these are usually issues when bootstrapping
    }
  }
}

const wfm = new WFM()
wfm.init()
