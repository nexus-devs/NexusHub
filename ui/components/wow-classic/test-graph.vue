<template>
  <module ref="graphTest">
    <template slot="header">
      <img src="/img/warframe/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Graph Test</h3>
    </template>
    <template slot="body">
      <sparkline :data="data" :secondary-label="'Quantity'" />
    </template>
  </module>
</template>


<script>
import module from 'src/components/ui/module.vue'
import sparkline from 'src/components/charts/sparkline_two.vue'

export default {
  components: {
    sparkline,
    module
  },

  computed: {
    data () {
      const data = this.$store.state.graphs.storage['graph-value-quantity'].data
      return data.map((d) => {
        return {
          x: d.scannedAt,
          value1: d.marketValue,
          value2: d.quantity
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
/deep/ .sparkline {
  height: 100%;
}
</style>
