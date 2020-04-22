<template>
  <module ref="graphMarketValueQuantity" :class="{ optionsActive }" class="graph">
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
    <template slot="footer" class="optionsActive">
      <module-time :days="timerange" :fn="setTimerange" />
      <div class="interactive" @click="toggleOptions()">
        <span>Options</span>
        <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
      </div>
      <div :class="{ active: optionsActive }" class="options">
        <div class="row">
          <div class="col-b">
            Primary:
          </div>
          <div class="col-b">
            Secondary:
          </div>
        </div>
        <div class="row">
          <div class="col-b">
            <span>Remove outliers:</span>
            <input v-model="options.outlier" />
            <span>%</span>
          </div>
        </div>
      </div>
    </template>
  </module>
</template>

<script>
import doubleline from 'src/components/charts/overhaul/doubleline.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'

export default {
  components: {
    module,
    doubleline,
    moduleTime
  },

  data () {
    return {
      optionsActive: false,
      options: {
        outlier: 10
      }
    }
  },

  computed: {
    timerange () {
      return this.$store.state.items.graphs['marketValue-quantity'].timerange
    },
    data () {
      const data = this.$store.state.items.graphs['marketValue-quantity'].data.map(d => {
        return { ...d, x: new Date(d.x) }
      })
      data[4].y1 = 15000000

      const medianArr = data.slice(0).sort((a, b) => a.y1 - b.y1)
      const len = medianArr.length
      const median = len % 2 ? medianArr[Math.floor(len / 2)].y1 : (medianArr[len / 2].y1 + medianArr[len / 2 - 1].y1) / 2

      return data.filter(d => (median / d.y1 > this.options.outlier / 100) && (d.y1 > median * (this.options.outlier / 100)))
    }
  },

  methods: {
    toggleOptions () {
      this.optionsActive = !this.optionsActive
    },
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
  max-height: 306px;

  > /deep/ .body {
    padding: 0;
    margin: 0;
    min-height: 210px;
  }

  > /deep/ .header {
    display: flex;
    justify-content: space-between;
  }

  > /deep/ .footer {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &.optionsActive {
    max-height: none;
  }
}

.interactive {
  padding: 6px 10px;
  font-size: 1.1em;
}
.options {
  border-top: 1px solid $color-font-subtle;
  padding: 10px;
  flex-basis: 100%;
  font-size: 1.1em;

  &:not(.active) {
    display: none;
  }
  .row:not(:first-child) {
    margin-top: 10px;
  }

  input {
    background-color: #554942;
    padding: 2px 4px;
    text-align: center;
    width: 35px;
    margin-left: 5px;
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
