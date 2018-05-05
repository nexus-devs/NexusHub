<template>
  <div class="tooltip">
    <div class="tooltip-pointer"/>
    <span><slot/></span>
  </div>
</template>



<style lang="scss" scoped>
  @import '~src/styles/partials/importer';

  .tooltip {
    position: absolute;
    pointer-events: none;
    text-align: center;
    z-index: 1;
    border-radius: 2px;
    font-size: 0.85em;
    font-weight: 400;
    padding: 4px 15px;
    top: 14px;
    left: 45px;
    color: white;
    opacity: 0;
    @include gradient-background-dg($color-primary, $color-accent);
    @include shadow-3;
    @include ease(0.25s);

    .tooltip-pointer {
      position: absolute;
      top: 10px;
      left: -4px;
      @include triangle-left(5px, $color-primary);
    }

    @media(max-width: $breakpoint-s) {
      display: none;
    }
  }
</style>
