<template>
  <div class="trade">
    <section>
      <div class="container">
        <h2>Latest Offers</h2>
        <span>Tracking all Regions, PC only</span>
        <div class="realtime">
          <realtime-traders/>
          <transition-group name="realtime" class="realtime-users row">
            <realtime-user v-for="(order, n) in Array(6).fill(0).map((e, i) => listings[i])" :key="order ? order._id : Math.random()" :order="order" class="realtime-user col-b"/>
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
          offers later! But maybe this item just sucks ¯\_(ツ)_/¯
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import realtimeTraders from 'src/components/items/modules/realtime-traders.vue'
import realtimeUser from 'src/components/items/modules/realtime-order.vue'

async function init () {
  const item = this.$store.state.route.params.item.split('-').join(' ')
  this.$store.commit('setTradeListings', await this.$cubic.get(`/warframe/v1/orders?item=${item}`))
}

export default {
  components: {
    'realtime-traders': realtimeTraders,
    'realtime-user': realtimeUser
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    listings () {
      return this.$store.state.trade.listings
    }
  },

  watch: {
    async $route (to, from) {
      if (to.params.item !== from.params.item) {
        this.$cubic.unsubscribe(`/warframe/v1/orders?item=${this.item.name}`)
        await init.bind(this)()
        this.$cubic.subscribe(`/warframe/v1/orders?item=${this.item.name}`, orders => {
          this.$store.commit('setTradeListings', orders)
        })
      }
    }
  },

  // Client-sided loads won't trigger asyncData due to how we switch sub
  // pages on items, so we'll do it here manually. The `mount` life cycle hook
  // only triggers client-sided.
  async beforeMount () {
    await init.bind(this)()
    this.$cubic.subscribe(`/warframe/v1/orders?item=${this.item.name}`, orders => {
      this.$store.commit('setTradeListings', orders)
    })
  },

  beforeDestroy () {
    this.$cubic.unsubscribe(`/warframe/v1/orders?item=${this.item.name}`)
  },

  async asyncData () {
    await init.bind(this)()
  },

  storeModule: {
    name: 'trade',
    state: {
      listings: []
    },
    mutations: {
      setTradeListings (state, listings) {
        state.listings = listings.reverse()
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

h2 {
  margin-bottom: 20px;
}
h2 + span {
  display: inline-block;
  margin-top: -20px;
  margin-bottom: 20px;
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
