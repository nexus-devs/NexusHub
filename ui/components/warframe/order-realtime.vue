<template>
  <module class="interactive" @click.native="select">
    <template slot="header">
      <div>
        <div class="img">
          <img :src="component.imgUrl" :alt="order.item">
        </div>
        <h3>{{ component.name }}</h3>
      </div>
    </template>
    <template slot="body">
      <span :style="{ 'font-size': order.price ? '' : '1em' }" class="highlight">{{ order.price ? `${order.price}p` : 'PM for price' }}</span>
      <price-diff :type="order.offer" :current="median" :previous="order.price" unit="p" />
      <br>
      <span class="sub">
        {{ order.offer === 'Selling' ? 'Sold' : 'Bought' }} by {{ order.user }}
      </span>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import priceDiff from 'src/components/warframe/price-diff.vue'

export default {
  components: {
    module,
    priceDiff
  },

  props: ['order'],

  computed: {
    item () {
      return this.$store.state.items.item
    },
    median () {
      if (this.order.offer && this.component.prices) {
        const type = this.order.offer.toLowerCase()
        return this.component.prices[type].current.median
      }
      return null
    },
    component () {
      if (this.order) {
        return this.item.components.find(c => c.name === this.order.component) || {
          selling: { current: {}},
          buying: { current: {}}
        }
      } else {
        return {}
      }
    }
  },

  methods: {
    select () {
      this.$store.commit('setOrdersScrollBehavior', true)
      this.$store.commit('selectOrder', this.order)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

#app {
  .module {
    flex-basis: 33%;
    margin-right: 15px;
    margin-bottom: 15px;
    @include ease(0.5s);

    &:before {
      border-radius: 2px;
    }
    &:nth-of-type(n + 5) {
      display: none;
    }
    &:nth-of-type(n + 5) {
      @media (max-width: $breakpoint-m) {
        display: none;
      }
    }
    @media (max-width: $breakpoint-s) {
      &:nth-of-type(2n) {
        margin-right: 0;
      }
    }
    /deep/ .header {
      padding: 20px 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .order {
        margin-left: 5px;
      }
      .user {
        font-size: 0.9em !important;
        text-transform: none;

        @media (max-width: $breakpoint-m) {
          display: none;
        }
      }
    }
    /deep/ .body {
      padding: 0 25px 5px;
      margin-top: 20px;

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
  }
}
</style>
