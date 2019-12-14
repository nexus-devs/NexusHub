export default {
  name: 'servers',
  state: {
    server: '',
    region: '',
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
    setServer (state, { server, region }) {
      state.server = server
      state.region = region
    },
    selectRegion (state, region) {
      state.selected.region = region
      state.selected.server = ''
    },
    selectServer (state, server) {
      state.selected.server = server
    }
  }
}
