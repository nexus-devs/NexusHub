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
      for (const day of item) {
        for (const hour of day) {
          let value1 = hour.marketValue
          const value2 = hour.EUmarketValue || hour.USmarketValue
          if (hour.EUmarketValue && hour.USmarketValue) value1 = hour.USmarketValue

          data.push({ x: i, value1, value2 })
          i++
        }
      }

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
