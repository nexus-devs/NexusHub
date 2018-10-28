<template>
  <div class="userprices">
    <div class="axis">
      <div class="x">
        
      </div>
      <div class="y">

      </div>
    </div>
    <sparkline :data="sparklineData" :interactive="false" curve="curveBasis"/>
    <div :style="{ width, height }" class="points">
      <div v-for="(order, i) in userData" :key="i" :style="{ left: scaled.x(Date.parse(order.createdAt)), top: scaled.y(order.price) }"
           :class="{ active: selected.user === order.user }" class="point-wrapper">
        <div class="point"/>
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
</template>



<script>
import * as d3 from 'd3'
import Tween from './_tween.js'
import indicator from './indicator.vue'
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
    indicator,
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
      this.width = this.$el.offsetWidth
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
      this.scaled.x.domain(d3.extent(this.data.map(d => Date.parse(d.createdAt)), y => y))
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
.points {
  position: absolute;
  left: 0;
  top: 0;
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
    @include ease(0.2s);

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
      color: white;
      transform: translateX(-5px);
      @include ease(0.2s);
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
      @include ease(0.2s);
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
      .data {
        transform: translateX(0);
      }
    }
  }
}
</style>
