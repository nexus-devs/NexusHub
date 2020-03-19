export default {
  name: 'items',
  state: {
    item: { itemId: '', name: '', uniqueName: '' },
    itemComparison: {
      current: null,
      previous: null
    },
    timerange: 7
  },

  mutations: {
    setItem (state, item) {
      state.item = item
      if (!state.timerange) state.timerange = item.current.intervals.length
    },
    setItemComparison (state, item) {
      state.itemComparison = item.stats
    }
  },

  actions: {
    async fetchItemComparison ({ state, commit }, server) {
      const itemId = state.item.itemId
      const item = await this.$cubic.get(`/wow-classic/v1/items/${server}/${itemId}`)
      commit('setItemComparison', item)
    }
  }
}
