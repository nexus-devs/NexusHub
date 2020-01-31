<template>
  <div>
    <navigation/>
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
          <ad name="warframe-item-trade-realtime"/>
        </div>
      </section>

      <!-- Active Listings -->
      <section>
        <div class="container listings">
          <h2 class="sub">Open Trades</h2>

          <!-- Filters -->
          <div class="filter">
            <div class="type">
              <span :class="{ active: type === 'Selling' }" class="btn-subtle" @click="setType('Selling')">
                Sellers <span class="btn-counter">{{ count.selling }}</span>
              </span>
              <span :class="{ active: type === 'Buying' }" class="btn-subtle" @click="setType('Buying')">
                Buyers  <span class="btn-counter">{{ count.buying }}</span>
              </span>
            </div>
            <div class="filter-tags">
              <div class="filter-tag-row">
                <!-- Filters -->
                <div v-for="filter in filters" v-if="listings.find(o => o[filter.path])" :key="filter.name" :class="{ active: filter.active, descending: filter.descending }" class="btn-tag" @click="selectFilterTag(filter)">
                  <img v-if="filter.icon" :src="filter.icon" :alt="filter.alt" class="ico-12">
                  <span>{{ filter.name }}</span>
                  <img :class="{ descending: filter.descending }" src="/img/ui/dropdown.svg" class="ico-16 asc-desc" alt="Ascending/Descending">
                </div>
                <!-- Components -->
                <comp v-for="component in components" :key="component.uniqueName" :component="component"/>
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
              <div v-if="item.fusionLimit" class="col" @click="selectFilterTag(filters.find(f => f.name === 'Rank'))">
                Rank
              </div>
              <div class="col interactive quantity" @click="selectFilterTag(filters.find(f => f.name === 'Quantity'))">
                Quantity
              </div>
              <div class="col interactive price" @click="selectFilterTag(filters.find(f => f.name === 'Price'))">
                Price
              </div>
              <div class="col interactive whitespace"/>
            </div>
            <transition-group>
              <div v-for="(order, i) in listings" :key="order._id" class="order">
                <order :order="order"/>
                <!-- <ad v-if="i % 5 === 0" name="warframe-item-trade-orders-mid"/> -->
              </div>
            </transition-group>
          </div>
          <div v-else>
            No orders found.
          </div>
          <ad name="warframe-item-trade-orders-end"/>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import activity from 'src/components/warframe/activity.vue'
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import component from 'src/components/warframe/component.vue'
import itemHeader from 'src/components/warframe/header.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/warframe.vue'
import opm from 'src/components/warframe/opm-item.vue'
import order from 'src/components/warframe/order.vue'
import orderRealtime from 'src/components/warframe/order-realtime.vue'
import storeModule from 'src/store/warframe/orders.js'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

export default {
  components: {
    ad,
    navigation,
    activity,
    appContent,
    itemHeader,
    opm,
    orderRealtime,
    comp: component,
    order
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
    count () {
      return {
        buying: this.all.filter(o => o.offer === 'Buying').length,
        selling: this.all.filter(o => o.offer === 'Selling').length
      }
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
      this.$store.commit('setOrdersComponent', 'Set')
    },
    selectedComponent (to) {
      this.$store.commit('setOrdersComponent', to)
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

  // Redirect to overview if this site has no content. (May happen when
  // switching between items as they'll stay on their current sub page)
  created () {
    if (!this.item.tradable) {
      this.$router.replace(this.$route.fullPath.replace('/prices', '/'))
    }
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
    const item = encodeURIComponent(title(route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-')))
    this.$store.commit('setOrders', await this.$cubic.get(`/warframe/v1/orders?item=${item}`))
  },

  storeModule,

  head () {
    const valid = this.listings.find(o => o.component === 'Set' && o.price)
    const min = valid ? this.listings.filter(o => o.component === 'Set' && o.price)[0].price : null

    return {
      title: `${this.item.name} Trades (${this.all.length}) · NexusHub`,
      meta: meta({
        title: `${this.item.name} Trades on NexusHub (${this.all.length})`,
        description: `Check out ${this.all.length} open offers for ${this.item.name}${valid ? ` starting at ${min}p.` : '.'} All orders are taken from the ingame Trade Chat and Warframe Market.`,
        image: `https://nexushub.co${this.item.imgUrl}`
      })
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

  & > span {
    display: inline-flex;
    align-items: center;

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
  }
}

.labels {
  @include uppercase;
  color: $color-font-subtle;
  font-size: 0.8em;
  padding: 10px 20px;
  border-radius: 2px;
  background: $color-bg-darker;

  .interactive {
    padding: 0;
    background: transparent;

    &:before {
      background: transparent;
    }
  }
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

.order:first-of-type /deep/ .order {
  margin-top: 0;
}
</style>
