<template>
<div>
  <header>
    <div class="g-ct">
      <slot name="headline"></slot>
      <slot name="description"></slot>
    </div>
    <svg viewBox="0 0 1920 240" preserveAspectRatio="xMidYMid meet">
    <path fill-rule="evenodd"
     d="M41.299,0.303 C41.299,0.303 133.193,59.893 318.969,26.982 C441.969,5.191 506.741,50.959 656.000,67.000 C845.411,87.357 904.692,71.587 1051.806,54.099 C1205.288,35.854 1348.808,19.474 1597.480,54.099 C1846.153,88.724 1853.632,92.614 2003.440,35.520 C2119.712,-8.793 2044.739,538.000 2044.739,538.000 L-0.000,503.068 L41.299,0.303 Z"/>
    </svg>
  </header>
</div>
</template>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

header {
  position: relative;
  overflow: hidden;
  top: -56px;
  margin-bottom: -56px;
  padding-top: 30px;
  display: flex;
  height: 20vh;
  min-height: 200px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background: $colorBackground;

  svg {
    position: absolute;
    z-index: 0;
    bottom: -5vw;
    left: -60px;
    width: calc(100% + 60px);
    opacity: 0.5;
    fill: $colorBackgroundDark;
  }

  .g-ct {
    position: relative;
    z-index: 1;
    width: 100%;
    padding-bottom: 20px; // for svg
  }
  p {
    color: white;
    font-weight: 400;
  }
  @media (max-width: $breakpoint-m) {
    padding-top: 56px;
    top: 0;
    margin-bottom: 0;
  }
}
</style>
