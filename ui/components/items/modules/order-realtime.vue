<template>
  <div class="row item-price-snippet" @click="select">

    <!-- left panel -->
    <div class="col">
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
    <div class="col">
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
      return this.item.components.find(c => c.name === this.order.component)
    },
    priceDiff () {
      const type = this.order.offer.toLowerCase()
      const value = this.order.price - this.component[type].current.median

      if (this.order.price) {
        return (value / this.component[type].current.median * 100).toFixed(2)
      } else {
        return null
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
  @include ease(0.5s)

  &:nth-of-type(n + 7) {
    opacity: 0;
    position: absolute;
  }
}

.col {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22.5px;
  width: 100px;
  @include shadow-1;

  &:first-of-type {
    @include gradient-background-dg(#3e4651, #404756)
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
          height: 60%;
        }
      }
      img {
        height: 45%;
        border-radius: 999px;
      }
      .background-overlay {
        position: absolute;
        bottom: 0;
        background: red;
        height: 100%;
        width: 100%;
        z-index: 1;
        @include gradient-background(rgba(15, 20, 25, 0.1), #323942);
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
    @include gradient-background-dg($color-bg, #252a33);
    text-align: center;

    span {
      font-size: 0.9em;
    }
  }
}
</style>
