<template>
  <module ref="graphHeatmap" class="graph">
    <template slot="header">
      <div class="title">
        <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
        <h3>Heatmap</h3>
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
      return this.$store.state.items.item.stats.current.marketValue
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
  }

  > /deep/ .footer {
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
