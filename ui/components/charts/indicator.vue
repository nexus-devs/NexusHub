<template>
  <svg :class="{ negative: diff < 0, positive: diff > 0, reverse }" height="10px" width="7px" overflow="visible" class="indicator">
    <path :transform="`translate(${x || 0}, ${y || 0})`" :d="diff < 0 ? negative : positive"/>
  </svg>
</template>



<script>
export default {
  props: ['x', 'y', 'diff', 'reverse'],

  data () {
    return {
      positive: 'M3.65,0l-3.15,3.265l2.363,0l-0.001,5.735l1.575,0l0,-5.735l2.363,0l-3.15,-3.265Z',
      negative: 'M3.65,9l3.15,-3.265l-2.363,0l0,-5.735l-1.575,0l0.001,5.735l-2.363,0l3.15,3.265Z'
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.indicator {
  display: inline-block;
  transform: scale(1.15);

  path {
    fill: $color-font-body;
  }

  &.negative {
    transform: rotate(180);

    path {
      fill: $color-error;
    }
  }
  &.positive {
    path {
      fill: $color-primary-subtle;
    }
  }
  &.reverse {
    &.negative {
      path {
        fill: $color-primary-subtle;
      }
    }
    &.positive {
      path {
        fill: $color-error;
      }
    }
  }
}
</style>
