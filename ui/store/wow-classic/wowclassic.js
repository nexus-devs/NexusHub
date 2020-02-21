export default {
  name: 'wowclassic',

  state: {
    news: [],
    deals: [],
    craftingDeals: []
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
    }
  },

  actions: {
    async addDeals ({ state, commit }, server) {
      const newDeals = await this.$cubic.get(`/wow-classic/v1/items/${server}/deals?limit=${15}&skip=${state.deals.length}`)
      for (const deal of newDeals) {
        deal.icon = `https://render-classic-us.worldofwarcraft.com/icons/56/${deal.icon}.jpg`
        deal.percentage = ((deal.marketValue - deal.minBuyout) / deal.minBuyout * 100).toFixed(2)
      }
      commit('setDeals', state.deals.concat(newDeals))
    }
  }
}
