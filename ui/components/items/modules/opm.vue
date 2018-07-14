<template>
  <module>
    <template slot="header">
      <span class="title">Active Traders right now</span>
      <br>
      <tween-num :value="opm.active" :duration="1000" easing="easeInOutQuad" class="active-number"/>
      <br>
      <span class="offers-per-minute">Offers per minute</span>
    </template>
    <template slot="body">
      <bars :data="opm.intervals"/>
    </template>
    <template slot="footer">
      <div class="distribution">
        <div class="distribution-label">
          <div/>
          <span>Trade Chat {{ (opm.sources.tradeChat * 100).toFixed(0) }}%</span>
        </div>
        <div class="distribution-label">
          <div/>
          <span>WFM {{ (opm.sources.wfm * 100).toFixed(0) }}%</span>
        </div>
        <div class="distribution-bar">
          <div ref="tradechat" :style="{ width: `${opm.sources.tradeChat * 100}%` }"/>
          <div ref="wfm" :style="{ width: `${opm.sources.wfm * 100}%` }"/>
        </div>
      </div>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import bars from 'src/components/charts/bars.vue'
import tweenNum from 'vue-tween-number'
let updateInterval

export default {
  components: {
    module,
    'tween-num': tweenNum,
    bars
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    opm () {
      return this.$store.state.opm.item
    }
  },

  watch: {
    item (to, from) {
      this.$cubic.unsubscribe(`/warframe/v1/orders/opm?item=${from.name}`)
      clearInterval(updateInterval)
    }
  },

  beforeMount () {
    this.$cubic.subscribe(`/warframe/v1/orders/opm?item=${this.item.name}`, opm => {
      this.$store.commit('setOpmItem', opm)
    })
    updateInterval = setInterval(async () => {
      const opm = await this.$cubic.get(`/warframe/v1/orders/opm?item=${this.item.name}`)
      this.$store.commit('setOpmItem', opm)
    }, 1000 * 60)
  },

  beforeDestroy () {
    this.$cubic.unsubscribe(`/warframe/v1/orders/opm?item=${this.item.name}`)
    clearInterval(updateInterval)
  },

  async asyncData ({ route }) {
    const item = route.params.item.split('-').join(' ')
    const opm = await this.$cubic.get(`/warframe/v1/orders/opm?item=${item}`)
    this.$store.commit('setOpmItem', opm)
  },

  storeModule: {
    name: 'opm',
    state: {
      all: {
        total: 0,
        intervals: [],
        sources: {
          wfm: 0.5,
          tradeChat: 0.5
        }
      },
      item: {
        total: 0,
        intervals: [],
        sources: {
          wfm: 0.5,
          tradeChat: 0.5
        }
      }
    },
    mutations: {
      setOpmAll (state, opm) {
        state.all = opm
      },
      setOpmItem (state, opm) {
        state.item = opm
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
.distribution-label {
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  margin-bottom: 5px;

  div {
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 8px;
  }
  &:nth-of-type(1) {
    div {
      background: $color-primary;
    }
  }
  &:nth-of-type(2) {
    div {
      background: $color-accent;
    }
  }
  &:last-of-type {
    margin-right: 0;
  }
}
.distribution-bar {
  border-radius: 5px;
  display: flex;
  position: relative;
  overflow: hidden;

  div {
    display: inline-block;
    height: 2px;
    width: 50%;
    border-right: 1px solid $color-bg;
    @include ease(0.55s);
    will-change: width;

    &:nth-of-type(1) {
      background: $color-primary;
    }
    &:nth-of-type(2) {
      background: $color-accent;
    }
  }
}
.bars {
  margin: 20px 0;
  width: 215px;
  height: 80px;
}
/deep/ .footer {
  padding: 10px 30px 15px;
  margin-top: 0;
  font-size: 1em;
  color: white;
}
/deep/ .body {
  overflow: visible;
  padding-top: 0;
  padding-bottom: 0;
  margin: auto;
}
.distribution {
  width: 100%;
}
</style>
