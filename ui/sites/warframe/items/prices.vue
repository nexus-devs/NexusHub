<template>
  <div>
    <navigation />
    <item-header />
    <app-content>
      <section>
        <div class="container">
          <h2 class="sub">
            {{ item.name }} Prices
          </h2>
          <filters />
          <div :style="{ height: `${height}px` }" class="prices-wrapper">
            <price-detailed ref="detailed" />
            <div ref="prices" class="prices row-margin">
              <price v-for="component in tradableComponents" :key="component.name"
                     :component="component" class="col"
              />
            </div>
          </div>
          <ad name="warframe-item-prices-main" />
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import filters from 'src/components/warframe/price-filters.vue'
import itemHeader from 'src/components/warframe/header.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/warframe.vue'
import price from 'src/components/warframe/price.vue'
import priceDetailed from 'src/components/warframe/price-detailed.vue'
import storeModule from 'src/store/warframe/prices.js'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

export default {
  components: {
    ad,
    navigation,
    appContent,
    itemHeader,
    filters,
    price,
    priceDetailed
  },

  async asyncData ({ route }) {
    const item = encodeURIComponent(title(route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-')))
    this.$store.commit('setPricesItem', item)
    this.$store.commit('setPrices', await this.$cubic.get(`/warframe/v1/items/${item}/prices`))
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
    },
    tradableComponents () {
      return this.components.filter(c => c.tradable)
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

  storeModule,

  head () {
    const item = this.item
    let components = ''

    item.components.forEach((component, i) => {
      const price = (component.prices.buying.current.median + component.prices.selling.current.median) / 2

      if (component.tradable && price) {
        components += `${component.name}: ${price}p`
      } else {
        components += `${component.name}: No data`
      }

      if (i !== item.components.length) components += ', '
    })

    return {
      title: `${item.name} Prices · NexusHub`,
      meta: meta({
        title: `${this.item.name} Prices on NexusHub`,
        description: `${this.item.name} Prices from the Trade Chat and Warframe Market. ${components}.`,
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

  @media (max-width: $breakpoint-s) {
    margin: -10px;
  }
}

.price-detailed {
  position: absolute;

  &.active + .prices {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
