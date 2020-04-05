import utility from 'src/components/wow-classic/utility.js'

export default {
  name: 'graphs',
  state: {
    itemId: '',
    uniqueName: '',
    slug: '',
    storage: {
      'graph-value-quantity': {},
      'graph-value-comparison': {},
      'heatmap-value': {},
      'heapmap-quantity': {},
      'graph-overview-eu': {},
      'graph-overview-us': {}
    }
  },

  mutations: {
    setGraphItem (state, item) {
      state.itemId = item.itemId
      state.uniqueName = item.uniqueName
      state.slug = item.slug
    },
    setGraphData (state, { graph, item }) {
      item.data = item.data.map((x) => {
        x.scannedAt = new Date(x.scannedAt).getTime()
        return x
      })

      state.storage[graph] = { timerange: item.timerange, data: item.data }
    }
  },

  actions: {
    async refetchGraphData ({ state, commit }, { graph, timerange, regional }) {
      const itemId = state.itemId
      const slug = state.slug

      const parallel = []
      if (slug) parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/${itemId}/prices?timerange=${timerange}`))
      if (regional) parallel.push(this.$cubic.get(`/wow-classic/v1/items/${regional}/${itemId}/prices?region=true&timerange=${timerange}`))
      let [itemData, regionalData] = await Promise.all(parallel)

      if (regional && slug) itemData = utility.formatRegionalData(itemData, regionalData)
      commit('setGraphData', { graph, item: itemData })
    }
  }
}
