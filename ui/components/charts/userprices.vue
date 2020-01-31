<template>
  <div class="userprices">
    <div class="axis">
      <div class="x">
        <div class="axis" />
        <div class="labels">
          <span v-for="label in axis.x" :key="label">
            {{ typeof label === 'number' ? `${label}:00` : 'now' }}
          </span>
        </div>
      </div>
      <div class="y">
        <div class="axis" />
        <div class="labels">
          <span v-for="label in axis.y" :key="label">
            {{ label }}p
          </span>
        </div>
      </div>
    </div>
    <div class="graphs">
      <sparkline :data="sparklineData" :interactive="false" curve="curveBasis" />
      <div :style="{ width, height }" class="points">
        <div v-for="(order, i) in userData" :key="i" :style="{ left: scaled.x(Date.parse(order.createdAt)), top: scaled.y(order.price) }"
             :class="{ active: selected.user === order.user }" class="point-wrapper"
        >
          <div class="point" />
          <div class="info" @click="select(order)">
            <div class="img-wrapper interactive">
              <img :alt="order.user" src="/img/ui/placeholder.png">
            </div>
            <div class="data">
              <span>{{ order.user }}</span>
              <span class="price">{{ order.price }}p</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'
import sparkline from './sparkline.vue'

// Simplify sparkline data to show trends rather than precise values.
function simplify (data) {
  if (data.length <= 20) return data

  const merge = Math.floor(data.length / 20)
  const simplified = []

  for (let i = 0; i < 20; i++) {
    let sum = 0

    for (let j = 0; j < merge; j++) {
      sum += data[i + j]
    }
    simplified.push(sum / merge)
  }
  return simplified
}

export default {
  components: {
    sparkline
  },

  props: ['data'],

  data () {
    return {
      width: 0,
      height: 0,
      scaled: {
        x: () => {},
        y: () => {}
      }
    }
  },

  computed: {
    offerType () {
      return this.$store.state.items.selected.offerType
    },
    sparklineData () {
      if (this.offerType === 'combined') {
        const data = this.data.map(o => o.price)
        return simplify(data)
      } else {
        const data = this.data.map(o => o.offer.toLowerCase() === this.offerType.toLowerCase() ? o.price : null)
        return simplify(data)
      }
    },
    userData () {
      return this.data.filter(o => this.offerType === 'combined' ? true : o.offer.toLowerCase() === this.offerType.toLowerCase())
    },
    selected () {
      return this.$store.state.prices.selected
    },
    axis () {
      const yPane = d3.extent(this.data.map(o => o.price), y => y)
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
      this.onResize()
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
      this.width = this.$el.offsetWidth - 50
      this.height = this.$el.offsetHeight
      this.initialize()
      Tween.adjustData(this, this.data, this.data)
    },

    createLine () {
      return d3.line().x(d => d.x).y(d => d.y).curve(d3[this.curve || 'curveMonotoneX'])
    },

    // Update graph render
    update () {
      const data = this.data.map(o => o.price)
      const yPane = d3.extent(data, (y, x) => y)
      this.scaled.x.domain([new Date() - 1000 * 60 * 60 * 24, new Date().getTime()])
      this.scaled.y.domain(this.ceil ? [yPane[0], this.ceil] : yPane)
    },

    diff (i) {
      if (!this.compare) return
      return this.data[i] - this.compare[i]
    },

    select (order) {
      if (this.$store.state.prices.selected.user !== order.user) {
        this.$store.commit('setPricesDetailedOrder', order)
      } else {
        this.$store.commit('setPricesDetailedOrder', {})
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.userprices {
  position: relative;
  display: flex;
  flex: 1;
}

.sparkline {
  flex: 1;

  /deep/ .line {
    stroke: $color-subtle;
  }
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

.points {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  .point {
    height: 6px;
    width: 6px;
    border-radius: 6px;
    background: $color-font-body;
  }
  .info {
    position: absolute;
    z-index: 1;
    opacity: 0;
    top: -3px;
    left: -3px;
    white-space: nowrap;

    .price {
      color: $color-primary-subtle;
    }
    .data {
      display: inline-block;
      vertical-align: middle;
      pointer-events: none;
      background: $color-bg-dark;
      border-radius: 2px;
      padding: 5px 15px;
      margin-left: 5px;
      font-size: 0.85em;
      color: white
    }
    .img-wrapper {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      overflow: hidden;
      padding: 0;
      height: 32px;
      width: 32px;
      border-radius: 32px;
      border: 2px solid $color-subtle;
      transform: scale(0.8);
      @include ease(0.15s);
      @include shadow-1;

      img {
        height: 100%;
      }
    }
  }
  .point-wrapper {
    position: absolute;
    padding: 10px;
    margin: -10px;
    cursor: pointer;

    &:hover, &.active {
      .info {
        opacity: 1;
      }
      .img-wrapper {
        transform: scale(1);
      }
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
