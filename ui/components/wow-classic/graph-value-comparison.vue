<template>
  <module ref="graphValueComparison">
    <template slot="header">
      <h3>Market Value Server vs. Regional</h3>
    </template>
    <template slot="body">
      <doubleline :data="data" :same-scale="true"/>
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange"/>
    </template>
  </module>
</template>


<script>
import doubleline from 'src/components/charts/doubleline.vue'
import indicator from 'src/components/charts/indicator.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'
import progressbar from 'src/components/progress.vue'

export default {
  components: {
    indicator,
    doubleline,
    module,
    moduleTime,
    progressbar
  },

  computed: {
    timerange () {
      return this.$store.state.graphs.storage['graph-value-comparison'].timerange
    },

    data () {
      const item = this.$store.state.graphs.storage['graph-value-comparison'].data
      const data = []

      let i = 0
      for (const day of item.intervals) {
        for (const hour of day.intervals) {
          data.push({ x: i, value1: hour.marketValue, value2: hour.qty })
          i++
        }
      }

      /*
      let v1 = item
      let v2 = item.EU || item.US
      if (item.EU && item.US) {
        v1 = item.EU
        v2 = item.US
      }

      let x = 0
      for (const [i, day] of v1.current.intervals) {
        for (const [j, hour] of day.intervals) {
          const value2 = v2.current.intervals[i].intervals[j].marketValue
          data.push({ x, value1: hour.marketValue, value2 })
          x++
        }
      }
       */

      return data
    }
  },

  methods: {
    async setTimerange (timerange) {
      this.$refs.graphValueComparison.$refs.progress.start()
      await this.$store.dispatch('refetchGraphData', { graph: 'graph-value-comparison', timerange })
      this.$refs.graphValueComparison.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

</style>
