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

      // Interpolate 7 days ago and today
      const now = new Date().getTime()
      itemData.push({
        scannedAt: now,
        marketValue: itemData[itemData.length - 1].marketValue,
        value2: itemData[itemData.length - 1].value2
      })
      if (Math.ceil(Math.abs(now - itemData[0].scannedAt) / (1000 * 60 * 60 * 24)) >= this.timerange) {
        itemData.unshift({
          scannedAt: now - (1000 * 60 * 60 * 24 * this.timerange),
          marketValue: itemData[0].marketValue,
          value2: itemData[0].value2
        })
      }

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
      await this.$store.dispatch('refetchGraphData', { graph: 'graph-value-comparison', timerange })
      this.$refs.graphValueComparison.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
