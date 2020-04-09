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
      <section v-if="displayGraphs">
        <div class="container">
          <h2 class="sub">
            Statistics
          </h2>
          <div class="mobile-hover-info">
            <span>Click on the graphs to see more detailed information.</span>
          </div>
          <div v-if="global" class="row-margin">
            <graph-value-quantity storage="graph-overview-eu" region="eu" title="Europe" class="col-b graph" />
            <graph-value-quantity storage="graph-overview-us" region="us" title="United States" class="col-b graph" />
          </div>
          <div v-if="!global" class="row-margin">
            <graph-value-quantity storage="graph-value-quantity" class="col-b graph" />
            <graph-value-comparison class="col-b graph" />
          </div>
          <div v-if="!global" class="row-margin">
            <heatmap-value class="col-b graph" />
            <heatmap-quantity class="col-b graph" />
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
import graphValueComparison from 'src/components/wow-classic/graph-value-comparison.vue'
import graphValueQuantity from 'src/components/wow-classic/graph-value-quantity.vue'
import heatmapQuantity from 'src/components/wow-classic/heatmap-quantity.vue'
import heatmapValue from 'src/components/wow-classic/heatmap-value.vue'
import itemHeader from 'src/components/wow-classic/header.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import stats from 'src/components/wow-classic/stats.vue'
import storeModule from 'src/store/wow-classic/graphs.js'
import utility from 'src/components/wow-classic/utility.js'

export default {
  components: {
    ad,
    appContent,
    navigation,
    itemHeader,
    description,
    stats,
    graphValueComparison,
    graphValueQuantity,
    heatmapValue,
    heatmapQuantity
  },

  async asyncData ({ store, route }) {
    const item = route.params.item
    const slug = route.params.slug

    // Only fetch item data if we actually have a new item or new server
    if ((store.state.graphs.itemId !== parseInt(item) && store.state.graphs.uniqueName !== item) || store.state.graphs.slug !== slug) {
      // Fetch EU and US graphs
      if (!slug) {
        const [dataEU, dataUS] = await Promise.all([
          this.$cubic.get(`/wow-classic/v1/items/eu/${item}/prices?region=true`),
          this.$cubic.get(`/wow-classic/v1/items/us/${item}/prices?region=true`)
        ])

        store.commit('setGraphItem', { itemId: dataEU.itemId, uniqueName: dataEU.uniqueName, slug: '' })

        // Commit start value for all graphs
        store.commit('setGraphData', { graph: 'graph-overview-eu', item: dataEU })
        store.commit('setGraphData', { graph: 'graph-overview-us', item: dataUS })

      // Fetch local server graphs
      } else {
        const region = store.state.servers.activeServer.region

        const parallel = []
        parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/${item}/prices`))
        parallel.push(this.$cubic.get(`/wow-classic/v1/items/${region}/${item}/prices?region=true`))
        const [itemData, regionalData] = await Promise.all(parallel)
        const regionalDataEdited = utility.formatRegionalData(itemData, regionalData)

        store.commit('setGraphItem', { itemId: itemData.itemId, uniqueName: itemData.uniqueName, slug })

        // Commit start value for all graphs
        store.commit('setGraphData', { graph: 'graph-value-quantity', item: itemData })
        store.commit('setGraphData', { graph: 'graph-value-comparison', item: regionalDataEdited })
        store.commit('setGraphData', { graph: 'heatmap-quantity', item: itemData })
        store.commit('setGraphData', { graph: 'heatmap-value', item: itemData })
      }
    }
  },

  computed: {
    global () {
      return !this.$store.state.servers.activeServer.slug
    },
    item () {
      return this.$store.state.items.item
    },
    displayGraphs () {
      return this.global
        ? this.$store.state.graphs.storage['graph-overview-us'].data && this.$store.state.graphs.storage['graph-overview-us'].data.length
        : this.$store.state.graphs.storage['graph-value-quantity'].data && this.$store.state.graphs.storage['graph-value-quantity'].data.length
    }
  },

  head () {
    const server = this.$store.state.servers.activeServer
    const serverPretty = `${server.name} (${server.faction.charAt(0).toUpperCase() + server.faction.slice(1)})`

    return {
      title: server.slug ? `${this.item.name} Prices on ${serverPretty} · NexusHub` : `${this.item.name} Prices on the WoW Classic Auction House · NexusHub`,
      link: server.slug ? [{ rel: 'canonical', href: `https://nexushub.co/wow-classic/items/${this.item.uniqueName}` }] : undefined,
      meta: meta({
        title: `${this.item.name} Prices on NexusHub`,
        description: server.slug ? `${this.item.name} Prices on the World of Warcaft Classic Auction House for ${serverPretty}` : `${this.item.name} Prices on the World of Warcaft Classic Auction House.`,
        image: `${this.item.icon}`
      })
    }
  },

  storeModule
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
.graph {
  max-width: 100%;
  min-height: 300px;
  flex-basis: 60%;

  /deep/ .body {
    height: 100%;
  }
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
