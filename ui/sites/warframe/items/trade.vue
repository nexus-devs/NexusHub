<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <order-popup/>
    <item-header/>
    <app-content>

      <!-- Realtime Orders -->
      <section>
        <div class="container">
          <div class="row-pad">
            <div class="col-b-4">
              <h2 class="sub">Realtime Orders</h2>
              <div class="realtime">
                <opm/>
                <transition-group name="realtime" class="realtime-users row">
                  <realtime-user v-for="order in realtime" :key="order ? order._id : Math.random()" :order="order" class="realtime-user col-b"/>
                </transition-group>
              </div>
            </div>
            <div class="col-b components-container">
              <h2 class="sub">Components</h2>
              <div>
                <div class="row components">
                  <comp v-for="component in components" :key="component.uniqueName" :component="component" class="col"/>
                </div>
              </div>
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
              <span :class="{ active: type === 'Selling' }" @click="setType('Selling')">Sellers</span>
              <span :class="{ active: type === 'Buying' }" @click="setType('Buying')">Buyers</span>
            </div>
            <div class="filter-tags">
              <span class="sort">Sort By</span>
              <div class="filter-tag-row">
                <div v-for="filter in filters" :key="filter.name" :class="{ active: filter.active, descending: filter.descending }" class="tag" @click="selectFilterTag(filter)">
                  <img v-if="filter.icon" :src="filter.icon" :alt="filter.alt" class="ico-12">
                  <span>{{ filter.name }}</span>
                  <img :class="{ descending: filter.descending }" src="/img/ui/dropdown.svg" class="ico-16 asc-desc" alt="Ascending/Descending">
                </div>
              </div>
            </div>
          </div>

          <!-- All Orders-->
          <div v-if="listings.length">
            <div class="row labels">
              <div class="col item">
                Item
              </div>
              <div class="col">
                User
              </div>
              <div v-if="item.fusionLimit" class="col">
                Rank
              </div>
              <div class="col">
                Quantity
              </div>
              <div class="col price">
                Price
              </div>
              <div class="col"/>
            </div>
            <transition-group>
              <order v-for="order in listings" :key="order._id" :order="order"/>
            </transition-group>
          </div>
          <div v-else>
            Sorry, nobody wants to trade {{ item.name }}s right now. There might be
            offers later! But maybe this item just isn't that good ¯\_(ツ)_/¯
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import itemheader from 'src/components/items/header.vue'
import opm from 'src/components/items/opm-item.vue'
import component from 'src/components/items/component.vue'
import order from 'src/components/items/order.vue'
import orderPopup from 'src/components/items/order-popup.vue'
import orderRealtime from 'src/components/items/order-realtime.vue'
let selectedComponent = 'Set'

function filter (orders, type = 'Selling', key = 'price') {
  const result = []

  for (const order of orders) {
    if (selectedComponent === order.component && order.offer === type) {
      result.push(order)
    }
  }
  return result.sort((a, b) => {
    // Sort by component name (always)
    const name = a.component.localeCompare(b.component)
    if (name !== 0) {
      return name
    }

    // Sort by key value (default is price)
    if (type === 'Selling') {
      return a[key] < b[key] ? -1 : 1
    } else {
      return a[key] < b[key] ? 1 : -1
    }
  })
}

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'item-header': itemheader,
    opm,
    'realtime-user': orderRealtime,
    comp: component,
    order,
    'order-popup': orderPopup
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    listings () {
      return this.$store.state.orders.listings
    },
    realtime () {
      return Array(4).fill(0).map((e, i) => [].concat(this.listings).sort((a, b) => {
        return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
      })[i])
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
    }
  },

  async asyncData ({ route }) {
    const item = route.params.item.split('-').join(' ')
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
        path: 'price'
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
        state.listings = filter(state.all, state.type)
      },
      selectOrder (state, order) {
        state.selected = order
      },
      setOrderType (state, type) {
        state.type = type
        state.listings = filter(state.all, state.type)
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

h2 {
  margin-bottom: 20px;
}
h2 + span {
  display: inline-block;
  margin-top: -20px;
  margin-bottom: 30px;
}

.row-pad {
  .col-b, .col-b-4 {
    padding-top: 0;
    margin-top: 0;

    @media (max-width: $breakpoint-m) {
      padding-right: 0 !important;
    }
  }
}

.module {
  display: inline-flex;
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

.components-container {
  @media (max-width: $breakpoint-m) {
    margin-left: 0;
    padding-left: 0;
    padding-top: 40px !important;
  }
}

.components {
  flex-direction: column;
  @include field;

  @media (max-width: $breakpoint-m) {
    flex-direction: row;
    background: none;
    box-shadow: none;

    &:hover {
      background: none;
    }
  }
}

.type {
  span {
    display: inline-block;
    @include ie;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 0.9em;
    border-radius: 2px;
    padding: 10px 15px;

    &:first-of-type {
      margin-right: 5px;
    }
    &:nth-of-type(2) {
      margin-right: 20px;
    }
    &:before {
      border-radius: 0;
    }
    &.active {
      color: white;
      background: rgba(200,225,255,0.1);
    }
  }
}

.filter {
  position: relative;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
  margin-bottom: 40px;

  .sort {
    margin-left: 20px;
    color: white;
    margin-right: 15px;
    text-transform: uppercase;
    font-size: 0.85em;
  }
  .filter-tags {
    display: flex;
    align-items: center;
    margin-right: 150px; // break when view type is supposed to cause break

    @media (max-width: $breakpoint-s) {
      width: 100%;
    }
    .filter-tags-row {
      display: inline-block;
      margin-right: 20px;
      padding-right: 20px;
    }
    .tag {
      @include ie;
      border-radius: 999px;
      display: inline-block;
      padding: 5px 0 3px 15px;
      margin-right: 10px;
      margin-bottom: 5px;
      border: 1px solid $color-subtle-dark;
      text-transform: uppercase;
      font-size: 0.9em;

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
        background: #39E591;

        .asc-desc {
          opacity: 1;
          margin-right: 0;
        }
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
}
</style>
