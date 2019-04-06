export default {
  name: 'warframe',

  state: {
    patchlogs: []
  },

  mutations: {
    setWarframePatchlogs (state, patchlogs) {
      state.patchlogs = patchlogs
    }
  }
}
