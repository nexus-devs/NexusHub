<template>
  <div>
    <navigation />
    <item-header />
    <app-content>
      <section>
        <div class="container">
          <ad name="wow-classic-item-overview-main" />
          <h2 class="sub">
            Item Overview
          </h2>
          <div class="row-margin">
            <div class="col-b column">
              <description />
            </div>
            <stats class="col-b stats" />
          </div>
          <ad name="wow-classic-item-overview-statistics" />
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="sub">
            Statistics
          </h2>
          <div class="mobile-hover-info">
            <span>Tap on the graphs to see more detailed information.</span>
          </div>
          <div v-if="!global" class="row-margin">
            <graph-doubleline class="col-b graph"
                              :title="serverPretty"
                              storage="marketValue-quantity"
                              :value-entries="valueEntriesLocal"
                              :refetch-fn="refetchLocalGraph"
            />
            <graph-doubleline class="col-b graph"
                              :title="`${serverPretty} / ${regionPretty}`"
                              storage="regional-comparison"
                              :value-entries="valueEntriesRegional"
                              :refetch-fn="refetchRegionalGraph"
            />
          </div>
          <div v-else class="row-margin">
            <graph-doubleline class="col-b graph"
                              title="Overview Europe"
                              storage="overview-eu"
                              :value-entries="valueEntriesGlobal[0]"
                              :refetch-fn="refetchGlobalGraph('eu')"
            />
            <graph-doubleline class="col-b graph"
                              title="Overview United States"
                              storage="overview-us"
                              :value-entries="valueEntriesGlobal[1]"
                              :refetch-fn="refetchGlobalGraph('us')"
            />
          </div>
          <div v-if="!global" class="row-margin">
            <graph-heatmap class="col-b graph"
                           title="Market Value Heatmap"
                           storage="heatmap-primary"
                           :value-entries="valueEntriesLocal"
            />
            <graph-heatmap class="col-b graph"
                           title="Quantity Heatmap"
                           storage="heatmap-secondary"
                           :value-entries="valueEntriesLocal.slice(1).concat(valueEntriesLocal.slice(0, 1))"
            />
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import description from 'src/components/wow-classic/description.vue'
import graphDoubleline from 'src/components/wow-classic/graph-doubleline.vue'
import graphHeatmap from 'src/components/wow-classic/graph-heatmap.vue'
import itemHeader from 'src/components/wow-classic/header.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import stats from 'src/components/wow-classic/stats.vue'
import utility from 'src/components/wow-classic/utility'

