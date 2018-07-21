<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <order-popup/>
    <item-header/>
    <app-content>
      <section>
        <div class="container">
          <h2>Realtime Orders</h2>
          <div class="realtime">
            <opm/>
            <transition-group name="realtime" class="realtime-users row">
              <realtime-user v-for="order in realtime" :key="order ? order._id : Math.random()" :order="order" class="realtime-user col-b"/>
            </transition-group>
          </div>
        </div>
      </section>
      <section>
        <div class="container listings">
          <h2>Active Listings</h2>
          <div class="row components">
            <comp v-for="component in components" :key="component.uniqueName" :component="component" class="col"/>
          </div>
          <div v-if="listings.length">
            <order v-for="order in listings" :key="order._id" :order="order"/>
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
import opm from 'src/components/items/modules/opm.vue'
import component from 'src/components/items/modules/component.vue'
import order from 'src/components/items/modules/order.vue'
import orderPopup from 'src/components/items/modules/order-popup.vue'
import orderRealtime from 'src/components/items/modules/order-realtime.vue'

function filter (orders, components, offer = 'Selling', key = 'price') {
  const result = []

  for (const order of orders) {
    if (!components.length || components.includes(order.component) &&
        order.offer === offer) {
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
    return a[key] < b[key] ? -1 : 1
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
    components () {
      const components = []

      for (const component of this.$store.state.items.item.components) {
        if (component.tradable || component.name === 'Set') {
          components.push(component)
        }
      }
      return components
    },
    realtime () {
      return Array(6).fill(0).map((e, i) => [].concat(this.listings).sort((a, b) => {
        return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
      })[i])
    }
  },

  // This component won't get destroyed when switching items directly, so we have
  // to unsub from the trade listeners for the previous item like this.
  watch: {
    item (to, from) {
      this.$cubic.unsubscribe(`/warframe/v1/orders?item=${from.name}`)
      this.$store.commit('setOrderComponents', [])
    }
  },

  beforeMount () {
    this.$cubic.subscribe(`/warframe/v1/orders?item=${this.item.name}`, orders => {
      const components = this.$store.state.orders.components
      this.$store.commit('setOrders', orders)

      if (components.length) {
        this.$store.commit('setOrderComponents', components)
      }
    })
  },

  beforeDestroy () {
    this.$cubic.unsubscribe(`/warframe/v1/orders?item=${this.item.name}`)
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
      components: [],
      type: '',
      selected: {}
    },
    mutations: {
      setOrders (state, orders) {
        state.all = orders
        state.listings = filter(orders, state.components)
      },
      setOrderComponents (state, components) {
        state.components = components
        state.listings = filter(state.all, components)
      },
      selectOrder (state, order) {
        state.selected = order
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ {
  .zoom-enter-active, .fade-leave-active {
    @include ease(0.45s);
  }
  .zoom-enter, .zoom-leave-to {
    transform: translateY(10px);
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
.module {
  display: inline-flex;
  z-index: 1;
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
  margin-left: 10px;
  margin-right: -5px;
  margin-bottom: -15px;
  width: 100%;

  @media (max-width: $breakpoint-s) {
    margin-left: 0;
    margin-top: 20px;
  }
}
.components {
  margin-bottom: 40px;
}
</style>
