const prod = process.NODE_ENV === 'production'
const WebSocket = require('ws')
const ws = new WebSocket('wss://warframe.market/socket')
const Client = require('cubic-client')
const client = new Client({
  api_url: prod ? 'https://api.nexus-stats.com' : 'http://localhost:3003',
  auth_url: prod ? 'https://auth.nexus-stats.com' : 'http://localhost:3030'
})
const request = require('requestretry').defaults({ fullResponse: false })

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
    setInterval(this.updateOrders, 1000 * 60)
  }

  initWs () {
    ws.on('open', () => {
      ws.send(JSON.stringify({ type: '@WS/SUBSCRIBE/MOST_RECENT' }))
    })
    ws.on('message', data => {
      data = JSON.parse(data)

      if (data.type === '@WS/SUBSCRIPTIONS/MOST_RECENT/NEW_ORDER') {
        this.postOrder(data.payload.order)
      }
    })
    ws.on('error', console.error)
  }

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
            apiName: order.item.url_name
          })
        } catch (err) {
          // just try again later, these are usually issues when bootstrapping
        }
      }
    }
  }

  async initItems () {
    await client.connections()
    this.items = await client.get('/warframe/v1/items')
  }

  /**
   * Discard old offers and change user's online status
   */
  async updateOrders () {
    const orders = await client.get('/warframe/v1/orders?item=a&all=true')
    const items = []
    let discard = []

    // Aggregate all users so we only need to fetch their profile once
    for (let order of orders) {
      if (order.source === 'Warframe Market') {
        if (!items.find(i => i === order.apiName)) items.push(order.apiName)
      }
    }

    // Gather old orders, update user's online status
    for (let item of items) {
      const WfmOrders = await request(`https://api.warframe.market/v1/items/${item}/orders`)
      const wfmOrders = JSON.parse(WfmOrders).payload.orders

      for (let order of orders) {
        if (order.apiName === item && order.source === 'Warframe Market') {
          const found = wfmOrders.find(o => {
            const matchesOffer = o.order_type === (order.offer === 'Selling' ? 'sell' : 'buy')
            const matchesUser = o.user.ingame_name === order.user
            const notAweekAgo = new Date() - order.createdAt < 1000 * 60 * 60 * 24 * 7
            return matchesOffer && matchesUser && notAweekAgo
          })

          if (found) {
            client.post('/warframe/v1/users/status', {
              name: order.user,
              status: found.user.status
            })
          } else {
            discard.push(order)
          }
        }
      }

      // Remove old orders
      const itemName = orders.find(i => i.apiName === item).item
      await client.delete('/warframe/v1/orders', { item: itemName, discard })
      discard = []
    }
  }
}

const wfm = new WFM()
wfm.init()
