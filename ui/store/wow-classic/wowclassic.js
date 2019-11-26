export default {
  name: 'wowclassic',

  state: {
    news: [],
    deals: []
  },

  mutations: {
    setNews (state, news) {
      state.news = news
    },
    setDeals (state, deals) {
      state.deals = deals
    }
  }
}
