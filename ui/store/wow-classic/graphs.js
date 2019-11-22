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
    setGraphData (state, { graph, data }) {
      // state.storage[graph] = { timerange: .length, data: graphData } */
      /* const graphData = []
      let itemData = data
      if (!data.server) itemData = data.region ? data[data.region] : data.EU

      for (let i = 0; i < itemData.current.intervals.length; i++) {
        const day = []
        for (let j = 0; j < itemData.current.intervals[i].intervals.length; j++) {
          const current = itemData.current.intervals[i].intervals[j]
          const obj = {
            qty: current.qty,
            minBuyout: current.minBuyout,
            marketValue: current.marketValue
          }

          // Merge values in case of global region
          if (!data.region) {
            const currentUS = data.US.current.intervals[i].intervals[j]
            obj.qty += current.qty
            obj.minBuyout = (obj.minBuyout + currentUS.minBuyout) / 2
            obj.marketValue = (obj.marketValue + currentUS.marketValue) / 2
          }

          // Add correct regional values
          const regions = (data.region && data.server) ? [data.region] : ['EU', 'US']
          for (const region of regions) {
            const currentRegional = data[region].current.intervals[i].intervals[j]
            obj[region + 'qty'] = currentRegional.qty
            obj[region + 'minBuyout'] = currentRegional.minBuyout
            obj[region + 'marketValue'] = currentRegional.marketValue
          }

          day.push(obj)
        }
        graphData.push(day)
      }

      state.storage[graph] = { timerange: graphData.length, data: graphData } */
    }
  },

  actions: {
    async refetchGraphData ({ state, commit }, { graph, timerange }) {
      const itemId = state.itemId
      const region = state.region
      const server = state.server

      let query = `/wow-classic/v1/items/${itemId}/prices?timerange=${timerange}`
      if (region) query += `&region=${region}`
      if (server) query += `&server=${server}`

      const item = await this.$cubic.get(query)
      commit('setGraphData', { graph, data: item })
    }
  }
}