export default {
  components: {
    ad,
    appContent,
    navigation,
    itemHeader,
    description,
    stats,
    graphDoubleline,
    graphHeatmap
  },

  async asyncData ({ store, route }) {
    const item = route.params.item
    const slug = route.params.slug

    // Fetch EU and US graphs
    if (!slug) {
      const [euPrices, usPrices] = await Promise.all([
        this.$cubic.get(`/wow-classic/v1/items/eu/${item}/prices?region=true`),
        this.$cubic.get(`/wow-classic/v1/items/us/${item}/prices?region=true`)
      ])

      store.commit('setGraph', {
        graph: 'overview-eu',
        data: euPrices.data,
        timerange: 7
      })
      store.commit('setGraph', {
        graph: 'overview-us',
        data: usPrices.data,
        timerange: 7
      })

    // Fetch local server graphs
    } else {
      const [priceData, regionalPrices] = await Promise.all([
        this.$cubic.get(`/wow-classic/v1/items/${slug}/${item}/prices?timerange=30`),
        this.$cubic.get(`/wow-classic/v1/items/${store.state.servers.activeServer.region}/${item}/prices?region=true`)
      ])

      const localPrices = priceData.data.filter(d => new Date(d.scannedAt) >= new Date(Date.now() - 1000 * 60 * 60 * 24 * 7))

      const interpolatedRegional = utility.interpolateValues(
        localPrices.map(p => {
          return { ...p, scannedAt: new Date(p.scannedAt).getTime() }
        }),
        regionalPrices.data.map(p => {
          return { ...p, scannedAt: new Date(p.scannedAt).getTime() }
        }),
        'scannedAt')

      store.commit('setGraph', {
        graph: 'marketValue-quantity',
        data: localPrices,
        timerange: 7
      })
      store.commit('setGraph', {
        graph: 'regional-comparison',
        data: localPrices.map((d, i) => {
          return {
            ...d,
            regionalMarketValue: interpolatedRegional[i].marketValue,
            regionalMinBuyout: interpolatedRegional[i].minBuyout,
            regionalQuantity: interpolatedRegional[i].quantity
          }
        }),
        timerange: 7
      })
      store.commit('setGraph', {
        graph: 'heatmap-primary',
        data: priceData.data,
        timerange: 30
      })
      store.commit('setGraph', {
        graph: 'heatmap-secondary',
        data: priceData.data,
        timerange: 30
      })
    }
  },

  computed: {
    global () {
      return !this.server.slug
    },
    item () {
      return this.$store.state.items.item
    },
    displayGraphs () {
      return this.global
        ? this.$store.state.graphs.storage['graph-overview-us'].data && this.$store.state.graphs.storage['graph-overview-us'].data.length
        : this.$store.state.graphs.storage['graph-value-quantity'].data && this.$store.state.graphs.storage['graph-value-quantity'].data.length
    },
    server () {
      return this.$store.state.servers.activeServer
    },
    serverPretty () {
      return `${this.server.name} ${this.server.faction.charAt(0).toUpperCase() + this.server.faction.slice(1)}`
    },
    regionPretty () {
      return this.server.region.toUpperCase()
    },
    valueEntriesLocal () {
      return [{
        name: 'Market Value',
        key: 'marketValue',
        area: false,
        price: true
      }, {
        name: 'Quantity',
        key: 'quantity',
        area: true,
        price: false
      }, {
        name: 'Min Buyout',
        key: 'minBuyout',
        area: false,
        price: true
      }]
    },
    valueEntriesRegional () {
      const localEntries = this.valueEntriesLocal.slice()
      return [localEntries[0], {
        name: `${this.regionPretty} Market Value`,
        key: 'regionalMarketValue',
        area: false,
        price: true
      }, localEntries[1], {
        name: `${this.regionPretty} Quantity`,
        key: 'regionalQuantity',
        area: true,
        price: false
      }, localEntries[2], {
        name: `${this.regionPretty} Min Buyout`,
        key: 'regionalMinBuyout',
        area: false,
        price: true
      }]
    },
    valueEntriesGlobal () {
      return ['EU', 'US'].map(region => {
        return [{
          name: `${region} Market Value`,
          key: 'marketValue',
          area: false,
          price: true
        }, {
          name: `${region} Quantity`,
          key: 'quantity',
          area: true,
          price: false
        }, {
          name: `${region} Min Buyout`,
          key: 'minBuyout',
          area: false,
          price: true
        }]
      })
    }
  },

  methods: {
    async refetchLocalGraph (timerange) {
      const slug = this.$store.state.servers.activeServer.slug
      const itemId = this.$store.state.items.item.itemId
      const item = await this.$cubic.get(`/wow-classic/v1/items/${slug}/${itemId}/prices?timerange=${timerange}`)
      await this.$store.commit('setGraph', {
        graph: 'marketValue-quantity',
        data: item.data,
        timerange
      })
    },
    async refetchRegionalGraph (timerange) {
      const slug = this.$store.state.servers.activeServer.slug
      const itemId = this.$store.state.items.item.itemId
      const region = this.$store.state.servers.activeServer.region.toLowerCase()
      const [localPrices, regionalPrices] = await Promise.all([
        this.$cubic.get(`/wow-classic/v1/items/${slug}/${itemId}/prices?timerange=${timerange}`),
        this.$cubic.get(`/wow-classic/v1/items/${region}/${itemId}/prices?region=true&timerange=${timerange}`)
      ])

      const interpolatedRegional = utility.interpolateValues(
        localPrices.data.map(p => {
          return { ...p, scannedAt: new Date(p.scannedAt).getTime() }
        }),
        regionalPrices.data.map(p => {
          return { ...p, scannedAt: new Date(p.scannedAt).getTime() }
        }),
        'scannedAt')

      await this.$store.commit('setGraph', {
        graph: 'regional-comparison',
        data: localPrices.data.map((d, i) => {
          return {
            ...d,
            regionalMarketValue: interpolatedRegional[i].marketValue,
            regionalMinBuyout: interpolatedRegional[i].minBuyout,
            regionalQuantity: interpolatedRegional[i].quantity
          }
        }),
        timerange: timerange
      })
    },
    refetchGlobalGraph (region) {
      return async (timerange) => {
        const itemId = this.$store.state.items.item.itemId
        const itemData = await this.$cubic.get(`/wow-classic/v1/items/${region}/${itemId}/prices?region=true&timerange=${timerange}`)
        this.$store.commit('setGraph', {
          graph: `overview-${region}`,
          data: itemData.data,
          timerange
        })
      }
    }
  },

  head () {
    const serverPretty = `${this.server.name} (${this.server.faction.charAt(0).toUpperCase() + this.server.faction.slice(1)})`

    return {
      title: this.server.slug ? `${this.item.name} Prices on ${serverPretty} · NexusHub` : `${this.item.name} Prices on the WoW Classic Auction House · NexusHub`,
      link: this.server.slug ? [{ rel: 'canonical', href: `https://nexushub.co/wow-classic/items/${this.item.uniqueName}` }] : undefined,
      meta: meta({
        title: `${this.item.name} Prices on NexusHub`,
        description: this.server.slug ? `${this.item.name} Prices on the World of Warcaft Classic Auction House for ${serverPretty}` : `${this.item.name} Prices on the World of Warcaft Classic Auction House.`,
        image: `${this.item.icon}`
      })
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.ad-unit, .blocked-unit {
  &:first-of-type {
    margin-top: -50px;
    margin-bottom: 10px;
  }
}

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

.app-container {
  overflow: unset;
}
.app-content {
  background: $color-bg-darker;
}

.row-margin {
  justify-content: flex-start;

  flex-wrap: nowrap;
  @media (max-width: $breakpoint-s) {
    flex-wrap: wrap;
  }
}

.column {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  min-width: 400px;

  & > *:first-of-type {
    margin-bottom: 20px;
  }
  @media (max-width: $breakpoint-s) {
    min-width: 0;
  }
}

.stats {
  align-self: flex-start;
}

.module {
  max-width: 450px;
}

.btn-subtle {
  margin-top: 20px;
}
.mobile-hover-info {
  display: none;
  color: $color-font-body;
  font-size: 0.9em;

  @media (max-width: $breakpoint-s) {
    display: inline;
  }
}
</style>
