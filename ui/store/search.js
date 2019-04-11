module.exports = {
  name: 'search',
  state: {
    input: ''
  },
  mutations: {
    setSearchInput (state, input) {
      state.input = input
    }
  },
  actions: {
    applyInputQuery ({ commit }, route) {
      if (route.query.input) {
        commit('setSearchInput', route.query.input)
      }
    }
  }
}
