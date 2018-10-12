<template>
  <module class="price">
    <template slot="header">
      <div class="img">
        <img :src="component.imgUrl" :alt="`${item.name} ${component.name}`">
      </div>
      <h3>{{ component.name === 'Set' ? item.name : component.name }}</h3>
    </template>

    <template slot="body">
      <span class="highlight">{{ current }}p</span>
      <price-diff :type="offerType === 'combined' ? 'selling' : offerType"
                  :base="current" :value="previous" unit="p"/>
      <sparkline :data="data.current"/>
      <sparkline :data="data.previous" class="sparkline-previous"/>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import priceDiff from 'src/components/items/price-diff.vue'
import sparkline from 'src/components/charts/sparkline.vue'

export default {
  components: {
    module,
    priceDiff,
    sparkline
  },

  props: ['component'],

  computed: {
    item () {
      return this.$store.state.items.item
    },
    current () {
      if (this.offerType === 'combined') {
        return Math.round((this.component.prices.selling.current.median + this.component.prices.buying.current.median) / 2)
      }
      return this.component.prices[this.offerType].current
    },
    previous () {
      if (this.offerType === 'combined') {
        return Math.round((this.component.prices.selling.previous.median + this.component.prices.buying.previous.median) / 2)
      }
      return this.component.prices[this.offerType].previous
    },
    offerType () {
      return this.$store.state.items.selected.offerType
    },
    data () {
      // const current = this.current
      return null
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

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
.sparkline-previous {
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
</style>
