export default {
  name: 'servers',
  state: {
    activeServer: {
      slug: '',
      name: '',
      region: '',
      faction: ''
    },
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
    setActiveServer (state, server) {
      server.slug = `${server.slug}-${server.faction}`
      state.activeServer = server
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
