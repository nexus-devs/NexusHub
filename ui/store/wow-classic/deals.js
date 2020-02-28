export default {
  name: 'deals',

  state: {
    news: [],
    deals: [],
    filters: [],
    fetchUrl: '',
    reachedEndOfDeals: false
  },

  mutations: {
    setDeals (state, deals) {
      state.deals = deals
    },
    setFilters (state, filters) {
      state.filters = filters
    },
    setFetchUrl (state, fetchUrl) {
      state.fetchUrl = fetchUrl
    },
    setReachedEnd (state, reachedEnd) {
      state.reachedEndOfDeals = reachedEnd
    }
  },

  actions: {
    async addDeals ({ state, commit }) {
      const newDeals = await this.$cubic.get(`${state.fetchUrl}&skip=${state.deals.length}`)
      for (const deal of newDeals) deal.icon = `https://render-classic-us.worldofwarcraft.com/icons/56/${deal.icon}.jpg`

      // Check if less < limit are returned -> we've reached the end!
      if (newDeals.length < 15) commit('setReachedEnd', true)
      else commit('setReachedEnd', false)

      // Filters here because of a edge case where items are updated
      commit('setDeals', state.deals.concat(newDeals.filter(nD => !state.deals.find(d => nD.itemId === d.itemId))))
    }
  }
}
