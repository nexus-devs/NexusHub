<template>
  <div class="realtime-user">
    <div class="realtime-user-wrapper">
      <div v-if="order" class="profile">
        <div class="profile-img">
          <img :src="component.imgUrl" alt="Username">
        </div>
        <span class="username">{{ order.user }}</span>
        <p>
          {{ order.offer }}
          <span>{{ order.component }}</span>
          for
          <span>{{ order.price ? `${order.price}p` : 'any offer' }}</span>
        </p>
        <div v-if="priceDiff" class="diff">
          <span :class="{ negative: order.offer === 'Selling' ? priceDiff >= 0 : priceDiff <= 0 }">{{ priceDiff > 0 ? '+' : '' }}{{ priceDiff }}%</span>
        </div>
      </div>
      <img v-if="order" :src="component.imgUrl" class="background blur">
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
  }
}
</script>




<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.realtime-user {
  width: 33%;
  flex-basis: auto;
  @include ease(0.5s);

  &:nth-of-type(n + 7) {
    display: none; // Prevent clipping when new element is added (i.e. exceeds 6 elements)
  }
  @media (max-width: $breakpoint-m) {
    width: inherit;
  }
}
.realtime-user-wrapper {
  @include ie; // Don't put this in parent because we want different animation
               // timings for new offers
  @include field;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-bg;
  height: 150px;
  margin-right: 15px;
  margin-bottom: 10px;

  &:before {
    border-radius: 2px;
  }
  @media (max-width: $breakpoint-m) {
    margin-right: 0;
    height: auto;
    min-height: 28px;
    padding: 10px 20px;
  }
  @media (max-width: $breakpoint-s) {
    padding: 15px 20px;
  }
}
.profile {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  .profile-img {
    position: relative;
    overflow: hidden;
    width: 56px;
    height: 56px;
    border-radius: 80px;
    margin-bottom: 10px;
  }
  img {
    position: absolute;
    top: 0;
    left: -40%;
    max-height: 120%;
    z-index: 1;
  }
  .username {
    font-family: 'Circular', sans-serif;
  }
  p {
    display: inline-block;
    color: $color-font-body;
    font-size: 0.9em;

    span {
      color: white;
    }
  }
  .diff {
    font-size: 0.85em;
    color: $color-font-body;
    display: inline-block;
    margin-top: 2px;

    span {
      color: $color-primary;
    }
    span.negative {
      color: $color-error;
    }
    @media (max-width: $breakpoint-m) {
      margin-left: 10px;
    }
  }
  @media (max-width: $breakpoint-m) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;

    .profile-img {
      display: none;
    }
    .username {
      margin-right: 20px;
    }
    p {
      margin-left: auto;
    }
  }
}
.background {
  position: absolute;
  left: 0;
  filter: blur(60px);
  opacity: 0.33;

  @media (max-width: $breakpoint-m) {
    display: none;
  }
}
time {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 0.9em;

  @media (max-width: $breakpoint-m) {
    display: none;
  }
}
</style>
