export default {
  name: 'prices',
  state: {
    item: '',
    components: [],
    detailed: {
      item: '',
      component: '',
      data: []
    },
    selected: {}
  },

  mutations: {
    setPrices (state, prices) {
      const components = prices.components

      for (const component of components) {
        component.timerange = 30 // default timerange
      }
      state.components = components
    },
    setPricesItem (state, item) {
      state.item = item
    },
    setPricesAttributes (state, data) {
      const component = state.components.find(c => c.name === data.component)
      Object.assign(component, data.attributes)
    },
    setPricesDetailed (state, data) {
      state.detailed = data
    },
    setPricesDetailedOrder (state, order) {
      state.selected = order
    }
  },

  actions: {
    // Fetch prices for an individual component based on its attributes
    async fetchPricesComponent ({ state, commit }, component) {
      const params = new URLSearchParams(`component=${component}`)
      const stored = state.components.find(c => c.name === component)

      for (const param of ['timerange', 'source', 'platform']) {
        if (stored[param]) {
          if (param === 'timerange' && stored[param] === 30) continue
          params.append(param, stored[param])
        }
      }
      const decoded = params.toString().replace(/\+/g, ' ')
      const prices = await this.$cubic.get(`/warframe/v1/items/${state.item}/prices?${decoded}`)
      commit('setPricesAttributes', {
        component: stored.name,
        attributes: { prices: prices.components[0].prices }
      })
    },

    async fetchPricesDetailed ({ state, commit }, { item, component }) {
      const params = new URLSearchParams(`item=${item}&component=${component}`)
      const stored = state.components.find(c => c.name === component)

      for (const param of ['timerange', 'source', 'platform']) {
        if (stored[param]) {
          if (param === 'timerange' && stored[param] === 7) continue
          params.append(param, stored[param])
        }
      }
      const decoded = params.toString().replace(/\+/g, ' ')
      const data = await this.$cubic.get(`/warframe/v1/orders/history?${decoded}`)
      commit('setPricesDetailed', { item, component, data })
    }
  }
}
