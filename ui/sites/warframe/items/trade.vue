<template>
  <div>
    <navigation/>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <order-popup/>
    <item-header/>
    <app-content>

      <!-- Realtime Orders -->
      <section>
        <div class="container">
          <div class="row-margin overview">
            <div class="col-b-3 realtime-container">
              <h2 class="sub">Realtime Orders</h2>
              <div class="realtime">
                <opm/>
                <transition-group name="realtime" class="realtime-users row">
                  <order-realtime v-for="order in realtime" :key="order._id ? order._id : Math.random()" :order="order" class="realtime-user col-b"/>
                </transition-group>
              </div>
            </div>
            <div class="col-b activity-data">
              <h2 class="sub">Busy Hours</h2>
              <activity :item="item.name"/>
            </div>
          </div>
        </div>
      </section>

      <!-- Active Listings -->
      <section>
        <div class="container listings">
          <h2 class="sub">Open Trades</h2>

          <!-- Filters -->
          <div class="filter">
            <div class="type">
              <span :class="{ active: type === 'Selling' }" class="btn-subtle" @click="setType('Selling')">Sellers</span>
              <span :class="{ active: type === 'Buying' }" class="btn-subtle" @click="setType('Buying')">Buyers</span>
            </div>
            <div class="filter-tags">
              <div class="filter-tag-row">
                <!-- Filters -->
                <div v-for="filter in filters" :key="filter.name" :class="{ active: filter.active, descending: filter.descending }" class="tag interactive" @click="selectFilterTag(filter)">
                  <img v-if="filter.icon" :src="filter.icon" :alt="filter.alt" class="ico-12">
                  <span>{{ filter.name }}</span>
                  <img :class="{ descending: filter.descending }" src="/img/ui/dropdown.svg" class="ico-16 asc-desc" alt="Ascending/Descending">
                </div>
                <!-- Components -->
                <comp v-for="component in components" :key="component.uniqueName" :component="component" class="tag component"/>
              </div>
            </div>
          </div>

          <!-- All Orders-->
          <div v-if="listings.length">
            <div class="row labels">
              <div class="col item">
                Item
              </div>
              <div class="col user">
                User
              </div>
              <div v-if="item.fusionLimit" class="col">
                Rank
              </div>
              <div class="col quantity">
                Quantity
              </div>
              <div class="col price">
                Price
              </div>
              <div class="col whitespace"/>
            </div>
            <transition-group>
              <order v-for="order in listings" :key="order._id" :order="order"/>
            </transition-group>
          </div>
          <div v-else>
            No orders found.
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import navigation from 'src/components/ui/nav/warframe/items.vue'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import itemHeader from 'src/components/items/header.vue'
import opm from 'src/components/items/opm-item.vue'
import component from 'src/components/items/component.vue'
import order from 'src/components/items/order.vue'
import orderPopup from 'src/components/items/order-popup.vue'
import orderRealtime from 'src/components/items/order-realtime.vue'
import activity from 'src/components/items/activity.vue'
let selectedComponent = 'Set'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

/**
 * Trader sorting logic
 */
