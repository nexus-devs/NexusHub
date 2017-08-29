<template>
  <nav>
    <div class="ico-wrapper">
      <div class="ico-ie">
        <img src="/img/nav/side-nav.svg" alt="Sidebar Navigation" class='ico-20'>
      </div>
    </div>
    <div class="ico-wrapper">
      <div class="ico-ie">
        <img src="/img/sidebar/search.svg" alt="" class='ico-20'>
      </div>
    </div>
  </nav>
</template>


<style lang='scss' scoped>
  @import '~src/styles/partials/importer';

  nav {
    position: relative;
    z-index:1;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    @include gradient-background(rgba(47, 54, 60, 0.5), $colorBackgroundDarker);
    @include shadow-2;

    .ico-wrapper {
      padding: 12px;

      &:first-of-type {
        background: rgba(0,0,0,0.2);
      }
    }

    .ico-ie {
      @include ie(24);
      border-radius: 24px;

      &:hover {
        background: rgba(255,255,255,0.1);
      }
    }

    .border {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      height: 1.5px;
      border-radius: 100px;
      background: $colorSubtle;
    }
  }
</style>
