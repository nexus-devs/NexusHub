export default {
  name: 'servers',
  state: {
    selectedRegion: 'All Regions',
    selectedServer: 'All Servers',
    selectedFaction: 'All Factions',
    EU: [],
    US: []
  },
  mutations: {
    setServerlist (state, list) {
      for (const region of Object.keys(list)) {
        state[region] = list[region]
      }
    },
    setRegion (state, region) {
      state.selectedRegion = region
    },
    setServer (state, server) {
      state.selectedServer = server
    }
  }
}
