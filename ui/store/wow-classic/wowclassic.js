export default {
  name: 'wowclassic',

  state: {
    news: [],
    deals: [],
    craftingDeals: [],
    filters: [],
    fetchUrl: ''
  },

  mutations: {
    setNews (state, news) {
      state.news = news
    },
    setDeals (state, deals) {
      state.deals = deals
    },
    setCraftingDeals (state, deals) {
      state.craftingDeals = deals
    },
    setFilters (state, filters) {
      state.filters = filters
    },
    setFetchUrl (state, fetchUrl) {
      state.fetchUrl = fetchUrl
    }
  },

  actions: {
    async addDeals ({ state, commit }, server) {
      const newDeals = await this.$cubic.get(`${state.fetchUrl}&skip=${state.deals.length}`)
      for (const deal of newDeals) deal.icon = `https://render-classic-us.worldofwarcraft.com/icons/56/${deal.icon}.jpg`
      // Filters here because of a edge case where items are updated
      commit('setDeals', state.deals.concat(newDeals.filter(nD => !state.deals.find(d => nD.itemId === d.itemId))))
    }
  }
}
