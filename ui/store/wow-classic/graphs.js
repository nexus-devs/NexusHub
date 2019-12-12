import utility from 'src/components/wow-classic/utility.js'

export default {
  name: 'graphs',
  state: {
    itemId: '',
    slug: '',
    storage: {}
  },

  mutations: {
    setGraphItem (state, item) {
      state.itemId = item.itemId
      state.slug = item.slug
    },
    setGraphData (state, { graph, item }) {
      item.data = item.data.map((x) => {
        x.scannedAt = new Date(x.scannedAt).getTime()
        return x
      })

      // Squish data if necessary
      let stepSize = 1
      const days = item.timerange
      if (days === 30) stepSize = 4
      else if (days === 90) stepSize = 10
      const squishedData = []
      if (stepSize > 1) {
        let accValue1 = 0
        let accValue2 = 0
        let counter = 0
        for (let i = item.data.length - 1; i >= 0; i--) {
          const d = item.data[i]
          accValue1 += d.marketValue
          accValue2 += d.value2 ? d.value2 : d.quantity
          counter++

          // Squish values if step size reached or end of array
          if ((item.data.length - i) % stepSize === 0 || i === 0) {
            squishedData.unshift({
              scannedAt: d.scannedAt,
              marketValue: Math.round(accValue1 / counter),
              value2: d.value2 ? Math.round(accValue2 / counter) : undefined,
              quantity: d.quantity ? Math.round(accValue2 / counter) : undefined
            })

            accValue1 = 0
            accValue2 = 0
            counter = 0
          }
        }

        item.data = squishedData
      }

      // Interpolate 7 days ago and today
      const now = new Date().getTime()
      item.data.push({
        scannedAt: now,
        marketValue: item.data[item.data.length - 1].marketValue,
        quantity: item.data[item.data.length - 1].quantity,
        value2: item.data[item.data.length - 1].value2
      })
      if (Math.ceil(Math.abs(now - item.data[0].scannedAt) / (1000 * 60 * 60 * 24)) >= item.timerange) {
        item.data.unshift({
          scannedAt: now - (1000 * 60 * 60 * 24 * item.timerange),
          marketValue: item.data[0].marketValue,
          quantity: item.data[0].quantity,
          value2: item.data[0].value2
        })
      }

      state.storage[graph] = { timerange: item.timerange, data: item.data }
    }
  },

  actions: {
    async refetchGraphData ({ state, commit }, { graph, timerange, regional }) {
      const itemId = state.itemId
      const slug = state.slug

      const parallel = []
      parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/${itemId}/prices?timerange=${timerange}`))
      if (regional) parallel.push(this.$cubic.get(`/wow-classic/v1/items/${regional}/${itemId}/prices?region=true&timerange=${timerange}`))
      let [itemData, regionalData] = await Promise.all(parallel)

      if (regional) itemData = utility.formatRegionalData(itemData, regionalData)
      commit('setGraphData', { graph, item: itemData })
    }
  }
}
