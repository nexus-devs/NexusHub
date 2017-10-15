<template>
  <div>
    <svg :width="width" :height="height">
      <g>
        <path class="line" :d="paths.line" />
        <path class="selector" :d="paths.selector" />
        <path class="pointer" :d="paths.pointer[0]"></path>
        <path class="pointer" :d="paths.pointer[1]"></path>
        <text v-for="(d, i) in animatedData" :x="getLabelPosition(d).x"
              :y="getLabelPosition(d).y">
          {{ data[i] && (d.isMax || d.isMin) ? data[i] + 'p' : '' }}
        </text>
        <text>{{animatedCeil}}</text>
      </g>
    </svg>
    <div class="blur">
      <svg id="blur">
        <g>
          <path class="line" :d="paths.line" />
        </g>
      </svg>
    </div>
  </div>
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'
import _ from 'lodash'
const downScaleFactor = 0.66

export default {
  props: ['data', 'margin', 'ceil'],
  data() {
    return {
      width: 0,
      height: 0,
      min: 0,
      max: 0,
      paths: {
        line: '',
        pointer: [],
      },
      lastHoverPoint: {},
      scaled: {
        x: null,
        y: null,
      },
      animatedData: [],
      animatedCeil: 0,
      points: [],
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  watch: {
    data(newData, oldData) {
      this.initialize(newData)
      Tween.adjustData(this, newData, oldData)
    },
    ceil(newData, oldData) {
      Tween.adjustCeil(this, newData, oldData, this.avg)
    }
  },
  methods: {

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize() {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
      this.initialize()
      Tween.adjustData(this, this.data, this.data)
      Tween.adjustCeil(this, this.ceil, this.ceil)
    },

    createLine: d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCatmullRom),
    createMinPointer: d3.area().x(d => d.x).y0(d => d.y + 20).y1(d => d.y),
    createMaxPointer: d3.area().x(d => d.x).y0(d => d.y - 20).y1(d => d.y),

    // Positioning for text labels
    getLabelPosition(d) {
      const deltaAvg = d.y ? Math.abs(d.y - this.avg) : d.y
      const y = d.y > this.avg ? d.y - downScaleFactor * deltaAvg : d.y + downScaleFactor * deltaAvg
      return {
        x: this.scaled.x(d.x) + 5,
        y: this.scaled.y(y) + (d.isMin ? 20 : 0 || d.isMax ? -10 : 0)
      }
    },

    // Set graph scaling
    initialize(newData) {
      let data = newData || this.data // handle new data if passed
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.y = d3.scaleLinear().range([this.height, 0])

      // Sorted Data for median calculation
      this.avg = {
        value: 0,
        count: 0
      }
      data.forEach(d => {
        this.avg.value += d ? d : 0
        this.avg.count += d ? 1 : 0
      })
      this.avg = this.avg.value / this.avg.count
    },

    // Update graph render view
    update() {
      this.scaled.x.domain(d3.extent(this.data, (y, x) => x))
      this.scaled.y.domain([0, this.animatedCeil])
      this.points = []

      for (let d of this.animatedData) {
        const deltaAvg = d.y ? Math.abs(d.y - this.avg) : d.y // remove a percentage of the value beyond the median
        const x = this.scaled.x(d.x)
        const y = this.scaled.y(d.y > this.avg ? d.y - downScaleFactor * deltaAvg : d.y + downScaleFactor * deltaAvg)

        this.points.push({ x, y })

        // Create min/max pointers
        if (d.isMin) {
          this.paths.pointer[0] = this.createMinPointer([{ x, y }])
        }
        if (d.isMax) {
          this.paths.pointer[1] = this.createMaxPointer([{ x, y }])
        }
      }
      this.paths.line = this.createLine(this.points)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

#filters {
  position: absolute;
}
#blur {
  position: absolute;
  top: 15px; // box margin
}
.blur {
  filter: blur(20px);
}
svg {
  text {
    font-size: 0.9em;
    fill: $colorFontSubtle;
  }
  .pointer {
    fill: $colorSubtle;
    stroke: $colorSubtle;
    stroke-width: 1px;
  }
  .line {
    stroke: $colorPrimary;
    stroke-width: 2px;
    fill: none;
  }
}
</style>
