<template>
  <div>
    <navigation/>
    <item-header/>
    <app-content>
      <section>
        <div class="container">
          <h2 class="sub">Item Overview</h2>
          <div class="row-margin main">
            <div class="col-b column">
              <description/>
            </div>
            <stats class="col-b"/>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="sub">Statistics</h2>
          <div class="row-margin main">
            <graphValueQuantity class="col-b graph"/>
            <graphValueComparison class="col-b graph"/>
          </div>
          <div class="row-margin main">
            <heatmapValue class="col-b graph"/>
            <heatmapQuantity class="col-b graph"/>
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
import graphValueComparison from 'src/components/wow-classic/graph-value-comparison.vue'
import graphValueQuantity from 'src/components/wow-classic/graph-value-quantity.vue'
import heatmapQuantity from 'src/components/wow-classic/heatmap-quantity.vue'
import heatmapValue from 'src/components/wow-classic/heatmap-value.vue'
import itemHeader from 'src/components/wow-classic/header.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import stats from 'src/components/wow-classic/stats.vue'
import storeModule from 'src/store/wow-classic/graphs.js'

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

  computed: {
    item () {
      return this.$store.state.items.item
    }
  },

  head () {
    return {
      title: `${this.item.name} · NexusHub`
    }
  },

  async asyncData ({ store, route }) {
    const item = route.params.item
    const region = route.params.region
    const server = route.params.server

    // Only fetch item data if we actually have a new item
    let itemData = store.state.items.item
    if (store.state.items.item.itemId !== item) {
      let query = ''
      if (region) {
        query = `?region=${region}`
        if (server) {
          query += `&server=${server}`
        }
      }
      itemData = await this.$cubic.get(`/wow-classic/v1/items/${item}/prices${query}`)
    }

    store.commit('setGraphItem', itemData)

    // Commit start value for all graphs
    store.commit('setGraphData', { graph: 'graph-value-quantity', data: itemData })
    store.commit('setGraphData', { graph: 'graph-value-comparison', data: itemData })
    store.commit('setGraphData', { graph: 'heatmap-quantity', data: itemData })
    store.commit('setGraphData', { graph: 'heatmap-value', data: itemData })
  },

  storeModule
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

.row-margin {
  justify-content: flex-start;
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
