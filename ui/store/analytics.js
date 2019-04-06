export default {
  name: 'analytics',

  state: {
    users: null,
    views: null
  },

  mutations: {
    setAnalyticsUsers (state, users) {
      state.users = users
    },
    setAnalyticsViews (state, views) {
      state.views = views
    },
    setAnalyticsOffers (state, offers) {
      state.offers = offers
    }
  }
}
