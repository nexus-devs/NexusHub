<template>
  <div class="popup">
    <div class="overlay" @click="close"/>
    <div class="popup-content">
      <div class="header">
        <slot name="header"/>
        <img src="/img/ui/close.svg" class="ico-h-20 a-ie" alt="Close" @click="close">
      </div>
      <div class="body">
        <div class="body-content">
          <slot name="body"/>
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
  height: calc(100vh + 20px); // compensate for Y transform
  @include ease(0.25s);

  // Blur background
  &.active ~ /deep/ .app-container, &.active ~ /deep/ .item-header {
    filter: blur(2px);
  }
  &.active {
    pointer-events: all;
    opacity: 1;
    transform: translateY(-20px);
  }
  @media (max-width: $breakpoint-m) {
    width: 80vw;
  }
  @media (max-width: $breakpoint-s) {
    width: calc(100vw - 40px);
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
  background: rgba(25,28,34,0.62);
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
    text-transform: uppercase;
    font-size: 0.85em;
    color: white;
    letter-spacing: 0.2;
    padding: 15px 30px;
    background: $color-bg;
  }
  .body {
    position: relative;
    overflow: hidden;
    padding: 30px;
    background: $color-bg-dark;
  }
  .body-content {
    z-index: 1;
  }
}
</style>
