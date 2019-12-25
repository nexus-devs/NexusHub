<template>
  <module ref="graphTest">
    <template slot="header">
      <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Graph Test</h3>
    </template>
    <template slot="body" class="body">
      <div class="graph-wrapper">
        <div class="axis">
          Test
        </div>
        <div class="graph">
          <sparkline :data="data" :secondary-label="'Quantity'" />
        </div>
        <div class="axis">
          {{ counter }}
        </div>
      </div>
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

  data () {
    return {
      counter: 8
    }
  },

  computed: {
    data () {
      this.counter += 1
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
@import '~src/styles/partials/wow-classic/importer';

.graph-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
}
.graph {
  flex: 1;
}
.axis {
}

/deep/ .sparkline {
  height: 100%;
  width: 100%;
}
</style>
