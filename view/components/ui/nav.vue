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



<script>
import search from 'src/components/search/fields/input.vue'

export default {
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
    z-index: 1;
    padding: 14px 25px;
    align-items: center;

    a {
        margin: 0 15px;
        font-size: 0.9em;
    }

    @media (max-width: $breakpoint-s) {
      position: fixed;
      background: $colorBackgroundDark;
    }
  }
  .nav-l {
    a:first-of-type {
      margin-left: 60px;
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
