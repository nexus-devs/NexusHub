<template>
  <div class="order row" @click="select">
    <div class="image-wrapper">
      <img :src="component.imgUrl" :alt="component.name">
    </div>
    <div class="item col">
      <span class="component">{{ component.name }}</span>
      <br>
      <span>{{ item.name }}</span>
    </div>
    <div class="user col">
      <div class="user-image">
        <img :alt="order.user" src="/img/ui/placeholder.png">
      </div>
      <tooltip>{{ order.user }}</tooltip>
    </div>
    <div v-if="item.fusionLimit" class="col">
      {{ order.rank }} / {{ item.fusionLimit }}
    </div>
    <div class="col">
      <img src="/img/warframe/ui/quantity.svg" alt="Quantity" class="ico-h-20">
      {{ order.quantity }}x
    </div>
    <div class="col price">
      <img v-if="order.price" src="/img/warframe/ui/platinum.svg" alt="Platinum" class="ico-h-12">
      <span>{{ order.price ? `${order.price}p` : 'any offer' }}</span>
      <price-diff :type="order.offer" :base="median" :value="order.price" unit="p"/>
    </div>
    <div class="col buy">
      <button class="btn-outline">{{ order.offer === 'Selling' ? 'Buy' : 'Sell' }}</button>
    </div>
  </div>
</template>



<script>
import tooltip from 'src/components/ui/sidebar/modules/tooltip.vue'
import priceDiff from 'src/components/items/price-diff.vue'

export default {
  components: {
    tooltip,
    priceDiff
  },

  props: ['order'],

  computed: {
    item () {
      return this.$store.state.items.item
    },
    component () {
      return this.item.components.find(c => c.name === this.order.component) || {}
    },
    median () {
      if (this.order.offer) {
        const type = this.order.offer.toLowerCase()
        return this.component.prices[type].current.median
      }
    }
  },

  methods: {
    select () {
      this.$store.commit('selectOrder', this.order)
    },
    priceDiff (order) {
      const type = order.offer.toLowerCase()
      const median = this.component.prices[type].current.median
      const value = order.price - median
      return value
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.order {
  @include field;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  @include ease(0.5s);

  div {
    color: white;
    margin: 0 10px;
    font-size: 0.9em;

    &:first-of-type {
      margin-left: 0;
    }
  }
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 60px;
  width: 80px;
  background: rgba(35,40,45, 0.15);
  border-right: 1px solid $color-subtle;

  img {
    max-height: 60%;
    border-radius: 60px;
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.item {
  margin-left: 20px;
  color: $color-font-body;

  .component {
    color: white;
    font-family: 'Circular';
    font-size: 1.1em;
  }
  span:nth-of-type(2) {
    display: inline-block;
    margin-top: -2px;
    color: $color-font-body;
  }
  @media (max-width: $breakpoint-s) {
    padding: 15px;

    span:nth-of-type(2) {
      display: none;
    }
  }
}

.user {
  position: relative;

  .tooltip {
    display: inline-block;
    position: absolute;
    left: 30px;
    top: 5px;
    font-size: 1em;
    width: fit-content;

    @media (min-width: $breakpoint-m) {
      opacity: 1;
      background: transparent;
      box-shadow: none;
      left: 17px;

      /deep/ span {
        font-family: 'Circular';
      }
      /deep/ .tooltip-pointer {
        display: none;
      }
    }
    @media (max-width: $breakpoint-m) {
      transform: translateX(-10px);
    }
  }
  .user-image {
    height: 35px;
    width: 35px;
    position: relative;
    overflow: hidden;
    border-radius: 40px;

    img {
      height: 100%;
    }
  }
  &:hover {
    .tooltip {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.price {
  img {
    margin-right: 2px;
  }
  @media (max-width: $breakpoint-s) {
    white-space: nowrap;
  }
}

/deep/ .price-diff {
  font-size: 1em !important;
}

.buy {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin-left: 40px;
    margin-right: 10px;
    color: white;
    text-transform: none;
    font-size: 1em;

    &:active {
      background: rgba(200,225,255,0.1)
    }
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}
</style>
