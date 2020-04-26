<template>
  <div>
    <navigation />
    <item-header />
    <app-content>
      <section>
        <div class="container">
          <h2 class="sub">
            Item Overview
          </h2>
          <div class="row-margin">
            <div class="col-b column">
              <description />
            </div>
            <stats class="col-b stats" />
          </div>
          <ad name="wow-classic-item-overview-main" />
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
          <div class="row-margin">
            <graph-doubleline class="col-b graph"
                              :title="serverPretty"
                              storage="marketValue-quantity"
                              :value-entries="valueEntriesLocal"
            />
            <graph-doubleline class="col-b graph"
                              :title="`${serverPretty} / ${regionPretty}`"
                              storage="regional-comparison"
                              :value-entries="valueEntriesRegional"
            />
          </div>
          <ad name="wow-classic-item-overview-statistics" />
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
import itemHeader from 'src/components/wow-classic/header.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import stats from 'src/components/wow-classic/stats.vue'
import utility from 'src/components/wow-classic/utility';

export default {
  components: {
    ad,
    appContent,
    navigation,
    itemHeader,
    description,
    stats,
    graphDoubleline
  },

  async asyncData ({ store, route }) {
    const item = route.params.item
    const slug = route.params.slug

    // Only fetch item data if we actually have a new item or new server
    // if ((store.state.graphs.itemId !== parseInt(item) && store.state.graphs.uniqueName !== item) || store.state.graphs.slug !== slug) {}
    const [localPrices, regionalPrices] = await Promise.all([
      this.$cubic.get(`/wow-classic/v1/items/${slug}/${item}/prices`),
      this.$cubic.get(`/wow-classic/v1/items/${store.state.servers.activeServer.region}/${item}/prices?region=true`)
    ])

    const interpolatedRegional = utility.interpolateValues(
      localPrices.data.map(p => {
        return { ...p, scannedAt: new Date(p.scannedAt).getTime() }
      }),
      regionalPrices.data.map(p => {
        return { ...p, scannedAt: new Date(p.scannedAt).getTime() }
      }),
      'scannedAt', 'marketValue')

    store.commit('setGraph', {
      graph: 'marketValue-quantity',
      data: localPrices.data,
      timerange: 7
    })
    store.commit('setGraph', {
      graph: 'regional-comparison',
      data: localPrices.data.map((d, i) => {
        return { ...d, regionalMarketValue: interpolatedRegional[i].marketValue }
      }),
      timerange: 7
    })
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
      return [{
        name: 'Market Value',
        key: 'marketValue',
        area: false,
        price: true
      }, {
        name: `${this.regionPretty} Market Value`,
        key: 'regionalMarketValue',
        area: false,
        price: true
      }]
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
