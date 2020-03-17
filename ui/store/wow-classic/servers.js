export default {
  name: 'servers',
  state: {
    server: '',
    region: '',
    selected: {
      region: '',
      server: ''
    },
    serverlist: []
  },
  mutations: {
    setServerlist (state, list) {
      state.serverlist = list
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
