<template>
  <nav class="row">
    <div class="col nav-l">
      <img src="/img/nav/side-nav.svg" alt="Sidebar Navigation" class="ico-24">
      <router-link to="/" exact><img src="/img/nav/logo-font.svg" alt="Nexus-Stats Logo" class="ico"></router-link>
    </div>
    <div class="col nav-r">
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
  @import "../styles/partials/importer";
  nav {
      position: fixed;
      width: calc(100% - 50px);
      z-index: 2;
      padding: 14px 25px;
      background: rgba(0,0,0,0.8);
      align-items: center;
      @include shadow-1;

      a {
          margin: 0 15px;
          &,
          & span {
              display: inline-block;
              vertical-align: middle;
              margin-left: 3px;
          }
      }
  }
  .nav-l {
      a:first-of-type {
          margin-left: 20px;
      }
      .ico {
        height: 24px;
      }
  }
  .nav-r {
      text-align: right;
  }
  @media (max-width: $breakpoint-s) {
      .nav-r {
          span {
              display: none;
          }
      }
  }
</style>
