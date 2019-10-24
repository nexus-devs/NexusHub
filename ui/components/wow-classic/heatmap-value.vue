<template>
  <graphModule ref="heatmapValue">
    <template slot="header">
      <h3>Heatmap Market Value</h3>
    </template>
    <template slot="body">
      <heatmap :data="data"/>
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange"/>
    </template>
  </graphModule>
</template>


<script>
import graphModule from 'src/components/wow-classic/graph-module.vue'
import heatmap from 'src/components/charts/heatmap.vue'
import indicator from 'src/components/charts/indicator.vue'
import moduleTime from 'src/components/ui/module-time.vue'
import progressbar from 'src/components/progress.vue'

export default {
  components: {
    indicator,
    graphModule,
    moduleTime,
    progressbar,
    heatmap
  },

  computed: {
    timerange () {
      return this.$store.state.items.item.current.intervals.length
    },

    data () {
      const item = this.$store.state.items.item.current
      const data = []

      for (let i = 0; i < item.intervals.length; i++) {
        const day = i % 7
        if (!data[day]) data[day] = []

        for (let j = 0; j < item.intervals[i].intervals.length; j++) {
          if (!data[day][j]) data[day][j] = 0
          data[day][j] += item.intervals[i].intervals[j].marketValue
        }
      }
      return data
    }
  },

  methods: {
    async setTimerange (timerange) {
      this.$refs.heatmapValue.$refs.progress.start()
      await this.$store.dispatch('refetchItem', timerange)
      this.$refs.heatmapValue.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

</style>
