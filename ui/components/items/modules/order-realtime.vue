<template>
  <div class="row item-price-snippet" @click="select">

    <!-- left panel -->
    <div v-if="order && component" class="col">
      <div :class="{ set: component.name === 'Set' }" class="background">
        <div class="background-overlay"/>
        <img :src="component.imgUrl" :alt="`${item.name} ${component.name}`">
      </div>

      <div class="content">
        <div class="content-data">
          <span class="content-data-main-value">
            {{ order.price ? `${order.price}p` : 'any offer' }}
          </span>
          <span v-if="order.price" :class="{ negative: order.offer === 'Selling' ? priceDiff >= 0 : priceDiff <= 0 }">
            {{ priceDiff > 0 ? '+' : '' }}{{ priceDiff }}%
          </span>
        </div>
      </div>
    </div>

    <!-- right panel -->
    <div v-if="order && component" class="col">
      <h4>{{ order.user }}</h4>
      <span>{{ order.offer }} {{ order.component }}</span>
    </div>
  </div>
</template>



<script>
export default {
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

.row {
  @include ie;
  display: flex;
  border-radius: 2px;
  padding: 0;
  margin-left: 15px;
  margin-bottom: 15px;
  max-width: 330px;
  min-width: 240px;
  min-height: 160px;
  @include ease(0.5s);

  &:nth-of-type(n + 5) {
    opacity: 0;
    position: absolute;
  }
  @media (max-width: $breakpoint-m) {
    flex-direction: row-reverse;
    margin-left: 0;
    min-height: inherit;
    min-width: inherit;
    max-width: inherit;
    max-height: 70px;
    width: 100%;

    .content-data {
      margin-top: 0 !important;
    }
    .content-data-main-value {
      font-size: 1em !important;
    }
    img {
      display: none;
    }
  }
  @media (max-width: $breakpoint-m) {
    .col {
      width: 120px !important;
    }
  }
  @media (max-width: $breakpoint-s) {
    margin-bottom: 5px;
  }
}

.col {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 90px;
  @include shadow-1;

  &:first-of-type {
    @include gradient-background-dg(#3c4451, $color-bg)
    z-index: 1;

    .background {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      &.set {
        img {
          height: 50%;
        }
      }
      img {
        height: 35%;
        border-radius: 999px;
      }
      .background-overlay {
        position: absolute;
        bottom: 0;
        background: red;
        height: 100%;
        width: 100%;
        z-index: 1;
        @include gradient-background(transparent, #3c4451);
      }
    }
    .content {
      position: relative;
      z-index: 1;
      text-align: center;

      .content-data {
        margin-top: 70px;

        .content-data-main-value {
          color: white;
          font-size: 1.1em;
        }
        span:nth-of-type(2) {
          display: block;
          font-size: 0.85em;
          color: $color-primary;
        }
        .negative {
          color: $color-error !important;
        }
      }
    }
  }
  // Right col
  &:last-of-type {
    position: relative;
    @include gradient-background-dg(#272c35, #232830);
    text-align: center;

    span {
      font-size: 0.9em;
    }
  }
}
</style>
