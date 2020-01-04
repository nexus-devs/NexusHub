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
  }
}
