export default {
  name: 'wowclassic',

  state: {
    news: []
  },

  mutations: {
    setNews (state, news) {
      state.news = news
    }
  }
}
