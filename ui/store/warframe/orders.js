/**
 * Trader sorting logic
 */
function filter (orders, type = 'Selling', filters = [], component) {
  const result = []
  const resolve = (filter, result) => {
    filter.path.split('.').forEach(key => { result = result[key] })
    return result
  }

  // Filter by component first
  for (const order of orders) {
    if ((component === order.component || component === 'Set') &&
        order.offer === type) {
      result.push(order)
    }
  }

  const getSortingValue = result => {
    const filter = filters.find(f => f.active)
    const res = resolve(filter, result)
    return filter.descending ? -1 * res : res
  }


  return result.sort((a, b) => {
    // Keep sorted by component
    const name = a.component.localeCompare(b.component)
    if (name !== 0) {
      return name
    }

    // Sort by selected filter
    const aVal = getSortingValue(a)
    const bVal = getSortingValue(b)

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
}

export default {
  name: 'orders',

  state: {
    all: [],
    listings: [],
    selected: {
      component: 'Set'
    },
    type: 'Selling',
    filters: [{
      name: 'Price',
      category: 'items',
      icon: '/img/warframe/ui/platinum.svg',
      unit: 'p',
      path: 'price',
      active: true,
      descending: false
    }, {
      name: 'Quantity',
      icon: '/img/warframe/ui/quantity.svg',
      unit: '',
      path: 'quantity'
    }, {
      name: 'Rank',
      hidden: true,
      path: 'rank'
    }]
  },

  mutations: {
    setOrders (state, orders) {
      state.all = orders
      state.listings = filter(state.all, state.type, state.filters, state.selected.component)
    },
    selectOrder (state, order) {
      state.selected = order
    },
    setOrderType (state, type) {
      state.type = type
      state.listings = filter(state.all, state.type, state.filters, state.selected.component)
    },
    setOrderFilters (state, filters) {
      state.filters = filters
      state.listings = filter(state.all, state.type, state.filters, state.selected.component)
    },
    setOrdersComponent (state, component) {
      state.selected.component = component
      state.listings = filter(state.all, state.type, state.filters, state.selected.component)
    }
  }
}
