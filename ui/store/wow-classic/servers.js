export default {
  name: 'servers',
  state: {
    selectedRegion: 'All Regions',
    selectedServer: 'All Servers',
    EU: [],
    US: []
  },
  mutations: {
    setServerlist (state, list) {
      state.EU = list.serversEU
      state.US = list.serversUS
    },
    setRegion (state, region) {
      state.selectedRegion = region
    },
    setServer (state, server) {
      state.selectedServer = server
    }
  }
}
