<template>
  <div class="popup">
    <div class="overlay" @click="close" />
    <div class="popup-content">
      <div class="header">
        <slot name="header" />
        <img src="/img/ui/close.svg" class="ico-h-20 interactive" alt="Close" @click="close">
      </div>
      <div class="body">
        <div class="body-content">
          <slot name="body" />
        </div>
        <img src="/img/ui/popup-blob-bottom.svg" class="blob-bottom">
        <img src="/img/ui/popup-blob-top.svg" class="blob-top">
      </div>
    </div>
  </div>
</template>



<script>
export default {
  methods: {
    close () {
      this.$store.commit('selectOrder', {})
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.popup {
  position: fixed;
  z-index: 3;
  pointer-events: none;
  opacity: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh + 10px); // compensate for Y transform
  @include ease(0.25s);

  &.active {
    pointer-events: all;
    opacity: 1;
    transform: translateY(-10px);
  }
}

.blob-top {
  position: absolute;
  top: -200px;
  right: -330px;
  opacity: 0.33;
}
.blob-bottom {
  position: absolute;
  left: -150px;
  bottom: -350px;
  opacity: 0.33;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: rgba(31,34,42,0.62);
}

.popup-content {
  @include field;
  @include shadow-3;
  position: fixed;
  z-index: 4;
  width: 60vw;
  min-width: 200px;
  max-width: calc(600px + 5vw);
  background: $color-bg;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 30px 10px;
    background: $color-bg;

    h3, h4, h5 {
      color: $color-primary-subtle !important;
      @include uppercase;
      font-size: 0.85em;
      letter-spacing: 0.2;
    }
  }
  .body {
    position: relative;
    overflow: hidden;
    padding: 30px;
    background: $color-bg-dark;

    @media (max-width: $breakpoint-s) {
      padding: 30px 0px;
    }
  }
  .body-content {
    z-index: 1;
  }
  @media (max-width: $breakpoint-m) {
    min-width: 70vw;
  }
  @media (max-width: $breakpoint-s) {
    min-width: 90vw;
  }
}
</style>
