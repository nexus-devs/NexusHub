<template>
  <module ref="graphValueQuantity">
    <template slot="header">
      <img src="/img/warframe/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Market Value / Quantity</h3>
    </template>
    <template slot="body">
      <doubleline :data="data" :timerange="timerange" />
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
      return this.$store.state.graphs.storage['graph-value-quantity'].timerange
    },

    data () {
      const itemData = this.$store.state.graphs.storage['graph-value-quantity'].data

      return itemData.map((d) => {
        return {
          x: d.scannedAt,
          value1: d.marketValue,
          value2: d.quantity
        }
      })
    }
  },

  methods: {
    async setTimerange (timerange) {
      if (timerange === this.timerange) return
      this.$refs.graphValueQuantity.$refs.progress.start()
      await this.$store.dispatch('refetchGraphData', { graph: 'graph-value-quantity', timerange })
      this.$refs.graphValueQuantity.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
