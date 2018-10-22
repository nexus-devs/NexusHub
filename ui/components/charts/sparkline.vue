<template>
  <div class="sparkline">
    <div class="graph">
      <svg :width="width" :height="height">
        <g>
          <path :d="paths.line" class="line"/>
        </g>
      </svg>
    </div>
    <div class="tooltip-container">
      <svg :width="width + 200" :height="height">
        <g v-for="(d, i) in animatedData" :key="d.x" class="point">
          <rect :x="scaled.x(d.x)" class="hover"/>
          <circle :cx="scaled.x(d.x)" :cy="scaled.y(d.y)" r="4"/>
          <g class="tooltip">
            <rect :x="scaled.x(d.x) + 12" :height="orders && data[i] ? '87px' : '65px'" width="120px"/>
            <text :x="scaled.x(d.x) + 20" y="22px" class="title">
              {{ data.length - i }} days ago
            </text>
            <text :x="scaled.x(d.x) + 20" y="50px" class="num">
              {{ data[i] ? `${data[i]}p` : '' }}
              {{ diff(i) && data[i] && compare[i] ? diff(i) : '' }}
            </text>
            <text v-if="orders" :x="scaled.x(d.x) + 20" :y="data[i] ? '75px' : '48px'" class="sub">
              {{ orders[i] }} Orders
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

export default {
  props: ['data', 'margin', 'ceil', 'compare', 'component'],

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
      points: []
    }
  },

  computed: {
    offerType () {
      return this.$store.state.items.selected.offerType
    },
    orders () {
      if (!this.component) return
      const component = this.$store.state.prices.components.find(c => c.name === this.component)

      if (this.offerType === 'combined') {
        const buying = component.prices.buying
        const selling = component.prices.selling
        const merge = (b, i, period) => {
          const s = selling[period].days[i]
          return b.orders + s.orders
        }
        return buying.current.days ? buying.current.days.map((b, i) => merge(b, i, 'current')) : []
      } else {
        return component.prices[this.offerType.toLowerCase()].current.days.map(d => d.orders)
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

  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    // Set graph scaling
    initialize (newData) {
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.y = d3.scaleLinear().range([this.height - 40, 40])
    },

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize () {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
      this.initialize()
      Tween.adjustData(this, this.data, this.data, true)
    },

    createLine: d3.line().x(d => d.x).y(d => d.y).curve(d3.curveMonotoneX),

    // Update graph render
    update () {
      const yPane = d3.extent(this.data, (y, x) => y)
      this.scaled.x.domain(d3.extent(this.data, (y, x) => x))
      this.scaled.y.domain(yPane)
      this.points = []

      // Transform raw data into scaled data to fit into the graph
      for (const data of this.animatedData) {
        const x = this.scaled.x(data.x)
        const y = this.scaled.y(data.y)
        this.points.push({ x, y })
      }
      this.paths.line = this.createLine(this.points)
    },

    diff (i) {
      if (!this.compare) return
      return this.data[i] - this.compare[i]
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.sparkline {
  position: relative;
}
#filters {
  position: absolute;
}
.blur {
  filter: blur(25px);
  position: absolute;
  top: 0;
}
.graph {
  position: relative;
  z-index: 1;
}

.line, .blur {
  pointer-events: none; // Make tooltips accessible
}

circle {
  fill: $color-primary-subtle;
}

svg {
  text {
    font-size: 0.85em;
    fill: white;

    // left of pointer if space is insufficient (determined in _normalize.js)
    &.align-left {
      transform: translateX(-40px);
    }
  }
  .line {
    stroke: $color-primary-subtle;
    stroke-width: 2.5px;
    fill: none;
  }
}

.point {
  opacity: 0;
  height: 100%;
  filter: drop-shadow( -5px -5px 5px #000 );

  // Helper to extend size of .tooltip, so we can hover properly
  rect.hover {
    height: 100%;
    width: 100%;
    fill: transparent;
    transform: translateX(-15px);
  }
  &:hover {
    opacity: 1;
  }
}

.tooltip-container {
  position: absolute;
  z-index: 2;
  top: 0;
}

.tooltip {
  rect {
    fill: $color-bg;
  }
  .num {
    font-size: 1.1em;
  }
  .sub {
    fill: $color-font-body;
  }
}
</style>
