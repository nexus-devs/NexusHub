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

      const weeks = Math.floor(item.length / 7)
      for (let i = 0; i < weeks * 7; i++) {
        const day = i % 7
        if (!data[day]) data[day] = []

        for (let j = 0; j < item[i].length; j++) {
          if (!data[day][j]) data[day][j] = 0
          data[day][j] += Math.round(item[i][j].marketValue * (1 / weeks))
        }
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
