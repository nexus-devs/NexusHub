<template>
  <div class="doubleline">
    <div class="axis y1">
      <span v-for="label in axis.y" :key="label">
        {{ parsePriceY(label) }}
      </span>
    </div>
    <div class="middle-content">
      <div class="graph">
        <div class="sparkline">
          <svg :width="width" :height="height">
            <path :d="line.marketValue" class="line"/>
            <path :d="line.qty" class="line2"/>
          </svg>
        </div>
        <div class="tooltip-container">
          <svg :width="width + 160" :height="height">
            <g v-for="(d, i) in data" :key="d.x" class="point">
              <rect :x="scaled.x(d.x)" class="hover"/>
              <circle :cx="scaled.x(d.x)" :cy="scaled.mV(d.marketValue)" r="3"/>
              <circle :cx="scaled.x(d.x)" :cy="scaled.qty(d.qty)" r="3" class="circle2"/>
              <g class="tooltip">
                <rect :x="scaled.x(d.x) + 12" :height="'87px'" width="141px"/>
                <text :x="scaled.x(d.x) + 20" y="22px" class="title">
                  {{ parseHoursAgo(i, data.length) }}
                </text>
                <text :x="scaled.x(d.x) + 20" y="50px" class="num">
                  {{ parsePriceSVG(data[i].marketValue) }}
                </text>
                <text :x="scaled.x(d.x) + 20" y="75px" class="sub">
                  Quantity: {{ data[i] ? `${data[i].qty}` : 0 }}
                </text>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="axis x">
        <span v-for="label in axis.x" :key="label">
          {{ label }}
        </span>
      </div>
    </div>
    <div class="axis y2">
      <span v-for="label in axis.y2" :key="label">
        {{ label }}
      </span>
    </div>
  </div>
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'
import indicator from './indicator.vue'
import moment from 'moment'
import parsedPrice from 'src/components/wow-classic/parsed-price.vue'
import utility from 'src/components/wow-classic/utility.js'

export default {
  components: {
    indicator,
    parsedPrice
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
      }
    }
  },

  computed: {
    axis () {
      const yPane = [0, this.getMarketValueMax()]
      const part = Math.round(yPane[0] + (yPane[1] - yPane[0]) / 3)
      const y = []
      y.push(yPane[1])
      y.push(part * 2)
      y.push(part)
      y.push(yPane[0])

      const y2Pane = [0, this.getQuantityMax()]
      const part2 = Math.round(y2Pane[0] + (y2Pane[1] - y2Pane[0]) / 3)
      const y2 = []
      y2.push(y2Pane[1])
      y2.push(part2 * 2)
      y2.push(part2)
      y2.push(y2Pane[0])

      const now = moment()
      const dayAgo = (d) => now.clone().subtract(d, 'days').format('DD. MMM')
      const x = []
      const days = this.data.length / 24
      let stepSize = 1
      if (days === 30) stepSize = 5
      else if (days === 90) stepSize = 15
      for (let i = days; i > 0; i -= stepSize) {
        x.push(dayAgo(i))
      }
      x.push('Today')

      return { x, y, y2 }
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
      this.scaled.mV = d3.scaleLinear().range([this.height - 40, 40])
      this.scaled.qty = d3.scaleLinear().range([this.height - 40, 40])
    },

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize () {
      const boundingBox = d3.select(this.$el).select('.sparkline').node().getBoundingClientRect()
      this.width = boundingBox.width
      this.height = boundingBox.height
      this.initialize()
      Tween.adjustData(this, this.data, this.data, true)
    },

    update () {
      this.scaled.x.domain(d3.extent(this.data, d => d.x))
      this.scaled.mV.domain([0, this.getMarketValueMax()])
      this.scaled.qty.domain([0, this.getQuantityMax()])

      const lineValue = d3.line().x(d => this.scaled.x(d.x)).y(d => this.scaled.mV(d.marketValue)).curve(d3['curveMonotoneX'])
      const lineQty = d3.line().x(d => this.scaled.x(d.x)).y(d => this.scaled.qty(d.qty)).curve(d3['curveMonotoneX'])
      this.line.marketValue = lineValue(this.data)
      this.line.qty = lineQty(this.data)
    },

    // parses hours into days + hours ago
    parseHoursAgo (h, length) {
      h = length - h - 1
      const days = Math.floor(h / 24)
      const hours = h % 24

      let str = ''
      if (days > 0) str += days + ' day'
      if (days > 1) str += 's'
      if (days > 0 && hours > 0) str += ', '
      if (hours > 0) str += hours + ' hour'
      if (hours > 1) str += 's'

      if (days > 0 || hours > 0) str += ' ago'
      else str = 'Today'

      return str
    },

    // Parses price for shitty svg tags
    parsePriceSVG (price) {
      const p = this.parsePrice(price)
      let str = ''
      if (p.gold) str += p.gold + 'g '
      if (p.gold || p.silver) str += p.silver + 's '
      str += p.copper + 'c'
      return str
    },

    // Parses price for y axis
    parsePriceY (price) {
      const gold = (price / 10000).toFixed(2)
      return gold.toString() + 'g'
    },

    // Scale to next gold
    getMarketValueMax () {
      const maxMV = d3.max(this.data, d => d.marketValue)
      return (Math.floor(maxMV / 10000) + 1) * 10000
    },

    // Scale to next 5
    getQuantityMax () {
      const qtyAsString = d3.max(this.data, d => d.qty).toString()
      const firstDigit = qtyAsString[0]

      let maxVal = Math.pow(10, qtyAsString.length)
      if (firstDigit < 5) maxVal = maxVal / 2

      return maxVal
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
  justify-content: space-between;
  height: 100%;
}
.middle-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
}
.graph {
  // position: absolute;
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
}

.sparkline {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

circle {
  fill: $color-primary-subtle;
}
.circle2 {
  fill: $color-error-dark;
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
    stroke-width: 1.5px;
    fill: none;
  }
  .line2 {
    pointer-events: none; // Make tooltips accessible
    stroke: $color-error-dark;
    stroke-width: 1.5px;
    fill: none;
  }
}

.point {
  opacity: 0;
  height: 100%;
  transform: translateX(15px);

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
  transform: translateX(-15px);
}

.tooltip {
  rect {
    fill: $color-bg-dark;
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
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $color-font-body;
  font-size: 0.8em;
  line-height: 0.8em;
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
  height: 0px;
  margin-bottom: 20px;
  border-top: 1px solid $color-font-body;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
