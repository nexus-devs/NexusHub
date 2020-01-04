<template>
  <module ref="heatmapQuantity">
    <template slot="header">
      <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Heatmap Market Quantity</h3>
    </template>
    <template slot="body">
      <heatmap :data="data" :tooltip-label="'Quantity'" />
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange" />
    </template>
  </module>
</template>


<script>
import heatmap from 'src/components/charts/heatmap.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'

export default {
  components: {
    module,
    moduleTime,
    heatmap
  },

  computed: {
    timerange () {
      return this.$store.state.graphs.storage['heatmap-quantity'].timerange
    },

    data () {
      const item = this.$store.state.graphs.storage['heatmap-quantity'].data
      const data = []

      for (const d of item) {
        const timestamp = new Date(d.scannedAt)

        const day = (((timestamp.getDay() - 1) % 7) + 7) % 7 // Change it so 0 is monday (also emulate modulo, fuck you javascript)
        if (!data[day]) data[day] = []

        const hour = timestamp.getHours()
        if (!data[day][hour]) data[day][hour] = []
        data[day][hour].push(d.quantity)
      }

      // Interpolate and convert data
      for (let i = 0; i < 7; i++) {
        if (!data[i]) {
          data[i] = new Array(24).fill(null)
          continue
        }
        for (let j = 0; j < 24; j++) {
          if (!data[i][j]) {
            data[i][j] = null
            continue
          }
          const hNum = data[i][j].length
          const hSum = data[i][j].reduce((acc, cV) => acc + cV)
          data[i][j] = Math.round(hSum / hNum)
        }
      }

      return data
    }
  },

  methods: {
    async setTimerange (timerange) {
      if (timerange === this.timerange) return
      this.$refs.heatmapQuantity.$refs.progress.start()
      await this.$store.dispatch('refetchGraphData', { graph: 'heatmap-quantity', timerange })
      this.$refs.heatmapQuantity.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

/deep/ .hour {
  background: $color-accent-subtle;
}
</style>
