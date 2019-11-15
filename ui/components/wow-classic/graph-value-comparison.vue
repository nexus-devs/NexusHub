<template>
  <module ref="graphValueComparison">
    <template slot="header">
      <img src="/img/warframe/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Market Value Server vs. Regional</h3>
    </template>
    <template slot="body">
      <doubleline :data="data" :same-scale="true" :regional="regional" :timerange="timerange"/>
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

    regional () {
      const item = this.$store.state.graphs.storage['graph-value-comparison'].data[0][0]
      return (item.EUmarketValue && item.USmarketValue)
    },

    data () {
      const item = this.$store.state.graphs.storage['graph-value-comparison'].data
      const data = []

      const weeks = Math.floor(item.length / 7)
      let skipCounter = 0
      let v1Aggregate = 0
      let v2Aggregate = 0
      let i = 0
      for (const day of item) {
        for (const hour of day) {
          skipCounter++
          const value1 = (hour.EUmarketValue && hour.USmarketValue) ? hour.USmarketValue : hour.marketValue
          const value2 = hour.EUmarketValue || hour.USmarketValue
          v1Aggregate += Math.round(value1 * (1 / weeks))
          v2Aggregate += Math.round(value2 * (1 / weeks))

          if (skipCounter >= weeks) {
            data.push({ x: i, value1: v1Aggregate, value2: v2Aggregate })
            i++
            skipCounter = 0
            v1Aggregate = 0
            v2Aggregate = 0
          }
        }
      }

      return data
    }
  },

  methods: {
    async setTimerange (timerange) {
      if (timerange === this.timerange) return
      this.$refs.graphValueComparison.$refs.progress.start()
      await this.$store.dispatch('refetchGraphData', { graph: 'graph-value-comparison', timerange })
      this.$refs.graphValueComparison.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
