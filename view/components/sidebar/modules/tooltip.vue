<template>
  <div class="tooltip">
    <div class="tooltip-pointer"></div>
    <span><slot></slot></span>
  </div>
</template>



<style lang="scss" scoped>
  @import '~src/styles/partials/importer';

  .tooltip {
    position: absolute;
    pointer-events: none;
    text-align: center;
    border-radius: 2px;
    font-size: 0.85em;
    font-weight: 400;
    padding: 5px 15px;
    top: 14px;
    left: 45px;
    color: white;
    opacity: 0;
    @include gradient-background-dg($colorPrimaryDark, $colorAccentDark);
    @include shadow-2;
    @include ease(0.25s);

    .tooltip-pointer {
      position: absolute;
      top: 9px;
      left: -4px;
      @include triangle-left(5px, $colorPrimaryDark);
    }
  }
</style>
