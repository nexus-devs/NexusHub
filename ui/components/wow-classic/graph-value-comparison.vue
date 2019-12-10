<template>
  <module ref="graphValueComparison">
    <template slot="header">
      <img src="/img/warframe/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Market Value Server vs. Regional</h3>
    </template>
    <template slot="body">
      <doubleline :data="data" :same-scale="true" :timerange="timerange" />
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange" />
    </template>
  </module>
</template>


<script>
import doubleline from 'src/components/charts/doubleline.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'

export default {
  components: {
    doubleline,
    module,
    moduleTime
  },

  computed: {
    timerange () {
      return this.$store.state.graphs.storage['graph-value-comparison'].timerange
    },

    data () {
      const itemData = this.$store.state.graphs.storage['graph-value-comparison'].data

      return itemData.map((d) => {
        return {
          x: d.scannedAt,
          value1: d.value2,
          value2: d.marketValue
        }
      })
    }
  },

  methods: {
    async setTimerange (timerange) {
      if (timerange === this.timerange) return
      this.$refs.graphValueComparison.$refs.progress.start()
      await this.$store.dispatch('refetchGraphData', { graph: 'graph-value-comparison', timerange, regional: true })
      this.$refs.graphValueComparison.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
