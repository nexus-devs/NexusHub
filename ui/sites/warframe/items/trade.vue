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

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'item-header': itemheader,
    opm,
    'realtime-user': realtimeUser
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    listings () {
      return this.$store.state.orders.listings
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
      this.$store.commit('setOrders', orders)
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
      listings: []
    },
    mutations: {
      setOrders (state, listings) {
        state.listings = listings.reverse()
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
