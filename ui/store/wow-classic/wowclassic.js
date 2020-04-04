export default {
  name: 'wowclassic',

  state: {
    news: [],
    deals: [],
    craftingDeals: [],
    trendingItems: [],
    globalIndex: false
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
    },
    setIndexTrendingItems (state, items) {
      state.trendingItems = items
    },
    setGlobalIndex (state, value) {
      state.globalIndex = value
    }
  }
}
