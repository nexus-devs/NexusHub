<template>
  <module ref="heatmapQuantity">
    <template slot="header">
      <h3>Heatmap Market Quantity</h3>
    </template>
    <template slot="body">
      <heatmap :data="data" :tooltip-label="'Quantity'"/>
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange"/>
    </template>
  </module>
</template>


<script>
import heatmap from 'src/components/charts/heatmap.vue'
import indicator from 'src/components/charts/indicator.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'
import progressbar from 'src/components/progress.vue'

export default {
  components: {
    indicator,
    module,
    moduleTime,
    progressbar,
    heatmap
  },

  computed: {
    timerange () {
      return this.$store.state.graphs.storage['heatmap-quantity'].timerange
    },

    data () {
      const item = this.$store.state.graphs.storage['heatmap-quantity'].data
      const data = []

      for (let i = 0; i < item.intervals.length; i++) {
        const day = i % 7
        if (!data[day]) data[day] = []

        for (let j = 0; j < item.intervals[i].intervals.length; j++) {
          if (!data[day][j]) data[day][j] = 0
          data[day][j] += item.intervals[i].intervals[j].qty
        }
      }
      return data
    }
  },

  methods: {
    async setTimerange (timerange) {
      this.$refs.heatmapQuantity.$refs.progress.start()
      await this.$store.dispatch('refetchGraphData', { graph: 'heatmap-quantity', timerange })
      this.$refs.heatmapQuantity.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ .hour {
  background: $color-error-dark;
}
</style>
