export default {
  name: 'graphs',
  state: {
    itemId: '',
    storage: {}
  },

  mutations: {
    setGraphData (state, graph, data) {
      state.storage[graph] = { timerange: data.length, data }
    }
  }
}
