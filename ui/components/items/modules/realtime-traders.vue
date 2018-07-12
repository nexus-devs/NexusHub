<template>
  <module>
    <template slot="header">
      <span class="title">Active Traders right now</span>
      <br>
      <tween-num :value="total" :duration="1000" easing="easeInOutQuad" class="active-number"/>
      <br>
      <span class="offers-per-minute">Offers per minute</span>
    </template>
    <template slot="body">
      <div class="chart">

      </div>
    </template>
    <template slot="footer">
      <router-link to="">
        Trade Overview
        <img src="/img/ui/arrow-right.svg" alt="View full patch notes" class="ico-20">
      </router-link>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import tweenNum from 'vue-tween-number'
let updateInterval

export default {
  components: {
    module,
    'tween-num': tweenNum
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    total () {
      return this.$store.state.opm.total
    },
    intervals () {
      return this.$store.state.opm.intervals
    }
  },

  beforeMount () {
    this.$cubic.subscribe(`/warframe/v1/orders/opm?item=${this.item.name}`, opm => {
      this.$store.commit('setOpmTotal', opm.total)
      this.$store.commit('setOpmIntervals', opm.intervals)
    })
    updateInterval = setInterval(async () => {
      const { total, intervals } = await this.$cubic.get(`/warframe/v1/orders/opm?item=${this.item.name}`)
      this.$store.commit('setOpmTotal', total)
      this.$store.commit('setOpmIntervals', intervals)
    }, 1000 * 60)
  },

  beforeDestroy () {
    this.$cubic.unsubscribe(`/warframe/v1/orders/opm?item=${this.item.name}`)
    clearInterval(updateInterval)
  },

  async asyncData ({ route }) {
    const item = route.params.item.split('-').join(' ')
    const { total, intervals } = await this.$cubic.get(`/warframe/v1/orders/opm?item=${item}`)
    this.$store.commit('setOpmTotal', total)
    this.$store.commit('setOpmIntervals', intervals)
  },

  storeModule: {
    name: 'opm',
    state: {
      total: 0,
      intervals: []
    },
    mutations: {
      setOpmTotal (state, total) {
        state.total = total
      },
      setOpmIntervals (state, intervals) {
        state.intervals = intervals
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.module {
  width: fit-content;
}
.title {
  color: white;
}
.active-number {
  display: inline-block;
  color: white;
  font-size: 2em;
  margin-top: 10px;
}
.offers-per-minute {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: -15px;
  font-size: 0.8em;
}
.chart {
  width: 200px;
  height: 100px;
}
</style>
