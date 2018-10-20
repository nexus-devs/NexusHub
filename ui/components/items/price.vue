<template>
  <module ref="price" class="price">
    <template slot="header">
      <div class="img">
        <img :src="component.imgUrl" :alt="`${item.name} ${component.name}`">
      </div>
      <h3>{{ component.name === 'Set' ? item.name : component.name }}</h3>
    </template>

    <template slot="body">
      <span class="highlight">{{ current }}p</span>
      <price-diff :current="previous" :previous="current" type="buying" unit="p" base="previously"/>
      <div class="graphs">
        <sparkline :data="data.current" :compare="data.previous"/>
        <sparkline :data="data.previous" class="sparkline-previous"/>
      </div>
      <div class="more">
        <div class="btn-subtle active">
          View Full Data
        </div>
      </div>
      <div class="economy">
        <div class="economy-data">
          <span>Buyers</span>
          <div>
            <span>
              {{ component.prices.buying.current.orders }}
            </span>
            <span :class="{ negative: orderDiff < 0 }" class="diff">
              ( {{ orderDiff.buying > 0 ? '+' : '' }}{{ orderDiff.buying }} )
            </span>
          </div>
        </div>
        <div class="economy-data">
          <span>Sellers</span>
          <div>
            <span>
              {{ component.prices.selling.current.orders }}
            </span>
            <span class="diff">
              ( {{ orderDiff.selling > 0 ? '+' : '' }}{{ orderDiff.selling }} )
            </span>
          </div>
        </div>
      </div>
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange"/>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'
import priceDiff from 'src/components/items/price-diff.vue'
import sparkline from 'src/components/charts/sparkline.vue'

export default {
  components: {
    module,
    moduleTime,
    priceDiff,
    sparkline
  },

  props: ['component'],

  computed: {
    item () {
      return this.$store.state.items.item
    },
    priceComponent () {
      const components = this.$store.state.prices.components
      return components.find(c => c.name === this.component.name)
    },
    current () {
      const prices = this.priceComponent.prices

      if (this.offerType === 'combined') {
        return Math.round((prices.selling.current.median + prices.buying.current.median) / 2)
      }
      return prices[this.offerType].current.median
    },
    previous () {
      const prices = this.priceComponent.prices

      if (this.offerType === 'combined') {
        return Math.round((prices.selling.previous.median + prices.buying.previous.median) / 2)
      }
      return prices[this.offerType].previous.median
    },
    offerType () {
      return this.$store.state.items.selected.offerType
    },
    orderDiff () {
      const prices = this.priceComponent.prices
      return {
        buying: prices.buying.current.orders - prices.buying.previous.orders,
        selling: prices.selling.current.orders - prices.selling.previous.orders
      }
    },

    /**
     * Sparkline data
     */
    data () {
      if (this.offerType === 'combined') {
        const buying = this.priceComponent.prices.buying
        const selling = this.priceComponent.prices.selling
        const merge = (b, i, period) => {
          const s = selling[period].days[i]
          return Math.round((b.median + s.median) / 2)
        }
        return {
          current: buying.current.days ? buying.current.days.map((b, i) => merge(b, i, 'current')) : [],
          previous: buying.previous.days ? buying.previous.days.map((b, i) => merge(b, i, 'previous')) : []
        }
      } else {
        return {
          current: this.component.prices[this.offerType].current.days.map(d => Math.round(d.median)),
          previous: this.component.prices[this.offerType].previous.days.map(d => Math.round(d.median))
        }
      }
    },
    timerange () {
      return this.priceComponent.timerange
    }
  },

  watch: {
    async timerange (to, from) {
      let url = `${this.item.apiUrl}/prices`
      url += `?component=${this.component.name}`
      url += to !== 7 ? `&timerange=${to}` : ''
      this.$refs.price.$refs.progress.start()
      const data = await this.$cubic.get(url)
      this.$refs.price.$refs.progress.finish()
      this.$store.commit('setPricesComponent', data.components[0])
    }
  },

  methods: {
    setTimerange (timerange) {
      this.$store.commit('setPricesTimerange', {
        component: this.component.name,
        timerange
      })
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.price {
  @media (min-width: $breakpoint-m) {
    min-width: calc(25% - 20px);
  }
  @media (min-width: $breakpoint-s) {
    max-width: 250px;
  }
}

/deep/ .body {
  .highlight {
    font-size: 1.3em;
  }
  .sub {
    display: inline-block;
    margin-top: 2px;
    font-size: 0.85em;
    color: $color-font-body;
  }
  .price-diff {
    font-size: 0.9em;
  }
}

.graphs {
  position: relative;
  width: 85%;
  margin: auto;
}
/deep/ .sparkline {
  z-index: 1;
  height: 125px;
  width: 100%;
}
.sparkline-previous {
  position: absolute;
  top: 0;
  z-index: 0;

  /deep/ {
    .blur {
      display: none;
    }
    svg {
      .line {
        stroke: $color-font-subtle;
        stroke-width: 1px;
        stroke-dasharray: 2;
      }
      text {
        display: none;
      }
      .pointer {
        display: none;
      }
    }
  }
}

.economy-data {
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
  font-size: 0.9em;

  &:first-of-type {
    border-top: 1px solid $color-subtle;
    padding-top: 10px;
  }
  span {
    display: inline-block;
  }
}

.diff {
  color: $color-font-body !important;
}

.more {
  text-align: center;
  padding-bottom: 20px;

  .btn-subtle {
    font-size: 0.75em;
  }
}
</style>
