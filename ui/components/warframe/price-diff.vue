<template>
  <div v-if="previous" class="price-diff">
    <div :class="{ negative: type.toLowerCase() === 'selling' ? diff > 0 : diff < 0, positive: type.toLowerCase() === 'selling' ? diff < 0 : diff > 0 }" class="value">
      <indicator :diff="diff" :reverse="type.toLowerCase() === 'selling'" />
      {{ Math.abs(diff) }}{{ unit }}
    </div>
    <div v-if="current" class="tooltip">
      {{ base || 'median' }} {{ current }}{{ unit }}
    </div>
  </div>
</template>



<script>
import indicator from 'src/components/charts/indicator.vue'

export default {
  components: {
    indicator
  },

  props: ['type', 'current', 'previous', 'unit', 'base'],

  computed: {
    diff () {
      if (this.current && this.previous) {
        return this.previous - this.current
      } else {
        return null
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.price-diff {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: -8px;
  cursor: default;
}

.value {
  color: $color-font-body;
  padding: 10px;
  margin-bottom: -5px;
  margin-top: -5px;
  margin-left: 5px;

  &.negative {
    color: $color-error;
  }
  &.positive {
    color: $color-primary-subtle;
  }
  &:hover {
    opacity: 0;

    & + .tooltip {
      opacity: 1;
      transform: translateX(5px);
    }
  }
}

.tooltip {
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  opacity: 0;
  padding: 10px;
  margin-bottom: -5px;
  margin-top: -5px;
  color: white;
  transform: translateX(0);
  @include ease(0.15s);
}
</style>
