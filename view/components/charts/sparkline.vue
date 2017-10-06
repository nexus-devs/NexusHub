<template>
  <div>
    <filter id="gradient">
      <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stop-color="#05a"/>
        <stop offset="100%" stop-color="#0a5"/>
      </linearGradient>
    </filter>
    <svg :width="width" :height="height">
      <g>
        <path class="line" :d="paths.line" filter="gradient" />
        <path class="selector" :d="paths.selector" />
        <text v-for="(d, i) in animatedData" :x="scaled.x(d.x) + 5"
              :y="scaled.y(d.y) + (d.isMin ? 20 : 0 || d.isMax ? -5 : 0)">
          {{ data[i] && (d.isMax || d.isMin) ? data[i] + 'p' : '' }}
        </text>
        <path class="pointer" :d="paths.pointer[0]"></path>
        <path class="pointer" :d="paths.pointer[1]"></path>
      </g>
    </svg>
    <div class="blur">
      <svg id="blur">
        <path class="line" :d="paths.line" />
      </svg>
    </div>
  </div>
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'

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
      Tween.adjustData(this, newData, oldData)
    },
    ceil(newData, oldData) {
      Tween.adjustCeil(this, newData, oldData)
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

    createLine: d3.line().x(d => d.x).y(d => d.y).curve(d3.curveBasis),
    createMinPointer: d3.area().x(d => d.x).y0(d => d.y + 20).y1(d => d.y),
    createMaxPointer: d3.area().x(d => d.x).y0(d => d.y - 20).y1(d => d.y),

    // Set graph scaling
    initialize() {
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.y = d3.scaleLinear().range([this.height, 0])
    },

    // Update graph render view
    update() {
      this.scaled.x.domain(d3.extent(this.data, (y, x) => x))
      this.scaled.y.domain([0, this.animatedCeil])
      this.points = []

      for (let d of this.animatedData) {
        this.points.push({
          x: this.scaled.x(d.x),
          y: this.scaled.y(d.y)
        })

        // Create min/max pointers
        if (d.isMin) {
          this.paths.pointer[0] = this.createMinPointer([{
            x: this.scaled.x(d.x),
            y: this.scaled.y(d.y)
          }])
        }
        if (d.isMax) {
          this.paths.pointer[1] = this.createMaxPointer([{
            x: this.scaled.x(d.x),
            y: this.scaled.y(d.y)
          }])
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
.area {
  fill: none;
}
</style>
