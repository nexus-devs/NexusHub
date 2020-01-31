<template>
  <header>
    <img src="/img/ui/header-blobs-outline.svg" class="blobs">
    <div class="background-container">
      <div class="background" />
    </div>
    <div class="container">
      <slot />
    </div>
    <slot name="sub" />
  </header>
</template>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

header {
  position: relative;
  background: $color-bg-darker;

  .blobs {
    position: absolute;
    width: 110%;
    left: -100px;
    top: -100px;
    min-width: 1920px;
    fill: $color-subtle-dark !important;
    animation-name: pulse;
    animation-timing-function: ease-in-out;
    animation-duration: 35s;
    animation-iteration-count: infinite;
  }
  .container {
    position: relative;
    z-index: 1;
    padding-top: 180px;
    padding-bottom: 180px;
    // padding-left will be affected by open sidebar, so don't use shortcut
  }
  h1 {
    font-weight: 300;
  }
  p {
    color: white;
    font-weight: 400;
  }
  .background-container {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
}

@keyframes pulse {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scale3d(1.15,1.15,1.15);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
