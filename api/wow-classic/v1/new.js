const Endpoint = require('cubic-api/endpoint')
const moment = require('moment')

class Scan extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Parses a new scan into the database.'
    this.schema.method = 'POST'
    this.schema.url = '/wow-classic/v1/new'
    this.schema.request = {
      body: {
        shortChar: 'Anjour',
        testScan: false,
        elapsed: 2.03867300000787,
        data: 'i4571?1800!/2,1,1847,1945,',
        itemDBcount: 4691,
        realm: 'Transcendence',
        ts: 1568041118,
        itemsCount: 2614,
        region: 'classic',
        dataFormatVersion: 6,
        char: 'Anjour-Transcendence',
        newItems: 620,
        count: 15027,
        faction: 'Alliance',
        dataFormatInfo: 'v4key!seller1/timeleft,itemCount,minBid,buyoutPrice,curBid&auction2&auction3!seller2/a1&a2 ...\n(grouped by itemKey, seller) with auction units being timeleft,itemCount,minBid,buyoutPrice,curBid',
        firstCount: 15027,
        classic: true
      }
    }
    this.schema.response = String
  }

  async main (req, res) {
    const recentOrders = [{
      seller: 'Iastalyr',
      item: 'i2838',
      timeLeft: 5,
      timeLeftLower: new Date('2019-09-09T24:58:38.000Z'),
      timeLeftUpper: new Date('2019-09-10T18:58:38.000Z'),
      itemCount: 20,
      minBid: 15000,
      buyout: 15000
    }] // TODO: Populate this with db data

    let orders = this.parseData(req.body)
    orders = this.merge(orders, recentOrders)
    return res.send(orders)
  }

  // Merge the new parsed orders with recent orders, avoiding scan overlap
  // Known issues: Bidding can raise the time window, one auction can be bought and replaced with the exact same one
  // TODO: Add updating old orders
  merge (orders, recentOrders) {
    const oldOrderCount = orders.length
    for (let recent of recentOrders) {
      // Find orders that are (likely) duplicates
      const index = orders.findIndex(order => {
        // Check generic matches
        const check = (order.seller === recent.seller) && (order.item === recent.item) &&
          (order.itemCount === recent.itemCount) && (order.buyout === recent.buyout) && (order.minBid === recent.minBid)
        if (!check) return false // Fast evaluations first

        // If the auctions have the same time window, check if the lower bound fits into the recent orders bound
        if (order.timeLeft === recent.timeLeft) {
          if ((order.timeLeftLower <= recent.timeLeftUpper) && (order.timeLeftLower >= recent.timeLeftLower)) return true
        // If the time window is smaller, check if the entire bounds fit into the recent orders bound
        } else if (order.timeLeft < recent.timeLeft) {
          if ((order.timeLeftLower <= recent.timeLeftUpper) && (order.timeLeftLower >= recent.timeLeftLower) &&
            (order.timeLeftUpper <= recent.timeLeftUpper) && (order.timeLeftUpper >= recent.timeLeftLower)) return true
        }
        // Ignore if the time window is actually larger

        return false
      })

      if (index >= 0) orders.splice(index, 1)
    }

    const removedOrders = oldOrderCount - orders.length
    console.log(`Removed ${removedOrders} elements`)
    return orders
  }

  // Parse the AHDB data into something usable TODO: Put this in the client to relieve the server
  parseData (body) {
    const orders = []
    const itemSets = body.data.split(' ')
    const timestamp = moment.unix(body.ts) // Convert unix timestamp

    for (const itemSet of itemSets) {
      const itemOrders = itemSet.split('!')
      const itemId = itemOrders.shift() // First value of the array is only the Id

      for (const itemOrder of itemOrders) {
        const itemOrderSplit = itemOrder.split('/')
        const seller = itemOrderSplit[0]
        const auctions = itemOrderSplit[1].split('&')

        for (const auction of auctions) {
          // Split auction data and map String to int, or null if empty
          const auctionData = auction.split(',').map(elem => {
            if (elem === '') return null
            else return parseInt(elem)
          })

          // Since there is no exact creation time or Id,
          // we need to calculate the possible time borders
          // and make a guesstimate for scan merging with that.
          let lowerDateBorder, upperDateBorder
          switch (auctionData[0]) {
            case 1: // Short, 0-30 min
              lowerDateBorder = 0
              upperDateBorder = 30
              break
            case 2: // Medium, 30m-2h
              lowerDateBorder = 30
              upperDateBorder = 120
              break
            case 3: // Long, 2h-8h
              lowerDateBorder = 120
              upperDateBorder = 480
              break
            case 4: // Very Long, 8h-24h
              lowerDateBorder = 480
              upperDateBorder = 1440
              break
            default:
          }

          // Guesstimate the auction timestamp
          // Assume every auction was created with a "Long" time (8h)
          // Except ofc if the time left is "Very Long", then assume 24h
          // The estimated timestamp is the average of the assumed creation time
          let estimatedTimeChange = 180 // 3h
          if (auctionData[0] === 4) estimatedTimeChange = 480 // 8h
          const estimatedTimestamp = timestamp.clone().subtract(estimatedTimeChange, 'm').toDate()

          const order = {
            seller,
            item: itemId,
            timeLeft: auctionData[0],
            timeLeftLower: timestamp.clone().add(lowerDateBorder, 'm').toDate(),
            timeLeftUpper: timestamp.clone().add(upperDateBorder, 'm').toDate(),
            estimatedTimestamp,
            itemCount: auctionData[1],
            minBid: auctionData[2],
            buyout: auctionData[3],
            currentBid: auctionData[4]
          }
          orders.push(order)
        }
      }
    }

    console.log(orders[1])
    return orders
  }
}

module.exports = Scan
