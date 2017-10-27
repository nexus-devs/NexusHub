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
  padding: 30px 0;
  @include gradient-background-dg-tri(#596474, #5b6674, #434b57);
  @include shadow-1;

  .g-ct {
    z-index: 1;
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
