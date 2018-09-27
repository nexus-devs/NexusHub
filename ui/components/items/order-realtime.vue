<template>
  <module class="interactive" @click.native="select">
    {{ order }}
    <template slot="header">
      <div>
        <div class="img-container">
          <img :src="component.imgUrl" :alt="order.item">
        </div>
        <h3>{{ component.name }}</h3>
      </div>
    </template>
    <template slot="body">
      <span>{{ order.offer }} for</span>
      <span class="main-value">
        {{ order.price ? `${order.price}p` : 'any offer' }}
      </span>
      <price-diff :type="order.offer" :base="median" :value="order.price" unit="p"/>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import priceDiff from 'src/components/items/price-diff.vue'

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
      if (this.order.offer) {
        const type = this.order.offer.toLowerCase()
        return this.component.prices[type].current.median
      }
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
      this.$store.commit('selectOrder', this.order)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

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
    padding: 30px 25px;
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
