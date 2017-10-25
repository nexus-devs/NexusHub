<template>
  <header>
    <div class="g-ct">
      <slot></slot>
    </div>
    <slot name="sub"></slot>
  </header>
</template>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

header {
  position: relative;
  overflow: hidden;
  padding: 30px 0;
  top: -56px;
  margin-bottom: -56px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @include gradient-background-dg($colorBackgroundLight, $colorBackground);
  @include shadow-1;

  .g-ct {
    z-index: 1;
    width: 100%;
    padding-top: 85px;
    padding-bottom: 70px; // for svg
  }
  p {
    color: white;
    font-weight: 400;
  }
  @media (max-width: $breakpoint-m) {
    top: 0;
    padding-top: 60px;
    margin-bottom: 0;
  }
}
</style>
