export default {
  name: 'serp',

  state: {
    results: [],

    // Keep original filter order when disabling all filters.
    originalResults: [],

    filters: [{
      name: 'Platinum',
      category: 'items',
      icon: '/img/warframe/ui/platinum.svg',
      alt: 'Platinum',
      unit: 'p',
      path: 'price'
    }, {
      name: 'Ducats',
      category: 'items',
      icon: '/img/warframe/ui/ducats.svg',
      alt: 'Ducats',
      unit: ' Ducats',
      path: 'ducats'
    }, {
      name: 'Supply',
      category: 'items',
      unit: ' Sellers',
      hidden: true,
      path: 'prices.selling.current.orders'
    }, {
      name: 'Demand',
      category: 'items',
      unit: ' Buyers',
      hidden: true,
      path: 'prices.buying.current.orders'
    }],

    // Keep track of activated filters separately in the order in which they
    // were added. Will be important for sorting.
    activeFilters: []
  },

  mutations: {
    setSerpResults (state, results) {
      state.results = results
    },
    setSerpFilters (state, filters) {
      state.filters = filters
    },
    addSerpActiveFilter (state, name) {
      if (!state.activeFilters.find(f => f.name === name)) {
        state.activeFilters.push(state.filters.find(f => f.name === name))
      }
    },
    removeSerpActiveFilter (state, name) {
      const i = state.activeFilters.findIndex(f => f.name === name)
      state.activeFilters.splice(i, 1)
    },
    popSerpActiveFilter (state) {
      const removed = state.activeFilters.pop()
      state.filters.find(f => f.name === removed.name).active = false
    },
    setSerpOriginalResults (state, filters) {
      state.originalResults = filters
    },
    resetSerpResults (state, filters) {
      state.results = state.originalResults
    }
  },
  actions: {
    async fetchSerpResults ({ commit, dispatch }, { input, slug }) {
      if (input.length < 2) {
        return
      }

      // No new events in the meantime -> perform query
      const B = input.includes('🅱')
      const itemData = await this.$cubic.get(`/wow-classic/v1/search?query=${input.replace(/🅱️/g, 'b')}`)
      const items = await dispatch('sanitizeSerpResults', { itemData, B, slug })
      const players = []
      const results = items.concat(players)
      commit('setSerpResults', results)
      commit('setSerpOriginalResults', results)
      dispatch('applySerpFilters')
    },

    /**
     * Apply some adjustments for more sensible usage on the UI
     */
    sanitizeSerpResults (context, { itemData, B, slug }) {
      const items = []

      // Add each component to results
      for (const item of itemData) {
        // Prevent duplicates
        if (items.find(i => i.name === item.name)) {
          continue
        }

        // Important stuff. Already way past the deadline, so fuck it,
        // let's add some shitty memes.
        const name = B ? item.name.toLowerCase().replace(/\b\w/g, l => '🅱') : item.name

        // Add modified item.
        items.push({
          name,
          imgUrl: item.imgUrl,
          webUrl: slug ? `/wow-classic/items/${slug}/${item.uniqueName}` : `/wow-classic/items/${item.uniqueName}`,
          results: 'items',
          description: name
        })
      }
      return items
    },

    /**
     * Go through filters, sort selected values
     */
    applySerpFilters ({ commit, dispatch, state }) {
      const filters = state.activeFilters
      const results = [].concat(state.results)
      const resolve = (filter, result) => {
        try {
          filter.path.split('.').forEach(key => { result = result[key] })
          return result
        } catch (err) {

        }
      }
      const getSortingValue = result => {
        let ascending, res, missing

        // If any filter is ascending, make all ascending.
        // Also make sure to put any result with missing value last.
        for (const filter of filters) {
          if (!filter.descending) ascending = true
          if (!resolve(filter, result)) missing = true
        }

        if (missing) {
          return null
        }

        if (filters.length > 1) {
          res = resolve(filters[0], result) / resolve(filters[1], result)
        } else {
          res = resolve(filters[0], result)
        }
        return ascending ? -1 * res : res
      }
      // Resulting score displayed in UI, not relevant for sorting
      const getUiScore = x => {
        if (x === null) {
          return null
        } else {
          return x % 1 === 0 ? Math.abs(x) : Math.abs(x).toFixed(2)
        }
      }

      if (!filters.length) {
        return
      }

      results.sort((a, b) => {
        const aVal = getSortingValue(a)
        const bVal = getSortingValue(b)
        a._score = getUiScore(aVal)
        b._score = getUiScore(bVal)

        if (bVal === null) {
          return -1
        }
        if (aVal > bVal) {
          return 1
        }
        if (aVal < bVal) {
          return -1
        }
        return 0
      })
      commit('setSerpResults', results)
    }
  }
}
