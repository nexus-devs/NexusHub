<template>
  <div class="sparkline">
    <svg :width="width" :height="height">
      <g>
        <path :d="paths.line" class="line" />
        <path :d="paths.selector" class="selector" />
        <path :d="paths.pointer[0]" class="pointer"/>
        <path :d="paths.pointer[1]" class="pointer"/>
        <text v-for="(d, i) in animatedData" :key="d.x" :x="getLabelPosition(d).x"
              :y="getLabelPosition(d).y"
              :class="{ 'align-left': d.alignLeft ? true : false }">
          {{ data[i] && (d.isMax || d.isMin) ? data[i] + 'p' : '' }}
        </text>
        <text>{{ animatedCeil }}</text>
      </g>
    </svg>
    <div class="blur">
      <svg id="blur">
        <g>
          <path :d="paths.line" class="line" />
        </g>
      </svg>
    </div>
  </div>
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'

export default {
  props: ['data', 'margin', 'ceil'],

  data () {
    return {
      width: 0,
      height: 0,
      min: 0,
      max: 0,
      paths: {
        line: '',
        pointer: []
      },
      lastHoverPoint: {},
      scaled: {
        x: null,
        y: null
      },
      animatedData: [],
      animatedCeil: 0,
      points: []
    }
  },

  watch: {
    data (newData, oldData) {
      Tween.adjustData(this, newData, oldData)
      if (newData.length !== oldData.length) {
        this.onResize()
      }
    },
    ceil (newData, oldData) {
      Tween.adjustCeil(this, newData, oldData, this.avg)
    }
  },

  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize () {
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
    getLabelPosition (d) {
      return {
        x: this.scaled.x(d.x) + 5,
        y: this.scaled.y(d.y) + (d.isMin ? 20 : 0 || d.isMax ? -10 : 0)
      }
    },

    // Set graph scaling
    initialize (newData) {
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.y = d3.scaleLinear().range([this.height - 40, 40])
    },

    // Update graph render view
    update () {
      this.scaled.x.domain(d3.extent(this.data, (y, x) => x))
      this.scaled.y.domain([0, this.animatedCeil])
      this.points = []

      // Transform raw data into scaled data to fit into the graph
      for (const d of this.animatedData) {
        const x = this.scaled.x(d.x)
        const y = this.scaled.y(d.y)

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
  top: 0;
}
.blur {
  filter: blur(20px);
}
svg {
  text {
    font-size: 0.9em;
    fill: $color-font-subtle;

    // left of pointer if space is insufficient (determined in _normalize.js)
    &.align-left {
      transform: translateX(-40px);
    }
  }
  .pointer {
    fill: $color-subtle;
    stroke: $color-subtle;
    stroke-width: 1px;
  }
  .line {
    stroke: $color-primary;
    stroke-width: 2px;
    fill: none;
  }
}
</style>
