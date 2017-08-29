<template>
  <nav class="row">
    <div class="col nav-l">
      <router-link to="/" exact><img src="/img/nav/logo-font.svg" alt="Nexus-Stats Logo" class="ico-h-24"></router-link>
    </div>
    <div class="col nav-r">
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
  @import "~src/styles/partials/importer";
  nav {
    width: calc(100% - 50px);
    z-index: 2;
    padding: 20px 25px;
    align-items: center;

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
      margin-left: 70px;
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
