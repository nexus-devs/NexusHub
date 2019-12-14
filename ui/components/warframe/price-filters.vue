<template>
  <div class="filters">
    <div class="row">
      <div class="col-b row">
        <div :class="{ inactive: types[0].inactive }" class="col inline-data interactive" @click="select('types', types[0])">
          <label>Selling</label>
          <span class="data">
            {{ supply.count }}
          </span>
          <span :class="{ 'inline-data-increase': supply.diff > 0 }" class="diff">
            <indicator :diff="supply.diff" />
            {{ supply.diff }}%
          </span>
        </div>
        <div :class="{ inactive: types[1].inactive }" class="col inline-data interactive" @click="select('types', types[1])">
          <label>Buying</label>
          <span class="data">
            {{ demand.count }}
          </span>
          <span :class="{ 'inline-data-increase': demand.diff > 0 }" class="diff">
            <indicator :diff="demand.diff" />
            {{ demand.diff }}%
          </span>
        </div>
        <div class="col">
          <!-- Dummy -->
        </div>
      </div>
      <div class="col-b disabled">
        <label>Platform</label>
        <div v-for="d in platform" :key="d.name" :class="{ active: !d.inactive, disabled: d.disabled }" class="btn-subtle"
             type="button" @click="select('platform', d)"
        >
          <span>{{ d.name }}</span>
        </div>
      </div>
      <div class="col-b disabled">
        <label>Data Source</label>
        <div v-for="d in source" :key="d.name" :class="{ active: !d.inactive, disabled: d.disabled }" class="btn-subtle"
             type="button" @click="select('source', d)"
        >
          <span>{{ d.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import indicator from 'src/components/charts/indicator.vue'

function getOrders (type, store) {
  let current = 0
  let previous = 0

  for (const component of store.state.prices.components) {
    current += component.prices[type].current.orders
    previous += component.prices[type].previous.orders
  }
  const diff = ((current - previous) / previous * 100).toFixed(2)

  return {
    count: current > 999 ? `${(current / 1000).toFixed(1)}K` : current,
    diff
  }
}

function fetchPrices (data, attr, store) {
  if (data.filter(d => !d.inactive).length === 1) {
    const value = data.find(d => !d.inactive).name

    // Fetch new data based on existing filters. Unlike buying/selling,
    // these aren't in the output by default, so we have to fetch them
    // additionally.
    for (const component of store.state.prices.components) {
      const attributes = {}
      attributes[attr] = value
      store.commit('setPricesAttributes', {
        component: component.name,
        attributes
      })
      store.dispatch('fetchPricesComponent', component.name)
    }
  }

  // Reset if all are selected
  else {
    for (const component of store.state.prices.components) {
      const attributes = {}
      attributes[attr] = false
      store.commit('setPricesAttributes', {
        component: component.name,
        attributes
      })
      store.dispatch('fetchPricesComponent', component.name)
    }
  }

  // Get detailed graph if selected
  const detailed = store.state.prices.detailed
  if (detailed.data.length) {
    store.dispatch('fetchPricesDetailed', {
      item: detailed.item,
      component: detailed.component
    })
  }
}

export default {
  components: {
    indicator
  },

  data () {
    return {
      types: [{
        name: 'Selling'
      }, {
        name: 'Buying'
      }],

      platform: [{
        name: 'PC'
      }, {
        name: 'PS4'
      }, {
        name: 'XB1'
      }],

      source: [{
        name: 'Trade Chat'
      }, {
        name: 'Warframe Market'
      }]
    }
  },

  computed: {
    supply () {
      return getOrders('selling', this.$store)
    },
    demand () {
      return getOrders('buying', this.$store)
    }
  },

  watch: {
    types (oldData, newData) {
      const selling = newData.find(d => d.name === 'Selling')
      const buying = newData.find(d => d.name === 'Buying')

      // Switch to order type in store. Price charts then use that key to get
      // the target data from the default price output.
      if ((selling.inactive && buying.inactive) || (!selling.inactive && !buying.inactive)) {
        return this.$store.commit('setItemOfferType', 'combined')
      }
      if (selling.inactive) {
        this.$store.commit('setItemOfferType', 'buying')
      }
      if (buying.inactive) {
        this.$store.commit('setItemOfferType', 'selling')
      }
    },

    source (oldData, newData) {
      fetchPrices(newData, 'source', this.$store)
    },

    platform (oldData, newData) {
      fetchPrices(newData, 'platform', this.$store)
    }
  },

  methods: {
    select (data, d) {
      const target = [].concat(this[data]) // Get rid of existing reference
      const i = target.findIndex(e => e.name === d.name)
      let allActive = true
      let allInactive = true

      this[data].forEach(el => {
        if (el.inactive && !el.disabled) {
          allActive = false
        }
        if ((!el.inactive || el.disabled) && el.name !== target[i].name) {
          allInactive = false
        }
      })

      // Only select one or all platforms at a time
      if (data === 'platform') {
        for (const filter of target) {
          filter.inactive = true
        }
        allActive = false
      }

      // Labels are all active -> user wants to activate only the one they selected
      if (allActive) {
        for (let j = 0; j < target.length; j++) {
          target[j].inactive = i === j
        }
      }

      // All labels inactive -> select all
      else if (allInactive) {
        for (let j = 0; j < target.length; j++) {
          target[j].inactive = false
        }
      }

      // Some are active -> user wants to reactive a certain label
      else {
        target[i].inactive = !target[i].inactive
      }

      // Now we need to reassign the variable for vue to re-render it
      this[data] = target
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.filters {
  .col-b {
    flex-grow: 0;
    flex-basis: auto;
    margin-bottom: 40px;

    &:not(:last-of-type) {
      @media (min-width: $breakpoint-s) {
        padding-right: 40px;
        margin-right: 40px;
        border-right: 1px solid $color-subtle-dark;
      }
      @media (max-width: $breakpoint-s) {
        width: 100%;
      }
    }
  }

  label {
    display: block;
    font-size: 0.85em;
    font-weight: 400;
    color: white;
    margin-bottom: 5px;
  }
  .inline-data {
    flex-grow: 0;
    border-radius: 2px;
    padding: 12px 15px;
    margin-right: 10px;
    background: rgba(200,225,255,0.1);
    @include shadow-0;

    &.inactive {
      opacity: 0.5;
      background: transparent;
    }
    .data {
      display: block;
      font-size: 1.2em;
      color: white;
      margin-bottom: 5px;
    }
    .diff {
      display: inline-block;
      white-space: nowrap;
      font-size: 0.8em;
      color: $color-error;
      letter-spacing: -0.5;

      &.inline-data-increase {
        color: $color-primary-subtle;
      }
      .indicator {
        transform: scale(1);
      }
    }
    &:before {
      border-radius: 2px;
    }
  }

  .btn-subtle {
    margin-top: 5px;
    margin-right: 5px;
    font-size: 0.85em !important;
    @include shadow-0;

    &:not(.active) {
      background: transparent;
      color: white;

      &:hover {
        background: rgba(200,225,255,0.1)
      }
      .status-circle {
        background: white;
      }
    }
    &.disabled {
      color: $color-font-subtle;
      cursor: auto;
      pointer-events: none;
      box-shadow: none;
      background: transparent;
      opacity: 0.5;

      .status-circle {
        background: transparent;
        border: 0.5px solid $color-font-subtle;
      }
    }
    .status-circle {
      display: inline-block;
      vertical-align: middle;
      margin-right: 6.5px;
      height: 2px;
      width: 2px;
      background: white;
      border: 1px solid white;
      border-radius: 50%;
    }
  }
}
</style>
