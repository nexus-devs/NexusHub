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
          <div class="row-margin">
            <price v-for="component in components" v-if="component.tradable" :key="component.name"
                   :component="component" class="col"/>
          </div>
          <filters/>
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

export default {
  components: {
    navigation,
    appContent,
    sidebar,
    sidebarSearch,
    itemHeader,
    filters,
    price
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
    }
  },

  async asyncData ({ route }) {
    const item = route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-')
    this.$store.commit('setPrices', await this.$cubic.get(`/warframe/v1/items/${item}/prices`))
  },

  methods: {
    setTimerange (days) {
      this.$store.commit('setActivityTimerange', days)
    }
  },

  storeModule: {
    name: 'prices',
    state: {
      components: []
    },
    mutations: {
      setPrices (state, prices) {
        const components = prices.components

        for (const component of components) {
          component.timerange = 7 // default timerange
        }
        state.components = components
      },
      setPricesComponent (state, component) {
        const i = state.components.findIndex(c => c.name === component.name)
        state.components[i].prices = component.prices
      },
      setPricesTimerange (state, data) {
        const i = state.components.findIndex(c => c.name === data.component)
        state.components[i].timerange = data.timerange
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
</style>
