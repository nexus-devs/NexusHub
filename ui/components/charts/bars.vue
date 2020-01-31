<template>
  <div class="bars">
    <svg ref="bars" :width="width + 200" :height="height + 5">
      <g v-for="(d, i) in points" :key="`bar-${i}`">
        <g class="bar-wrapper">
          <rect :height="d.y" :width="barWidth" :x="d.x" :y="height - d.y + 6" class="bar" />
          <rect :height="2" :width="barWidth" :x="d.x" :y="height - d.y + 2" class="cap" />
        </g>
        <g class="tooltip">
          <rect :x="d.x + 12" height="60px" width="120px" />
          <text :x="d.x + 20" y="22px" class="title">{{ data.length - i }} mins ago</text>
          <text :x="d.x + 20" y="48px" class="num">{{ data[i] }}</text>
        </g>
      </g>
    </svg>
  </div>
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'

export default {
  props: ['data'],

  data () {
    return {
      width: 0,
      height: 0,
      scaled: {
        x: null,
        y: null
      },
      animatedData: [],
      points: []
    }
  },

  computed: {
    barWidth () {
      return this.width / this.data.length - 1
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
      this.scaled.y = d3.scaleLinear().range([this.height, 0])
    },

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize () {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
      this.initialize()
      Tween.adjustData(this, this.data, this.data)
    },

    // Update graph render view
    update () {
      const yPane = d3.extent(this.data, (y, x) => y).reverse()
      yPane[1] = yPane[1] / 2 // don't let some bars hit rock bottom if they're not 0

      // Every value would be 100% if the min/max is both 0, so we fix that here
      if (yPane[0] === 0) {
        yPane[0] = 1
      }
      this.scaled.x.domain(d3.extent(this.data, (y, x) => x))
      this.scaled.y.domain(yPane)
      this.points = []

      // Transform raw data into scaled data to fit into the graph
      for (const data of this.animatedData) {
        const x = this.scaled.x(data.x)
        const y = this.scaled.y(data.y)
        this.points.push({ x, y: y > 0 ? y : 0 })
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.bars {
  position: relative;
  left: -1px; // Compensate for bar margin
  max-width: 95%;
  min-height: 80px;

  .bar {
    fill: rgba(225,240,255,0.2);
  }
  .cap {
    fill: rgba(255,255,255,0.8);
  }
  .tooltip {
    opacity: 0;
    z-index: 1;

    text {
      fill: white;
    }
    .title {
      font-size: 0.85em;
    }
    .num {
      font-size: 1.2em;
    }
    rect {
      fill: $color-bg;
    }
  }
  .bar-wrapper {
    z-index: 0;

    &:hover + .tooltip {
      opacity: 1;
    }
  }
}
</style>
