<template>
  <div class="doubleline">
    <div :class="[theme.axis, theme.y1]" class="axis y1">
      <span v-for="label in axis.y" :key="label">
        {{ parsePriceY(label) }}
      </span>
    </div>
    <div class="middle-content">
      <div class="graph">
        <div class="sparkline">
          <svg :width="width" :height="height">
            <path :d="line.value1" :class="theme.line" class="line" />
            <path :d="line.value2" :class="theme.line2" class="line2" />
          </svg>
        </div>
        <div class="tooltip-container">
          <svg :width="width + 160" :height="height">
            <g v-for="(d, i) in data" :key="d.x" class="point">
              <rect :x="scaled.x(d.x)" class="hover" />
              <circle :cx="scaled.x(d.x)" :cy="scaled.v1(d.value1)" r="3" :class="theme.circle" />
              <circle :cx="scaled.x(d.x)" :cy="scaled.v2(d.value2)" r="3" :class="theme.circle2" />
              <g :class="theme.tooltip" class="tooltip">
                <rect :x="scaled.x(d.x) + 12" :height="'87px'" width="155px" />
                <text :x="scaled.x(d.x) + 20" y="22px" class="title">
                  {{ parseHoursAgo(d.x) }}
                </text>
                <circle :cx="scaled.x(d.x) + 23" cy="45px" r="3" :class="theme.circle" />
                <text :x="scaled.x(d.x) + 30" y="50px" class="num">
                  {{ parsePrice(data[i].value1) }}
                </text>
                <circle :cx="scaled.x(d.x) + 23" cy="70px" r="3" :class="theme.circle2" />
                <text v-if="!sameScale" :x="scaled.x(d.x) + 30" y="75px" class="sub">
                  Quantity: {{ data[i] ? `${data[i].value2}` : 0 }}
                </text>
                <text v-else :x="scaled.x(d.x) + 30" y="75px" class="sub">
                  Regional: {{ parsePrice(data[i].value2) }}
                </text>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div :class="[theme.axis, theme.x]" class="axis x">
        <span v-for="label in axis.x" :key="label">
          {{ label }}
        </span>
      </div>
    </div>
    <div v-if="!sameScale" :class="[theme.axis, theme.y2]" class="axis y2">
      <span v-for="label in axis.y2" :key="label">
        {{ label }}
      </span>
    </div>
  </div>
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'
import getTheme from 'src/components/_theme.js'
import moment from 'moment'
import utility from 'src/components/wow-classic/utility.js'

