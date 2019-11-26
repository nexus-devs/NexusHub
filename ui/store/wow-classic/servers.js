export default {
  name: 'servers',
  state: {
    server: '',
    EU: [],
    US: []
  },
  mutations: {
    setServerlist (state, list) {
      for (const region of Object.keys(list)) {
        state[region] = list[region]
      }
    },
    setServer (state, server) {
      state.server = server
    }
  }
}
