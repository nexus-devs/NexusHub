export default {
  name: 'crafting',
  state: {
    itemId: null,
    slug: '',
    reagentFor: [],
    craftedBy: []
  },

  mutations: {
    setCrafting (state, crafting) {
      state.itemId = crafting.itemId
      state.slug = crafting.slug
      state.reagentFor = crafting.reagentFor
      state.craftedBy = crafting.craftedBy
    }
  }
}
