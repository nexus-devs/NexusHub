<template>
  <module ref="graphHeatmap" class="graph">
    <template slot="header">
      <div class="title">
        <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
        <h3>Heatmap</h3>
      </div>
      <div class="legend-container">
        <div class="legend">
          <div class="legend-above">
            <span>{{ legendStats.min }}</span>
            <span>{{ legendStats.max }}</span>
          </div>
          <div class="legend-bar">
            <div class="medium-divide" />
          </div>
          <div class="legend-below">
            <span>Market Value ({{ legendStats.medium }})</span>
          </div>
        </div>
      </div>
    </template>
    <template slot="body">
      <heatmap :data="data" :medium="medium" />
    </template>
    <template slot="footer">
      <module-time />
    </template>
  </module>
</template>

<script>
import heatmap from 'src/components/charts/overhaul/heatmap.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'

export default {
  components: {
    module,
    heatmap,
    moduleTime
  },

  computed: {
    medium () {
      return this.$store.state.items.item.stats.current ? this.$store.state.items.item.stats.current.marketValue : null
    },
    data () {
      const data = []
      const bracketSize = 2 // Hours per bracket
      const rawData = this.$store.state.items.graphs['heatmap-primary'].data

      for (const entry of rawData) {
        const scannedAt = new Date(entry.scannedAt)
        const day = (((scannedAt.getDay() - 1) % 7) + 7) % 7 // Change it so 0 is monday (also emulate modulo, fuck you javascript)
        const hour = Math.floor(scannedAt.getHours() / bracketSize)

        const storedData = data.find(d => d.day === day && d.hour === hour)
        if (!storedData) data.push({ value: entry.marketValue, count: 1, day, hour })
        else {
          storedData.value += entry.marketValue
          storedData.count++
        }
      }

      return data.map(d => {
        return { ...d, value: Math.round(d.value / d.count) }
      })
    },
    legendStats () {
      const mappedValues = this.data.map(d => d.value)
      const min = Math.min(...mappedValues)
      const max = Math.max(...mappedValues)

      const toGold = (p) => (p / 10000).toFixed(2) + 'g'
      return { min: toGold(min), max: toGold(max), medium: toGold(this.medium) }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.graph {
  max-width: none !important;
  // max-height: 306px;

  > /deep/ .body {
    padding: 0;
    margin: 0;
    min-height: 210px;
  }

  > /deep/ .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > /deep/ .footer {
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.legend-container {
  flex-basis: 42%;
  padding-right: 5px;

  @media (max-width: $breakpoint-s) {
    flex-basis: 50%;
    padding-right: 0;
  }

  .legend {
    display: flex;
    flex-direction: column;

    .legend-above, .legend-below {
      color: $color-font-body;
      font-size: 0.7em;
      display: flex;
      justify-content: space-between;
      flex: 1;
      width: 100%;
    }
    .legend-below {
      justify-content: space-around;
    }
    .legend-bar {
      display: flex;
      justify-content: center;
      height: 8px;
      width: 100%;
      background: linear-gradient(to right, #00c0ff, transparent, #e6ad02);

      .medium-divide {
        width: 1px;
        height: 100%;
        background-color: $color-font-body;
      }
    }
  }
}
</style>
