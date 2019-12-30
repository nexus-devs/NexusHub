<template>
  <div class="sparkline">
    <div class="graph">
      <svg :width="width" :height="height">
        <g>
          <path :d="paths.line1" class="line" />
          <path :d="paths.line2" class="line secondary" />
        </g>
      </svg>
    </div>
    <div class="tooltip-container">
      <svg :width="width + 160" :height="height">
        <g v-for="d in data" :key="d.x" class="point">
          <rect :x="scaled.x(d.x)" class="hover" />
          <circle :cx="scaled.x(d.x)" :cy="scaled.v1(d.value1)" r="3" class="circle" />
          <circle :cx="scaled.x(d.x)" :cy="scaled.v2(d.value2)" r="3" class="circle secondary" />
          <g class="tooltip">
            <rect :x="scaled.x(d.x) + 12" :height="'87px'" :width="tooltipWidth" />
            <text :x="scaled.x(d.x) + 20" y="22px" class="title">
              {{ parseHoursAgo(d.x) }}
            </text>
            <circle :cx="scaled.x(d.x) + 23" cy="45px" r="3" class="circle" />
            <text :x="scaled.x(d.x) + 30" y="50px" class="num">
              {{ parsePrice(d.value1) }}
            </text>
            <circle :cx="scaled.x(d.x) + 23" cy="70px" r="3" class="circle secondary" />
            <text v-if="secondaryLabel" :x="scaled.x(d.x) + 30" y="75px" class="sub">
              {{ secondaryLabel }}: {{ d ? `${d.value2}` : 0 }}
            </text>
            <text v-else :x="scaled.x(d.x) + 30" y="75px" class="sub">
              {{ d ? `${d.value2}` : 0 }}
            </text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>


<script>
import * as d3 from 'd3'
import Tween from './_tween.js'
import utility from 'src/components/wow-classic/utility.js'

export default {
  props: ['data', 'secondaryLabel'],

  data () {
    return {
      width: 0,
      height: 0,
      tooltipWidth: 0,
      paths: {
        line1: '',
        line2: ''
      },
      scaled: {
        x: (x) => x,
        v1: (x) => x,
        v2: (x) => x
      }
    }
  },

  watch: {
    data (newData, oldData) {
      Tween.adjustData(this, newData, oldData)
      if (newData.length !== oldData.length) {
        this.onResize()
      }
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    // Set graph scaling
    initialize () {
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.v1 = d3.scaleLinear().range([this.height, 0])
      this.scaled.v2 = d3.scaleLinear().range([this.height - 40, 40])
    },

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize () {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
      this.initialize()
      Tween.adjustData(this, this.data, this.data)
    },

    // Update graph render
    update () {
      this.scaled.x.domain(d3.extent(this.data, d => d.x))
      const { lowerBound, upperBound } = utility.generateGraphScala(this.data, 4, 'value1')
      this.scaled.v1.domain([lowerBound, upperBound])
      this.scaled.v2.domain(d3.extent(this.data, d => d.value2))

      const lineValue1 = d3.line().x(d => this.scaled.x(d.x)).y(d => this.scaled.v1(d.value1)).curve(d3.curveMonotoneX)
      const lineValue2 = d3.line().x(d => this.scaled.x(d.x)).y(d => this.scaled.v2(d.value2)).curve(d3.curveMonotoneX)
      this.paths.line1 = lineValue1(this.data)
      this.paths.line2 = lineValue2(this.data)

      this.updateTooltipSize()
    },

    // Update tooltip width
    updateTooltipSize () {
      const getMaxWidth = (selection) => d3.max(selection.nodes(), n => n.getComputedTextLength())
      const titles = d3.select(this.$el).selectAll('.title')
      const primaryLables = d3.select(this.$el).selectAll('.num')
      const secondaryLables = d3.select(this.$el).selectAll('.sub')

      const widths = [getMaxWidth(titles), getMaxWidth(primaryLables), getMaxWidth(secondaryLables)]
      this.tooltipWidth = Math.round(d3.max(widths)) + 8 + 8 // Add padding
    },

    // Parses hours into days + hours ago
    parseHoursAgo (timestamp) {
      const rawHours = Math.round((new Date().getTime() - timestamp) / 1000 / 60 / 60)

      const days = Math.floor(rawHours / 24)
      const hours = rawHours - days * 24

      let str = ''
      if (days > 0) str += days + ' day'
      if (days > 1) str += 's'
      if (days > 0 && hours > 0) str += ', '
      if (hours > 0) str += hours + ' hour'
      if (hours > 1) str += 's'

      if (days > 0 || hours > 0) str += ' ago'
      else str = 'Today'

      return str
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.sparkline {
  position: relative;
}
.graph {
  position: relative;
  z-index: 1;
}
.tooltip-container {
  position: absolute;
  z-index: 2;
  top: 0;
}

.point {
  opacity: 0;
  height: 100%;

  // Helper to extend size of .tooltip, so we can hover properly
  rect.hover {
    height: 100%;
    width: 100%;
    fill: transparent;
    // transform: translateX(-15px);
  }
  &:hover {
    opacity: 1;
  }
}

svg {
  text {
    font-size: 0.85em;
    fill: white;
  }
  .line {
    pointer-events: none; // Make tooltips accessible
    stroke: $color-primary-subtle;
    stroke-width: 1.7px;
    fill: none;
  }
  .line.secondary {
    stroke: $color-accent-subtle;
  }
  .circle {
    fill: $color-primary-subtle;
  }
  .circle.secondary {
    fill: $color-accent-subtle;
  }
}

.tooltip {
  rect {
    fill: $color-bg;
  }
  .num {
    font-size: 1.1em;
  }
  .sub {
    fill: $color-font-paragraph;
  }
  .price {
    fill: $color-primary-subtle;
    text-anchor: start;

    &.negative {
      fill: $color-error;
    }
  }
}
</style>
