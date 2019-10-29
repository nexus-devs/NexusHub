export default {
  name: 'graphs',
  state: {
    itemId: '',
    storage: {}
  },

  mutations: {
    setGraphItem (state, itemId) {
      state.itemId = itemId
    },
    setGraphData (state, { graph, data }) {
      const graphData = []
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

      state.storage[graph] = { timerange: graphData.length, data: graphData }
    }
  },

  actions: {
    async refetchGraphData ({ state, commit }, { graph, timerange }) {
      const itemId = state.itemId
      const item = await this.$cubic.get(`/wow-classic/v1/items/${itemId}?timerange=${timerange}`)
      commit('setGraphData', { graph, data: item.current })
    }
  }
}
