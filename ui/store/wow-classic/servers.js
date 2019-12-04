export default {
  name: 'servers',
  state: {
    server: '',
    selected: {
      region: '',
      server: ''
    },
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
    },
    selectRegion (state, region) {
      state.selected.region = region
    }
  }
}
