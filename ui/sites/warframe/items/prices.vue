<template>
  <div>
    <navigation/>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <item-header/>
    <app-content>
      <section>
        <div class="container">
          <h2 class="sub">{{ item.name }} Prices</h2>
          <filters/>
          <div :style="{ height: `${height}px` }" class="prices-wrapper">
            <price-detailed ref="detailed"/>
            <div ref="prices" class="prices row-margin">
              <price v-for="component in components" v-if="component.tradable" :key="component.name"
                     :component="component" class="col"/>
            </div>
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
import filters from 'src/components/items/price-filters.vue'
import price from 'src/components/items/price.vue'
import priceDetailed from 'src/components/items/price-detailed.vue'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

export default {
  components: {
    navigation,
    appContent,
    sidebar,
    sidebarSearch,
    itemHeader,
    filters,
    price,
    priceDetailed
  },

  data () {
    return {
      height: 0
    }
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    components () {
      const base = this.item.components
      const prices = this.$store.state.prices.components
      const components = []

      for (let i = 0; i < base.length; i++) {
        components.push({ ...base[i], ...prices[i] })
      }
      return components
    },
    detailed () {
      return this.$store.state.prices.detailed
    },
    selected () {
      return this.$store.state.prices.selected
    }
  },

  watch: {
    detailed () {
      setTimeout(() => this.onResize(), 1) // Wait for module to update first
    },
    selected () {
      this.onResize()
    }
  },

  // Set active view (required for generating parent height)
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },

  // Redirect to overview if this site has no content. (May happen when
  // switching between items as they'll stay on their current sub page)
  created () {
    if (!this.item.tradable) {
      this.$router.replace(this.$route.fullPath.replace('/prices', '/'))
    }
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  async asyncData ({ route }) {
    const item = title(route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-'))
    this.$store.commit('setPricesItem', item)
    this.$store.commit('setPrices', await this.$cubic.get(`/warframe/v1/items/${item}/prices`))
  },

  methods: {
    setTimerange (days) {
      this.$store.commit('setActivityTimerange', days)
    },
    /**
     * Resize price container. We have to do this because the default/detailed view
     * is positioned absolutely to enable smooth transitions while staying at
     * the same place. The html tag height will be expanded without this when
     * the smaller list is selected.
     */
    onResize () {
      if (this.detailed.data.length && this.detailed.item === this.item.name) {
        this.height = this.$refs.detailed.$el.offsetHeight
      } else {
        this.height = this.$refs.prices.offsetHeight
      }
    }
  },

  storeModule: {
    name: 'prices',
    state: {
      item: '',
      components: [],
      detailed: {
        item: '',
        component: '',
        data: []
      },
      selected: {}
    },
    mutations: {
      setPrices (state, prices) {
        const components = prices.components

        for (const component of components) {
          component.timerange = 7 // default timerange
        }
        state.components = components
      },
      setPricesItem (state, item) {
        state.item = item
      },
      setPricesAttributes (state, data) {
        const component = state.components.find(c => c.name === data.component)
        Object.assign(component, data.attributes)
      },
      setPricesDetailed (state, data) {
        state.detailed = data
      },
      setPricesDetailedOrder (state, order) {
        state.selected = order
      }
    },
    actions: {
      // Fetch prices for an individual component based on its attributes
      async fetchPricesComponent ({ state, commit }, component) {
        const params = new URLSearchParams(`component=${component}`)
        const stored = state.components.find(c => c.name === component)

        for (const param of ['timerange', 'source', 'platform']) {
          if (stored[param]) {
            if (param === 'timerange' && stored[param] === 7) continue
            params.append(param, stored[param])
          }
        }
        const decoded = params.toString().replace(/\+/g, ' ')
        const prices = await this.$cubic.get(`/warframe/v1/items/${state.item}/prices?${decoded}`)
        commit('setPricesAttributes', {
          component: stored.name,
          attributes: { prices: prices.components[0].prices }
        })
      },

      async fetchPricesDetailed ({ state, commit }, { item, component }) {
        const params = new URLSearchParams(`item=${item}&component=${component}`)
        const stored = state.components.find(c => c.name === component)

        for (const param of ['timerange', 'source', 'platform']) {
          if (stored[param]) {
            if (param === 'timerange' && stored[param] === 7) continue
            params.append(param, stored[param])
          }
        }
        const decoded = params.toString().replace(/\+/g, ' ')
        const data = await this.$cubic.get(`/warframe/v1/orders/history?${decoded}`)
        commit('setPricesDetailed', { item, component, data })
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

.app-content {
  background: $color-bg-darker;
}

.prices-wrapper {
  position: relative;
  @include ease-out(0.35s);
}

.prices {
  position: absolute;
  width: 100%;
  @include ease(0.3s);
}

.price-detailed {
  position: absolute;

  &.active + .prices {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
