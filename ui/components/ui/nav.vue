<template>
  <nav class="row">
    <div class="col nav-l">
      <router-link to="/warframe" exact><img src="/img/nav/logo-font.svg" alt="Nexus-Stats Logo" class="ico-h-24"></router-link>
      <span class="sub">Beta</span>
      <slot>
        <!-- Page links will go here -->
      </slot>
    </div>
    <div class="col nav-r">
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <img src="/img/nav/nav-more.svg" class="ctx ico-16 a-ie" alt="">
    </div>
  </nav>
</template>



<script>
export default {
  computed: {
    game () {
      return this.$store.state.game.name
    }
  }
}
</script>



<style lang="scss" scoped>
  @import "~src/styles/partials/importer";

  nav {
    position: fixed;
    width: calc(100% - 50px);
    padding: 14px 25px;
    z-index: 2;
    background: $color-bg-dark;
    align-items: center;

    a {
      margin: 0 15px;
      font-size: 0.9em;
    }

    @media (max-width: $breakpoint-m) {
      position: fixed;
      background: $color-bg-dark;
      @include shadow-1;
    }
    @media (max-width: $breakpoint-s) {
      padding: 13.5px 25px;
    }
  }
  .nav-l {
    a:first-of-type {
      margin-left: 60px;

      @media (max-width: $breakpoint-s) {
        margin-left: 50px;
        img {
          margin-top: 1px;
        }
      }
    }

    .sub {
      position: relative;
      top: 1px;
      vertical-align: middle;
      text-transform: uppercase;
      font-size: 0.75em;
      margin-left: -12px;
      color: $color-font-body !important;
      @include ease(0.3s);

      @media (max-width: $breakpoint-s) {
        display: none;
      }
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
