<template>
  <module ref="graphMarketValueQuantity" class="graph">
    <template slot="header">
      <div class="title">
        <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
        <h3>Market Value / Quantity</h3>
      </div>
      <div class="legend-container">
        <div class="legend">
          <div class="primary">
            <span class="dot" /> Market Value
          </div>
          <div class="secondary">
            <span class="dot" /> Quantity
          </div>
        </div>
      </div>
    </template>
    <template slot="body">
      <doubleline :data="data" />
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange" />
      <module-options />
    </template>
  </module>
</template>

<script>
import doubleline from 'src/components/charts/overhaul/doubleline.vue'
import module from 'src/components/ui/module.vue'
import moduleOptions from 'src/components/wow-classic/module-chart-options.vue'
import moduleTime from 'src/components/ui/module-time.vue'

export default {
  components: {
    module,
    doubleline,
    moduleOptions,
    moduleTime
  },

  computed: {
    timerange () {
      return this.$store.state.items.graphs['marketValue-quantity'].timerange
    },
    data () {
      return this.$store.state.items.graphs['marketValue-quantity'].data.map(d => {
        return { ...d, x: new Date(d.x) }
      })
    }
  },

  methods: {
    async setTimerange (timerange) {
      if (timerange === this.timerange) return
      this.$refs.graphMarketValueQuantity.$refs.progress.start()

      const slug = this.$store.state.servers.activeServer.slug
      const itemId = this.$store.state.items.item.itemId
      const item = await this.$cubic.get(`/wow-classic/v1/items/${slug}/${itemId}/prices?timerange=${timerange}`)
      await this.$store.commit('setGraph', {
        graph: 'marketValue-quantity',
        data: item.data.map(p => {
          return {
            x: p.scannedAt,
            y1: p.marketValue,
            y2: p.quantity
          }
        }),
        timerange
      })

      this.$refs.graphMarketValueQuantity.$refs.progress.finish()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.graph {
  max-width: none !important;

  > /deep/ .body {
    padding: 0;
    margin: 0;
    min-height: 210px;
  }

  > /deep/ .header {
    display: flex;
    justify-content: space-between;
  }
}
.title {
  display: inline-block;
}
.legend-container {
  display: flex;
  justify-content: right;
  flex: 1;
  padding-right: 35px;

  @media (max-width: $breakpoint-s) {
    padding-right: 0;
  }
}
.legend {
  white-space: nowrap;
  font-size: 0.7em;
  color: $color-font-body;
  pointer-events: all;

  .dot {
    margin-top: -1px;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
  }
  .primary .dot {
    background-color: $color-primary-subtle;
  }
  .secondary .dot {
    background-color: $color-accent-subtle;
  }
}
</style>
