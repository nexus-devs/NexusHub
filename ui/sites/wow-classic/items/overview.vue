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
          <div class="row-margin main">
            <div class="col-b column">
              <description />
            </div>
            <stats v-if="item.stats.current" class="col-b" />
          </div>
        </div>
      </section>
      <section v-if="displayGraphs">
        <div class="container">
          <h2 class="sub">
            Statistics
          </h2>
          <div class="row-margin main">
            <graph-test class="col-b graph" />
            <graph-test class="col-b graph" />
          </div>
          <div class="row-margin main">
            <graph-value-quantity class="col-b graph" />
            <graph-value-comparison class="col-b graph" />
          </div>
          <div class="row-margin main">
            <heatmap-value class="col-b graph" />
            <heatmap-quantity class="col-b graph" />
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import description from 'src/components/wow-classic/description.vue'
import graphTest from 'src/components/wow-classic/test-graph.vue'
import graphValueComparison from 'src/components/wow-classic/graph-value-comparison.vue'
import graphValueQuantity from 'src/components/wow-classic/graph-value-quantity.vue'
import heatmapQuantity from 'src/components/wow-classic/heatmap-quantity.vue'
import heatmapValue from 'src/components/wow-classic/heatmap-value.vue'
import itemHeader from 'src/components/wow-classic/header.vue'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import stats from 'src/components/wow-classic/stats.vue'
import storeModule from 'src/store/wow-classic/graphs.js'
import utility from 'src/components/wow-classic/utility.js'

export default {
  components: {
    appContent,
    navigation,
    itemHeader,
    description,
    stats,
    graphValueComparison,
    graphValueQuantity,
    heatmapValue,
    heatmapQuantity,
    graphTest
  },

  async asyncData ({ store, route }) {
    const item = route.params.item
    const slug = route.params.slug

    // Only fetch item data if we actually have a new item or new server
    if (store.state.graphs.itemId !== parseInt(item) || store.state.graphs.slug !== slug) {
      const region = store.state.servers.region

      const parallel = []
      parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/${item}/prices`))
      parallel.push(this.$cubic.get(`/wow-classic/v1/items/${region}/${item}/prices?region=true`))
      const [itemData, regionalData] = await Promise.all(parallel)
      const regionalDataEdited = utility.formatRegionalData(itemData, regionalData)

      store.commit('setGraphItem', { itemId: itemData.itemId, slug })

      // Commit start value for all graphs
      store.commit('setGraphData', { graph: 'graph-value-quantity', item: itemData })
      store.commit('setGraphData', { graph: 'graph-value-comparison', item: regionalDataEdited })
      store.commit('setGraphData', { graph: 'heatmap-quantity', item: itemData })
      store.commit('setGraphData', { graph: 'heatmap-value', item: itemData })
    }
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    displayGraphs () {
      return this.$store.state.graphs.storage['graph-value-quantity'].data.length
    }
  },

  head () {
    return {
      title: `${this.item.name} · NexusHub`
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

.module {
  max-width: 450px;
}
.graph {
  max-width: 100%;
  min-height: 300px;
}

.btn-subtle {
  margin-top: 20px;
}
</style>