export default {
  props: ['data', 'sameScale', 'timerange', 'regional'],

  data () {
    return {
      width: 0,
      height: 0,
      scaleY1Width: 'auto',
      scaleY2Width: 'auto',
      min: 0,
      max: 0,
      line: {
        value1: '',
        value2: ''
      },
      scaled: {
        x: (x) => x,
        v1: (x) => x,
        v2: (x) => x
      }
    }
  },

  computed: {
    theme () {
      return getTheme(this)
    },
    axis () {
      let yPane = [0, this.getGoldValueMax()]
      if (this.sameScale) yPane = [0, this.getCombinedGoldValueMax()]
      const part = Math.round(yPane[0] + (yPane[1] - yPane[0]) / 3)
      const y = []
      y.push(yPane[1])
      y.push(part * 2)
      y.push(part)
      y.push(yPane[0])

      const y2Pane = [0, this.getNormalValueMax()]
      const part2 = Math.round(y2Pane[0] + (y2Pane[1] - y2Pane[0]) / 3)
      const y2 = []
      y2.push(y2Pane[1])
      y2.push(part2 * 2)
      y2.push(part2)
      y2.push(y2Pane[0])

      const now = moment()
      const dayAgo = (d) => now.clone().subtract(d, 'days').format('DD. MMM')
      const x = []
      const days = parseInt(this.timerange)
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
    this.onResize(true)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    // Set graph scaling
    initialize () {
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.v1 = d3.scaleLinear().range([this.height, 0])
      this.scaled.v2 = d3.scaleLinear().range([this.height, 0])
    },

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize (justMounted = false) {
      const boundingBox = d3.select(this.$el).select('.sparkline').node().getBoundingClientRect()
      this.width = boundingBox.width

      if (justMounted) { // Hack to avoid svg exploding on scala change
        this.scaleY1Width = d3.select(this.$el).select('.y1').node().getBoundingClientRect().width
        if (!this.sameScale) {
          this.scaleY2Width = d3.select(this.$el).select('.y2').node().getBoundingClientRect().width
          this.width -= 12
        } else this.width -= 6
      }

      this.height = boundingBox.height
      this.initialize()
      Tween.adjustData(this, this.data, this.data, true)
    },

    update () {
      this.scaled.x.domain(d3.extent(this.data, d => d.x))
      if (!this.sameScale) {
        this.scaled.v1.domain([0, this.getGoldValueMax()])
        this.scaled.v2.domain([0, this.getNormalValueMax()])
      } else {
        this.scaled.v1.domain([0, this.getCombinedGoldValueMax()])
        this.scaled.v2.domain([0, this.getCombinedGoldValueMax()])
      }

      const lineValue1 = d3.line().x(d => this.scaled.x(d.x)).y(d => this.scaled.v1(d.value1)).curve(d3.curveMonotoneX)
      const lineValue2 = d3.line().x(d => this.scaled.x(d.x)).y(d => this.scaled.v2(d.value2)).curve(d3.curveMonotoneX)
      this.line.value1 = lineValue1(this.data)
      this.line.value2 = lineValue2(this.data)
    },

    // parses hours into days + hours ago
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
    },

    // Parses price for y axis
    parsePriceY (price) {
      const gold = (price / 10000).toFixed(2)
      return gold.toString() + 'g'
    },

    // Scale to next gold
    getGoldValueMax () {
      const maxGold = d3.max(this.data, d => d.value1)
      return (Math.floor(maxGold / 1000) + 1) * 1000
    },

    getCombinedGoldValueMax () {
      const maxGold1 = d3.max(this.data, d => d.value1)
      const maxGold2 = d3.max(this.data, d => d.value2)
      const maxGold = d3.max([maxGold1, maxGold2])

      return (Math.floor(maxGold / 1000) + 1) * 1000
    },

    // Scale to next 5
    getNormalValueMax () {
      const valueAsString = d3.max(this.data, d => d.value2).toString()
      const firstDigit = valueAsString[0]

      let maxVal = Math.pow(10, valueAsString.length)
      if (firstDigit < 5) maxVal = maxVal / 2

      return maxVal
    }
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.circle {
  fill: $color-primary-subtle;
}
.circle2 {
  fill: $color-error-dark;
}

.line {
  stroke: $color-primary-subtle;
}
.line2 {
  stroke: $color-error-dark;
}

.tooltip {
  :global {
    rect {
      fill: $color-bg-dark;
    }
    .sub {
      fill: $color-font-body;
    }
    .price {
      fill: $color-primary-subtle;

      &.negative {
        fill: $color-error;
      }
    }
  }
}

.axis {
  color: $color-font-body;
}
.axis.y1 {
  border-right: 1px solid $color-font-body;
}
.axis.y2 {
  border-left: 1px solid $color-font-body;
}
.axis.x {
  border-top: 1px solid $color-font-body;
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.circle {
  fill: $color-primary-subtle;
}
.circle2 {
  fill: $color-accent-subtle;
}

.line {
  stroke: $color-primary-subtle;
}
.line2 {
  stroke: $color-accent-subtle;
}

.tooltip {
  :global {
    rect {
      fill: $color-bg-dark;
    }
    .sub {
      fill: $color-font-body;
    }
    .price {
      fill: $color-primary-subtle;

      &.negative {
        fill: $color-error;
      }
    }
  }
}

.axis {
  color: $color-font-body;
}
.axis.y1 {
  border-right: 1px solid $color-font-body;
}
.axis.y2 {
  border-left: 1px solid $color-font-body;
}
.axis.x {
  border-top: 1px solid $color-font-body;
}
</style>

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
    stroke-width: 1.5px;
    fill: none;
  }
  .line2 {
    pointer-events: none; // Make tooltips accessible
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
  .num {
    font-size: 1.1em;
  }
  .price {
    text-anchor: start;
  }
}

.axis {
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8em;
  line-height: 0.8em;
}
.axis.y1 {
  padding-right: 5px;
  text-align: right;

  span {
    position: relative;
    top: -4px;
  }
}
.axis.y2 {
  padding-left: 5px;
  text-align: left;

  span {
    position: relative;
    top: -4px;
  }
}
.axis.x {
  height: 0px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
