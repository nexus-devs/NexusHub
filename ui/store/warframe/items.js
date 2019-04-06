export default {
  name: 'items',
  state: {
    item: { name: '', patchlogs: [] },
    selected: {
      component: 'Set',
      offerType: 'combined',
      regions: []
    },
    patchlogs: {
      current: 0,
      active: []
    }
  },

  mutations: {
    setItem (state, item) {
      item.tags = []
      item.tags.push(item.category)
      item.tags.push(item.name.includes(' Prime') ? 'Prime' : item.type)
      state.item = item
    },
    setItemComponent (state, component) {
      state.selected.component = component.trim()
    },
    setItemOfferType (state, type) {
      state.selected.offerType = type.toLowerCase()
    },
    setItemPatchlogs (state, patchlogs) {
      state.item.patchlogs = patchlogs
    },
    addItemPatchlog (state, patchlog) {
      state.patchlogs.current = state.item.patchlogs.findIndex(p => p.name === patchlog.name)
    },
    removeItemPatchlog (state, patchlog) {
      const i = state.patchlogs.active.find(p => p.name === patchlog.name)

      if (i) {
        state.patchlogs.active.slice(i, 1)
        state.patchlogs.current = state.item.patchlogs.findIndex(p => p.name === patchlog.name)
      }
    }
  }
}
