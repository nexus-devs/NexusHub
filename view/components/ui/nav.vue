<template>
  <nav class="row">
    <div class="col nav-l">
      <router-link to="/warframe" exact><img src="/img/nav/logo-font.svg" alt="Nexus-Stats Logo" class="ico-h-24"></router-link>
      <router-link :to="{ path: `/${game}`}" class="game">{{ game }}</router-link>
    </div>
    <div class="col nav-r">
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <a href="#"><img src="/img/placeholder.svg" alt="" class="ico-20"><span>placeholder</span></a>
      <img src="/img/nav/nav-more.svg" class="ctx ico-16 a-ie" alt="">
    </div>
  </nav>
</template>



<script>
import search from 'src/components/search/fields/input.vue'

export default {
  computed: {
    game() {
      return this.$store.state.game.name
    }
  },
  components: {
    search
  }
}
</script>



<style lang="scss" scoped>
  @import "~src/styles/partials/importer";

  nav {
    position: relative;
    width: calc(100% - 50px);
    padding: 13.25px 25px;
    z-index: 2;
    align-items: center;

    a {
      margin: 0 15px;
      font-size: 0.9em;
    }

    @media (max-width: $breakpoint-m) {
      position: fixed;
      background: $colorBackgroundDark;
      @include shadow-1;
    }
  }
  .nav-l {
    a:first-of-type {
      margin-left: 60px;

      @media (max-width: $breakpoint-s) {
        margin-left: 50px;
      }
    }

    .game {
      position: relative;
      top: 1.5px;
      vertical-align: middle;
      text-transform: uppercase;
      font-size: 0.75em;
      margin-left: -12px;
      color: $colorFontBody !important;
      @include ease(0.3s);

      @media (max-width: $breakpoint-s) {
        display: none;
      }
    }

    /deep/ .search {
      display: inline-block;
      vertical-align: middle;

      label, br {
        display: none;
      }

      input {
        background: $colorBackgroundDarker;
        padding: 5px 15px;
        border-radius: 9999px;
        font-size: 0.85em;
        color: white;
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
