export default {
  name: 'crafting',
  state: {
    itemId: null,
    uniqueName: '',
    slug: '',
    reagentFor: [],
    createdBy: [],
    type: 'reagentFor',
    filter: '',
    selected: null,
    professions: []
  },

  mutations: {
    setCrafting (state, crafting) {
      state.itemId = crafting.itemId
      state.uniqueName = crafting.uniqueName
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
    },
    setProfessions (state, professions) {
      state.professions = professions
    }
  }
}
