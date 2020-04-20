export default {
  name: 'items',
  state: {
    item: { itemId: '', name: '', uniqueName: '' },
    itemComparison: {
      server: {
        slug: '',
        name: '',
        region: '',
        faction: ''
      },
      current: null,
      previous: null
    },
    graphs: {
      'marketValue-quantity': {}
    }
  },

  mutations: {
    setItem (state, item) {
      state.item = item
    },
    setItemComparison (state, { item, server }) {
      state.itemComparison.current = item.stats.current
      state.itemComparison.previous = item.stats.previous
      if (server) state.itemComparison.server = server
    },
    setGraph (state, { graph, data, timerange }) {
      state.graphs[graph] = { timerange: timerange, data }
    }
  },

  actions: {
    async fetchItemComparison ({ state, commit }, server) {
      const itemId = state.item.itemId
      const item = await this.$cubic.get(`/wow-classic/v1/items/${server.slug}/${itemId}`)
      commit('setItemComparison', { item, server })
    }
  }
}
