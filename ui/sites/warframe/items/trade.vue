<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <item-header/>
    <app-content>
      <section>
        <div class="container">
          <h2>Realtime Orders</h2>
          <span>Tracking all regions from the trade chat and warframe.market.</span>
          <div class="realtime">
            <opm/>
            <transition-group name="realtime" class="realtime-users row">
              <realtime-user v-for="order in Array(6).fill(0).map((e, i) => listings[i])" :key="order ? order._id : Math.random()" :order="order" class="realtime-user col-b"/>
            </transition-group>
          </div>
        </div>
      </section>
      <section class="component-section">
        <div class="container">
          <h2>Components</h2>
          <div class="row components">
            <comp v-for="component in components" :key="component.uniqueName" :component="component" class="col"/>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <h2>Active Listings</h2>
          <div v-if="listings.length">
            <div v-for="order in listings" :key="order._id">
              {{ order }}
            </div>
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
import realtimeUser from 'src/components/items/modules/realtime-order.vue'
import component from 'src/components/items/modules/component.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'item-header': itemheader,
    opm,
    'realtime-user': realtimeUser,
    comp: component
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
    }
  },

  // This component won't get destroyed when switching items directly, so we have
  // to unsub from the trade listeners for the previous item like this.
  watch: {
    item (to, from) {
      this.$cubic.unsubscribe(`/warframe/v1/orders?item=${from.name}`)
    }
  },

  beforeMount () {
    this.$cubic.subscribe(`/warframe/v1/orders?item=${this.item.name}`, orders => {
      const components = this.$store.state.orders.components
      this.$store.commit('setOrders', orders)

      if (components.length) {
        this.$store.commit('setOrderComponents', components)
      } else {
        this.$store.commit('setOrderComponents', this.item.components.map(c => c.name))
      }
    })

    // Set active components
    const components = this.$store.state.orders.components
    if (components.length) {
      this.$store.commit('setOrderComponents', components)
    } else {
      this.$store.commit('setOrderComponents', this.item.components.map(c => c.name))
    }
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
      components: []
    },
    mutations: {
      setOrders (state, orders) {
        const listings = []
        state.all = orders.reverse()

        for (const order in orders) {
          if (state.components.includes(order.component)) {
            listings.push(order)
          }
        }
        state.listings = listings.reverse()
      },
      setOrderComponents (state, components) {
        state.components = components

        // Update listings
        const listings = []
        const orders = state.all

        for (const order of orders) {
          if (state.components.includes(order.component)) {
            listings.push(order)
          }
        }
        state.listings = listings
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

.component-section {
  border-bottom: none;
  padding-bottom: 20px;
}
.components {
  margin-left: -25px; // compnesate for padding
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
  margin-left: 30px;
  margin-bottom: -10px;
  width: 100%;

  @media (max-width: $breakpoint-s) {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
