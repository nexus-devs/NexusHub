<template>
  <div class="price-detailed active">
    <div class="users">
      <doubleline :data="data" />
    </div>
  </div>
</template>


<script>
import doubleline from 'src/components/charts/doubleline.vue'
import indicator from 'src/components/charts/indicator.vue'

export default {
  components: {
    indicator,
    doubleline
  },

  computed: {
    data () {
      const item = this.$store.state.items.item.current
      const data = []

      let i = 0
      for (const week of item.intervals) {
        for (const day of week.intervals) {
          data.push({ x: i, marketValue: day.marketValue, qty: day.qty })
          i++
        }
      }

      return data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.price-detailed {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 50%;
  min-height: 300px;
  @include field;
  background: $color-bg;
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;
  @include ease(0.3s);

  &:hover {
    background: $color-bg;
  }
  &.active {
    opacity: 1;
    transform: scale(1);
    pointer-events: all;
  }
  @media (max-width: $breakpoint-m) {
    flex-wrap: wrap;
    box-shadow: none;

    .selection {
      border-left: 0;
      border-top: 10px solid $color-bg-dark;
      width: 100%;
    }
  }

  @media (max-width: $breakpoint-s) {
    .item {
      width: 100%;
      border-bottom: 10px solid $color-bg-dark;

      .overview {
        padding: 20px 0;
      }
    }
  }
}

.users {
  display: flex;
  padding: 25px 25px;
  flex: 1;
  min-height: 300px;
}
</style>
