<template>
  <module @click.native="select">
    <template slot="header">
      <div>
        <div class="img-container">
          <img :src="component.imgUrl" :alt="order.item">
        </div>
        <h3>{{ component.name }}</h3>
      </div>
      <span>{{ order.user }}</span>
    </template>
    <template slot="body">
      <span>{{ order.offer }} for</span>
      <span class="main-value">
        {{ order.price ? `${order.price}p` : 'any offer' }}
      </span>
      <span v-if="order.price" :class="{ negative: order.offer === 'Selling' ? priceDiff >= 0 : priceDiff <= 0 }">
        {{ priceDiff > 0 ? '+' : '' }}{{ priceDiff }}%
      </span>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module
  },

  props: ['order'],

  computed: {
    item () {
      return this.$store.state.items.item
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
    },
    priceDiff () {
      if (this.order) {
        const type = this.order.offer.toLowerCase()
        const value = this.order.price - this.component[type].current.median

        if (this.order.price) {
          return (value / this.component[type].current.median * 100).toFixed(2)
        } else {
          return null
        }
      } else {
        return {}
      }
    }
  },

  methods: {
    select () {
      this.$store.commit('selectOrder', this.order)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.module {
  @include ie;
  border-radius: 2px;
  padding: 0;
  flex-basis: 33%;
  margin-right: 15px;
  margin-bottom: 15px;
  @include ease(0.5s);

  &:hover {
    @include gradient-background-dg(#3c4451, #353d49);
  }
  &:before {
    border-radius: 2px;
  }
  &:nth-of-type(n + 5) {
    display: none;
  }
  /deep/ .header {
    padding: 20px 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.9em;
      margin-top: -3px;

      @media (max-width: $breakpoint-m) {
        display: none;
      }
    }
  }
  /deep/ .body {
    padding: 30px 25px;
  }
  .main-value + span {
    color: $color-primary;
    font-size: 0.85em;

    &.negative {
      color: $color-error;
    }
  }
  @media (max-width: $breakpoint-m) {
    margin-right: 10px;
  }
  @media (max-width: $breakpoint-s) {
    &:nth-of-type(even) {
      margin-right: 0;
    }
  }
}

.img-container {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin-right: 5px;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background: $color-bg;

  img {
    position: relative;
    max-height: 80%;
  }
}
</style>
