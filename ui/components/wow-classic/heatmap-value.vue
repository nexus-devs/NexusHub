<template>
  <module ref="heatmapValue">
    <template slot="header">
      <img src="/img/warframe/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Heatmap Market Value</h3>
    </template>
    <template slot="body">
      <heatmap :data="data" :parse-num="true" :tooltip-label="'Market Value'" />
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
      return this.$store.state.graphs.storage['heatmap-value'].timerange
    },

    data () {
      const item = this.$store.state.graphs.storage['heatmap-value'].data
      const data = []

      for (const d of item) {
        const timestamp = new Date(d.scannedAt * 1000) // TODO: Unix timestamp to ISODate

        const day = (timestamp.getDay() - 1) % 7 // Change it so 0 is monday
        if (!data[day]) data[day] = []

        const hour = timestamp.getHours()
        if (!data[day][hour]) data[day][hour] = []
        data[day][hour].push(d.marketValue)
      }

      for (const day of data) {
        day.map((hArr) => {
          const hNum = hArr.length
          const hSum = hArr.reduce((acc, cV) => acc + cV)
          return Math.round(hSum / hNum)
        })
      }

      return data
    }
  },

  methods: {
    async setTimerange (timerange) {
      if (timerange === this.timerange) return
      this.$refs.heatmapValue.$refs.progress.start()
      await this.$store.dispatch('refetchGraphData', { graph: 'heatmap-value', timerange })
      this.$refs.heatmapValue.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
