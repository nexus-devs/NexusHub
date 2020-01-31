<template>
  <svg :class="[{ negative: diff < 0, positive: diff > 0, reverse }, theme.indicator]" height="10px" width="7px" overflow="visible" class="indicator">
    <path :transform="`translate(${x || 0}, ${y || 0})`" :d="diff < 0 ? negative : positive" />
  </svg>
</template>



<script>
import getTheme from 'src/components/_theme.js'

export default {
  props: ['x', 'y', 'diff', 'reverse'],

  data () {
    return {
      positive: 'M3.65,0l-3.15,3.265l2.363,0l-0.001,5.735l1.575,0l0,-5.735l2.363,0l-3.15,-3.265Z',
      negative: 'M3.65,9l3.15,-3.265l-2.363,0l0,-5.735l-1.575,0l0.001,5.735l-2.363,0l3.15,3.265Z'
    }
  },

  computed: {
    theme () {
      return getTheme(this)
    }
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.indicator {
  path {
    fill: $color-font-body;
  }

  &:global(.negative) {
    path {
      fill: $color-error;
    }
  }
  &:global(.positive) {
    path {
      fill: $color-primary-subtle;
    }
  }
  &:global(.reverse.negative) {
    path {
      fill: $color-primary-subtle;
    }
  }
  &:global(.reverse.positive) {
    path {
      fill: $color-error;
    }
  }
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.indicator {
  path {
    fill: $color-font-body;
  }

  &:global(.negative) {
    path {
      fill: $color-error;
    }
  }
  &:global(.positive) {
    path {
      fill: $color-positive;
    }
  }
  &:global(.reverse.negative) {
    path {
      fill: $color-positive;
    }
  }
  &:global(.reverse.positive) {
    path {
      fill: $color-error;
    }
  }
}
</style>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.indicator {
  display: inline-block;
  transform: scale(1.15);

  &.negative {
    transform: rotate(180);
  }
}
</style>
