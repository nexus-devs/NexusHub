export default {
  name: 'items',
  state: {
    item: { name: '' }
  },

  mutations: {
    setItem (state, item) {
      state.item = item
    }
  }
}
