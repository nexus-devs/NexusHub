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
      state.storage[graph] = { timerange: data.intervals.length, data }
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
