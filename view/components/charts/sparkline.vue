<template>
  <div>
    <filter id="gradient">
      <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stop-color="#05a"/>
        <stop offset="100%" stop-color="#0a5"/>
      </linearGradient>
    </filter>
    <svg @mousemove="mouseover" :width="width" :height="height">
      <g>
        <path class="line" :d="paths.line" filter="gradient" />
        <path class="selector" :d="paths.selector" />
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
import Tween from 'tween.js'
import normalize from './normalize.js'

export default {
  props: ['data', 'margin', 'ceil'],
  data() {
    return {
      width: 0,
      height: 0,
      paths: {
        area: '',
        line: '',
        selector: '',
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
      this.adjustData(newData, oldData)
    },
    ceil(newData, oldData) {
      this.adjustCeil(newData, oldData)
    }
  },
  methods: {

    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize() {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
      this.initialize()
      this.adjustData(this.data, this.data)
      this.adjustCeil(this.ceil, this.ceil)
    },

    createLine: d3.line().x(d => d.visibleX).y(d => d.visibleY).curve(d3.curveBasis),

    initialize() {
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.y = d3.scaleLinear().range([this.height, 0]).clamp(true)
    },

    // Functions which ease transitions between prop value cahnges
    adjustData(newData, oldData) {
      const vm = this
      this.tweenData(newData, normalize(oldData, true), function() {
        vm.animatedData = normalize(this)
        vm.update()
      })
    },
    adjustCeil(newData, oldData) {
      const vm = this
      this.tweenData({ d: newData }, { d: oldData }, function() {
        vm.animatedCeil = this.d
        vm.update()
      })
    },

    // Animate data changes by transitioning values from old to new value
    tweenData(newData, oldData, onUpdate) {
      const tween = new Tween.Tween(oldData)
        .easing(Tween.Easing.Quadratic.Out)
        .to(newData, 790)
        .onUpdate(onUpdate)
        .onComplete(() => {
          tween.done = true
        })
        .start()

      // Function which updates the transFitioning value on each tick
      function animate(time) {
        tween.update(time)

        // Ensure we don't keep calling this once we're done
        // Things will get super slow otherwise, **believe me**
        if (!tween.done) {
          requestAnimationFrame(animate)
        }
      }
      animate(window.performance.now())
    },

    // Update graph render view
    update() {
      this.scaled.x.domain(d3.extent(this.data, (y, x) => x))
      this.scaled.y.domain([0, this.animatedCeil])
      this.points = []

      for (let d of this.animatedData) {
        this.points.push({
          actualX: d.actualX,
          actualY: d.actualY,
          visibleX: this.scaled.x(d.visibleX),
          visibleY: this.scaled.y(d.visibleY),
          max: this.height,
        })
      }
      this.paths.line = this.createLine(this.points)
    },

    // Display tooltip with data for next
    mouseover({ offsetX }) {
      if (this.points.length > 0) {
        const x = offsetX
        const closestPoint = this.getClosestPoint(x)
        if (this.lastHoverPoint.index !== closestPoint.index) {
          const point = this.points[closestPoint.index]
          this.paths.selector = this.createValueSelector([point])
          this.$emit('select', this.data[closestPoint.index])
          this.lastHoverPoint = closestPoint
        }
      }
    },

    // Helper function for mouseover tooltip which finds closest point to cursor
    getClosestPoint(x) {
      return this.points
        .map((point, index) => ({ x:
          point.x,
          diff: Math.abs(point.x - x),
          index,
        }))
        .reduce((memo, val) => (memo.diff < val.diff ? memo : val))
    },
  },
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
.line {
  stroke: $colorPrimary;
  stroke-width: 2px;
  fill: none;
}
.selector {
  stroke: $colorSubtle;
  stroke-width: 1px;
  fill: none;
}
.area {
  fill: none;
}
</style>
