<template>
  <div>

    <svg @mousemove="mouseover" :width="width" :height="height">
      <g>
        <path class="line" :d="paths.line" />
        <path class="selector" :d="paths.selector" />
      </g>
    </svg>
    <div class="test">
      <svg id="blur">
        <path class="line" :d="paths.line" />
      </svg>
    </div>
  </div>
</template>




<script>
import * as d3 from 'd3'
import Tween from 'tween.js'

export default {
  name: 'area-chart',
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
      points: [],
    }
  },
  mounted() {
    console.log(this.data)
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  watch: {
    data: function dataChanged(newData, oldData) {
      this.tweenData(newData, oldData)
    }
  },
  methods: {
    // Adjust Graph size responsively. Gets called on windows resize and vue mount.
    onResize() {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
      this.initialize()
      this.update()
      this.tweenData(this.data, this.data)
    },

    createLine: d3.line().x(d => d.x).y(d => d.y).curve(d3.curveBasis),
    createValueSelector: d3.area().x(d => d.x).y0(d => d.max).y1(0),

    initialize() {
      this.scaled.x = d3.scaleLinear().range([0, this.width])
      this.scaled.y = d3.scaleLinear().range([this.height, 0])
    },

    // Animate data changes by transitioning values from old to new value
    tweenData(newData, oldData) {
      const vm = this
      const tween = new Tween.Tween(oldData)
        .easing(Tween.Easing.Quadratic.Out)
        .to(newData, 500)
        .onUpdate(function onUpdate() {
          vm.animatedData = this
          vm.update()
        })
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
      this.scaled.x.domain(d3.extent(this.data, (d, i) => i))
      this.scaled.y.domain([0, this.ceil])
      this.points = []
      for (const [i, d] of this.animatedData.entries()) {
        this.points.push({
          x: this.scaled.x(i),
          y: this.scaled.y(d),
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
.test {
  filter: blur(25px);
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