function filter (orders, type = 'Selling', filters = []) {
  const result = []
  const resolve = (filter, result) => {
    filter.path.split('.').forEach(key => { result = result[key] })
    return result
  }

  // Filter by component first
  for (const order of orders) {
    if ((selectedComponent === order.component || selectedComponent === 'Set') &&
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

/**
 * Actual vue component.
 */
export default {
  components: {
    navigation,
    appContent,
    sidebar,
    sidebarSearch,
    itemHeader,
    opm,
    orderRealtime,
    comp: component,
    order,
    orderPopup,
    activity
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    all () {
      return this.$store.state.orders.all
    },
    listings () {
      return this.$store.state.orders.listings
    },
    realtime () {
      return Array(4).fill().map((e, i) => [].concat(this.all).sort((a, b) => {
        return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
      })[i] || {})
    },
    components () {
      const components = []

      for (const component of this.$store.state.items.item.components) {
        if (component.tradable || component.name === 'Set') {
          components.push(component)
        }
      }
      return components
    },
    selectedComponent () {
      return this.$store.state.items.selected.component
    },
    filters () {
      return this.$store.state.orders.filters
    },
    type () {
      return this.$store.state.orders.type || 'Selling'
    }
  },

  // This component won't get destroyed when switching items directly, so we have
  // to unsub from the trade listeners for the previous item like this.
  watch: {
    item (to, from) {
      this.$cubic.unsubscribe(`/warframe/v1/orders?item=${from.name}`)
    },
    selectedComponent (to) {
      selectedComponent = to
      this.$store.commit('setOrders', this.$store.state.orders.all)
    }
  },

  beforeMount () {
    this.$cubic.subscribe(`/warframe/v1/orders?item=${this.item.name}`, orders => {
      this.$store.commit('setOrders', orders)
    })
  },

  beforeDestroy () {
    this.$cubic.unsubscribe(`/warframe/v1/orders?item=${this.item.name}`)
  },

  methods: {
    setType (type) {
      this.$store.commit('setOrderType', type)
    },
    selectFilterTag (filter) {
      const filters = [].concat(this.$store.state.orders.filters)
      const target = filters.find(f => f.name === filter.name)

      // Only allow one filter at once.
      for (const f of filters) {
        if (f.name !== target.name && f.active) {
          f.active = false
          f.descending = false
        }
      }

      // Sort order selection logic
      if (target.descending) {
        target.descending = false
      } else {
        target.descending = target.active
        target.active = true
      }
      // Overwrite original to trigger DOM update
      this.$store.commit('setOrderFilters', filters)
    }
  },

  async asyncData ({ route }) {
    const item = title(route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-'))
    this.$store.commit('setOrders', await this.$cubic.get(`/warframe/v1/orders?item=${item}`))
  },

  storeModule: {
    name: 'orders',
    state: {
      all: [],
      listings: [],
      selected: {},
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
        state.listings = filter(state.all, state.type, state.filters)
      },
      selectOrder (state, order) {
        state.selected = order
      },
      setOrderType (state, type) {
        state.type = type
        state.listings = filter(state.all, state.type, state.filters)
      },
      setOrderFilters (state, filters) {
        state.filters = filters
        state.listings = filter(state.all, state.type, state.filters)
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ {
  .zoom-enter-active, .fade-leave-active {
    @include ease(0.4s);
  }
  .zoom-enter, .zoom-leave-to {
    transform: translateY(7px);
    transform-origin: top;
    opacity: 0.75;
  }
}

.overview {
  margin: -20px;

  & > *[class*="col-b"] {
    margin: 20px;
  }
}

.realtime {
  display: flex;

  @media (max-width: $breakpoint-s) {
    flex-direction: column;
  }
}
.realtime-users {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  flex-wrap: wrap;
  vertical-align: top;
  margin-left: 20px;
  margin-right: -15px;
  margin-bottom: -15px;
  width: 100%;

  @media (max-width: $breakpoint-s) {
    margin-top: 20px;
    margin-left: 0;
  }
}

.activity-data {
  @media (max-width: $breakpoint-m) {
    flex-basis: 100%;
    margin-left: 0;
    padding-left: 0;
  }
}

.type {
  padding-bottom: 15px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid $color-subtle-dark;

  span {
    &:first-of-type {
      margin-right: 5px;
    }
    &:nth-of-type(2) {
      margin-right: 20px;
    }
  }
}

.filter {
  position: relative;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
  margin-bottom: 20px;

  .filter-tags {
    display: flex;
    align-items: center;

    .filter-tags-row {
      display: inline-block;
      margin-right: 20px;
      padding-right: 20px;
    }
    /deep/ .tag.component {
      position: relative;
      top: -1px; // dunno why, but it's just 1px lower than other tags
                 // may god forgive my hacky code.
      padding: 0 16px 0 8px;
      margin-bottom: 10px;
      background: transparent;
      text-align: left;

      h4 {
        font-family: 'Roboto';
        font-size: 0.9em;
        font-weight: 400;
      }
      span {
        position: relative;
        top: 1px;
        margin-left: 5px;
        padding: 2px 10px;
        border-radius: 50px;
        font-size: 0.8em;
        color: white;
        background: $color-bg;
        @include ease(0.25s);
      }
      .image-wrapper {
        height: 29px;
        width: 32px;
        margin-right: 0;
        margin-bottom: 0 !important;
      }
      .data {
        margin-top: 0;
        flex-direction: row;
      }
    }
    .tag {
      border-radius: 999px;
      display: inline-block;
      padding: 4px 0 4px 16px;
      margin-right: 10px;
      margin-bottom: 10px;
      border: 1px solid $color-subtle-dark;
      text-transform: uppercase;
      font-size: 0.9em;
      @include shadow-0;

      &:before {
        border-radius: 999px;
      }
      &:hover {
        background: none;
        border: 1px solid $color-subtle;
      }
      &:active {
        transform: scale(1);
      }
      span {
        font-size: 0.9em;
        color: white;
      }
      // Hide ascending/descending by default and adjust tag box size
      .asc-desc {
        opacity: 0;
        margin-right: -5px;
        @include ease(0.2s);

        &.descending {
          transform: rotate(-180deg);
        }
      }
      &.active {
        border: 1px solid transparent;
        background: $color-bg;

        .asc-desc {
          opacity: 1;
          margin-right: 0;
        }
      }
      @media (max-width: $breakpoint-m) {
        margin-bottom: 15px;
      }
    }
  }
}

.labels {
  text-transform: uppercase;
  color: $color-font-subtle;
  font-size: 0.85em;
  padding: 10px 20px;
  border-radius: 2px;
  background: $color-bg-darker;

  .item {
    margin-right: 95px;
  }
  .price {
    position: relative;
    left: 10px;
  }
  .user {
    @media (max-width: $breakpoint-s) {
      display: none;
    }
  }
  .whitespace {
    @media (max-width: $breakpoint-s) {
      display: none;
    }
  }
}
</style>
