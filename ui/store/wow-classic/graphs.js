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
      state.storage[graph] = { timerange: item.timerange, data: item.data }
    }
  },

  actions: {
    async refetchGraphData ({ state, commit }, { graph, timerange }) {
      const itemId = state.itemId
      const slug = state.slug

      const item = await this.$cubic.get(`/wow-classic/v1/items/${slug}/${itemId}/prices?timerange=${timerange}`)
      commit('setGraphData', { graph, item })
    }
  }
}
