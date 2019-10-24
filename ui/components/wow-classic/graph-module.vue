<template>
  <div class="graph-module active">
    <div class="header">
      <slot name="header"/>
    </div>
    <div class="body">
      <slot name="body"/>
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
    <progressbar ref="progress"/>
  </div>
</template>

<script>
import progressbar from 'src/components/progress.vue'

export default {
  components: {
    progressbar
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.graph-module {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

.header {
  padding: 25px 25px 0;

  h2, h3 {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.8em !important;
    letter-spacing: 0.5;
    color: $color-primary-subtle !important;
    @include uppercase;
  }
  time {
    display: block;
    font-size: 0.85em;
    margin-top: 2px;
  }
  img {
    display: inline-block;
    vertical-align: middle;
  }
  .img {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    margin-right: 5px;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    background: $color-bg;

    img, object {
      position: relative;
      max-height: 80%;
    }
  }
  span {
    display: block;
  }
  @media (max-width: $breakpoint-s) {
    padding: 25px 25px 0;
  }
}

.body {
  display: flex;
  padding: 25px 25px;
  flex: 1;
  min-height: 200px;
}

.footer {
  display: flex;
  padding: 2px 25px;
  margin-top: auto;
  background: $color-bg-dark;
  font-size: 0.75em !important;
  border-radius: 2px;

  a {
    display: flex;
    margin-left: auto;
    align-items: center;
    @include uppercase;
    @include ie;
    padding: 5px 10px;
    letter-spacing: 0.5;
    position: relative;
    left: 10px;

    &:hover {
      color: white !important;
    }
    img {
      height: 20px;
      margin-top: -3px;
      margin-left: -2px;
    }
  }
}

.progress {
  // Set to important because the main progress bar overrides it back to fixed
  // when compiling for production, due to some weird bug.
  position: absolute !important;
  top: 0;
  border-radius: 2px;
}
</style>
