<template>
  <div class="doubleline">
    <div class="axis">
      <div class="x">
        <div class="axis"/>
        <div class="labels">
          <span v-for="label in axis.x" :key="label">
            {{ typeof label === 'number' ? `${label}:00` : 'now' }}
          </span>
        </div>
      </div>
      <div class="y">
        <div class="axis"/>
        <div class="labels">
          <span v-for="label in axis.y" :key="label">
            {{ label }}
          </span>
        </div>
      </div>
    </div>
    <div class="graphs">
      <div class="sparkline">
        <svg :width="width" :height="height">
          <path :d="line.marketValue" class="line"/>
          <path :d="line.qty" class="line2"/>
        </svg>
      </div>
      <div class="tooltip-container">
        <svg :width="width" :height="height">
          <g v-for="(d, i) in data" :key="d.x" class="point">
            <rect :x="scaled.x(d.x)" class="hover"/>
            <circle :cx="scaled.x(d.x)" :cy="scaled.mV(d.marketValue)" r="4"/>
            <g class="tooltip">
              <rect :x="scaled.x(d.x) + 12" :height="'87px'" width="120px"/>
              <text :x="scaled.x(d.x) + 20" y="22px" class="title">
                {{ data.length - i - 1 === 0 ? 'Today' : `${data.length - i - 1} days ago` }}
              </text>
              <text :x="scaled.x(d.x) + 20" y="50px" class="num">
                {{ data[i] ? `${data[i].marketValue}` : '' }}
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'
import indicator from './indicator.vue'

export default {
  components: {
    indicator
  },

  props: ['data'],

  data () {
    return {
      width: 0,
      height: 0,
      min: 0,
      max: 0,
      line: {
        marketValue: '',
        qty: ''
      },
      scaled: {
        x: (x) => x,
        mV: (x) => x,
        qty: (x) => x
      },
      points: []
    }
  },

  computed: {
    axis () {
      const yPane = [0, d3.max(this.data, d => d.marketValue)]
      const y = []
      y.push(yPane[1])
      y.push(Math.round(yPane[0] + (yPane[1] - yPane[0]) / 2))
      y.push(yPane[0])

      const now = new Date().getHours()
      const hour = (h) => now - h
      const hoursAgo = (h) => h < 0 ? 24 + h : h
      const start = hoursAgo(hour(22))
      const x = [start]
      x.push(hoursAgo(hour(15)))
      x.push(hoursAgo(hour(8)))
      x.push('now')

      return { x, y }
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
    initialize () {
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.mV = d3.scaleLinear().range([this.height - 40, 40])
      this.scaled.qty = d3.scaleLinear().range([this.height - 40, 40])
    },

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize () {
      this.width = this.$el.offsetWidth - 40
      this.height = this.$el.offsetHeight
      this.initialize()
      Tween.adjustData(this, this.data, this.data, true)
    },

    update () {
      this.scaled.x.domain(d3.extent(this.data, d => d.x))
      this.scaled.mV.domain([0, d3.max(this.data, d => d.marketValue)])
      this.scaled.qty.domain([0, d3.max(this.data, d => d.qty)])

      const lineValue = d3.line().x(d => this.scaled.x(d.x)).y(d => this.scaled.mV(d.marketValue)).curve(d3['curveMonotoneX'])
      const lineQty = d3.line().x(d => this.scaled.x(d.x)).y(d => this.scaled.qty(d.qty)).curve(d3['curveMonotoneX'])
      this.line.marketValue = lineValue(this.data)
      this.line.qty = lineQty(this.data)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.doubleline {
  position: relative;
  display: flex;
  flex: 1;
}
.graphs {
  position: absolute;
  display: flex;
  left: 40px;
  top: 0;
  flex: 1;
  height: 100%;
  width: calc(100% - 40px);
}

.sparkline {
  position: relative;
  width: inherit;
  z-index: 1;
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
    pointer-events: none; // Make tooltips accessible
    stroke: $color-primary-subtle;
    stroke-width: 2.5px;
    fill: none;
  }
  .line2 {
    pointer-events: none; // Make tooltips accessible
    stroke: $color-error-dark;
    stroke-width: 2.5px;
    fill: none;
  }
}

.point {
  opacity: 0;
  height: 100%;

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
  .price {
    fill: $color-primary-subtle;
    text-anchor: start;

    &.negative {
      fill: $color-error;
    }
  }
}

.axis {
  background: $color-subtle;
}
.x {
  position: absolute;
  bottom: 0;
  left: 35px;
  width: calc(100% - 35px);

  .axis {
    width: 100%;
    height: 1.25px;
    border-radius: 1px
  }
  .labels {
    display: flex;
    justify-content: space-between;

    span:first-of-type {
      margin-left: 40px;
    }
  }
}
.y {
  position: absolute;
  height: 100%;

  .axis {
    position: absolute;
    bottom: 20px;
    left: 34px;
    width: 1.25px;
    height: calc(100% - 25px);
    border-radius: 1px
  }
  .labels {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 10px;
    height: calc(100% - 20px);

    span:first-of-type {
      margin-top: 20px;
    }
    span:last-of-type {
      margin-bottom: 20px;
    }
  }
}
.labels {
  color: $color-font-subtle;
  font-size: 0.9em;
}
</style>
