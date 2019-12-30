<template>
  <module ref="graphTest">
    <template slot="header">
      <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Graph Test</h3>
    </template>
    <template slot="body">
      <div class="graph-wrapper">
        <div class="axis y1">
          <div class="labels">
            <span v-for="(label, i) in axisY1" :key="'axisY1' + i">{{ label }}g</span>
          </div>
        </div>
        <div class="graph">
          <sparkline :data="data" :secondary-label="'Quantity'" />
          <div class="axis x">
            <div class="labels">
              <span>10. Dec</span>
              <span>20. Dec</span>
              <span>30. Dec</span>
              <span>10. Jan</span>
            </div>
          </div>
        </div>
        <div class="axis y2">
          <div class="labels">
            <span>500</span>
            <span>300</span>
            <span>100</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </template>
  </module>
</template>


<script>
import module from 'src/components/ui/module.vue'
import sparkline from 'src/components/charts/sparkline_two.vue'
import utility from './utility'

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
    },

    axisY1 () {
      const { tickRange, lowerBound, upperBound } = utility.generateGraphScala(this.data, 4, 'value1')
      const scala = []
      for (let tick = upperBound; tick >= lowerBound; tick -= tickRange) {
        // Convert to gold (so 54213 -> 5.42)
        scala.push((tick / 10000).toFixed(2))
      }
      return scala
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
  display: flex;
  flex-direction: column;
  flex: 1;
}

.axis {
  height: calc(100% - 20px); // Adjust for x axis height

  .labels {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: $color-font-body;
      font-size: 0.8em;
    }
  }
}
.axis.y1 {
  border-right: 1px solid $color-font-body;
  padding-right: 5px;
  text-align: right;
}
.axis.y2 {
  border-left: 1px solid $color-font-body;
  padding-left: 5px;
  text-align: left;
}
.axis.x {
  flex-shrink: 0;
  height: 20px;
  position: relative;
  border-top: 1px solid $color-font-body;

  .labels {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

/deep/ .sparkline {
  height: 100%;
  width: 100%;
}
</style>
