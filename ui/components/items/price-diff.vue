<template>
  <div v-if="value && diff" class="price-diff">
    <div :class="{ negative: type === 'Selling' ? diff.value > 0 : diff.value <= 0 }" class="value">
      {{ diff.text }}
    </div>
    <div class="tooltip">
      median: {{ base }}{{ unit }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'base', 'value', 'unit'],

  computed: {
    diff () {
      if (this.base && this.value) {
        const diff = this.value - this.base
        return {
          value: diff,
          text: `${diff > 0 ? '+' : ''}${diff}${this.unit}`
        }
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
  color: $color-primary;
  @include ease(0.15s);
  padding: 10px;
  margin-bottom: -5px;
  margin-top: -5px;

  &.negative {
    color: $color-error;
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
