<template>
  <module ref="graphValueComparison">
    <template slot="header">
      <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3>Market Value Server vs. Regional</h3>
    </template>
    <template slot="body">
      <div class="graph-wrapper">
        <div class="axis y1">
          <div class="labels">
            <span v-for="(label, i) in axisY1" :key="'axisY1' + i">{{ label }}g</span>
          </div>
        </div>
        <div class="graph">
          <sparkline :data="data" :secondary-label="'Regional'" />
          <div class="axis x">
            <div class="labels">
              <span v-for="(label, i) in axisX" :key="'axisX' + i">{{ label }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange" />
    </template>
  </module>
</template>


<script>
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'
import moment from 'moment'
import sparkline from 'src/components/charts/sparkline_two.vue'
import utility from './utility'

export default {
  components: {
    sparkline,
    module,
    moduleTime
  },

  computed: {
    timerange () {
      return this.$store.state.graphs.storage['graph-value-comparison'].timerange
    },

    data () {
      const data = this.$store.state.graphs.storage['graph-value-comparison'].data.map((d) => {
        return {
          x: d.scannedAt,
          value1: d.value2,
          value2: d.marketValue
        }
      })

      // Interpolate timerange days ago and today
      data.unshift({ ...data[0], x: new Date().getTime() - 1000 * 60 * 60 * 24 * this.timerange })
      data.push({ ...data[data.length - 1], x: new Date().getTime() })

      return data
    },

    axisY1 () {
      const totalData = this.data.concat(this.data.map(x => {
        return { value1: x.value2 }
      }))
      const { tickRange, lowerBound, upperBound } = utility.generateGraphScala(totalData, 4, 'value1')
      const scala = []
      for (let tick = upperBound; tick >= lowerBound; tick -= tickRange) {
        // Convert to gold (so 54213 -> 5.42)
        scala.push((tick / 10000).toFixed(2))
      }
      return scala
    },

    axisX () {
      const now = moment()
      const stepSize = Math.floor(this.timerange / 6)
      const scala = []
      for (let i = this.timerange; i > 0; i -= stepSize) scala.push(now.clone().subtract(i, 'days').format('DD. MMM'))
      return scala.concat(['Today'])
    }
  },

  methods: {
    async setTimerange (timerange) {
      if (timerange === this.timerange) return
      this.$refs.graphValueComparison.$refs.progress.start()
      await this.$store.dispatch('refetchGraphData', { graph: 'graph-value-quantity', timerange })
      this.$refs.graphValueComparison.$refs.progress.finish()
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
