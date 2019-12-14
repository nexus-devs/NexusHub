export default {
  name: 'crafting',
  state: {
    itemId: null,
    slug: '',
    reagentFor: [],
    createdBy: [],
    type: 'reagentFor',
    filter: '',
    selected: null
  },

  mutations: {
    setCrafting (state, crafting) {
      state.itemId = crafting.itemId
      state.slug = crafting.slug
      state.reagentFor = crafting.reagentFor
      state.createdBy = crafting.createdBy

      // Set start filter
      if (!crafting.reagentFor.length && crafting.createdBy.length) state.type = 'createdBy'
    },
    selectCraftingEntry (state, cid) {
      state.selected = cid
    },
    setOrderType (state, type) {
      state.type = type
      state.filter = ''
    },
    setFilter (state, filter) {
      state.filter = filter
    }
  }
}
