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
    setIndexDeals (state, deals) {
      state.deals = deals
    },
    setIndexCraftingDeals (state, deals) {
      state.craftingDeals = deals
    }
  }
}
