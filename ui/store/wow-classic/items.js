export default {
  name: 'items',
  state: {
    item: { name: '' },
    timerange: 7
  },

  mutations: {
    setItem (state, item) {
      state.item = item
      if (!state.timerange) state.timerange = item.current.intervals.length
    }
  },

  actions: {
    async refetchItem ({ state, commit }, timerange) {
      const itemId = state.item.itemId
      const item = await this.$cubic.get(`/wow-classic/v1/items/${itemId}?timerange=${timerange}`)
      commit('setItem', item)
    }
  }
}
