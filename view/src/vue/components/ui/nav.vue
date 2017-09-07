<template>
  <nav class="row">
    <div class="col nav-l">
      <router-link to="/" exact><img src="/img/nav/logo-font.svg" alt="Nexus-Stats Logo" class="ico-h-24"></router-link>
    </div>
    <div class="col nav-r">
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <img src="/img/nav/nav-more.svg" class="ctx ico-16 a-ie" alt="">
    </div>
  </nav>
</template>


<style lang="scss" scoped>
  @import "~src/styles/partials/importer";

  nav {
    position: relative;
    width: calc(100% - 50px);
    z-index: 1;
    padding: 18px 25px;
    align-items: center;

    a {
        margin: 0 15px;
    }

    @media (max-width: $breakpoint-s) {
      position: fixed;
      padding: 14px 25px;
      background: rgba(27, 34, 40, 0.8);
    }
  }
  .nav-l {
    a:first-of-type {
      margin-left: 70px;
    }
  }
  .nav-r {
    text-align: right;

    @media (max-width: $breakpoint-s) {
      a span {
        display: none;
      }
    }

    @media (max-width: $breakpoint-xs) {
      a img {
        display: none;
      }
    }
  }

  // Context icon for mobile
  .ctx {
    display: none;
    float: right;

    @media (max-width: $breakpoint-xs) {
      display: block;
    }
  }
</style>
