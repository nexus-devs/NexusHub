<template>
  <nav class="nav-main row">
    <div class="col nav-l">
      <router-link to="/warframe" exact>
        <img src="/img/brand/nexushub-logo-typeface.svg" alt="Nexushub Logo" class="logo ico-h-20">
      </router-link>
      <!-- <span class="sub">{{ game }}</span> -->
      <slot>
        <!-- Page links will go here -->
      </slot>
    </div>
    <div class="col nav-r">
      <notifications/>
    </div>
  </nav>
</template>



<script>
import notifications from 'src/components/ui/notifications.vue'

export default {
  components: {
    notifications
  },

  computed: {
    game () {
      return this.$store.state.game.name
    }
  },

  watch: {
    $route (to, from) {
      this.$store.commit('setActiveGame', to.fullPath.split('/')[1])
    }
  },

  beforeCreate () {
    this.$store.commit('setActiveGame', this.$route.fullPath.split('/')[1])
  },

  storeModule: {
    name: 'game',
    state: {
      name: ''
    },
    mutations: {
      setActiveGame (state, game) {
        state.name = game
      }
    }
  }
}
</script>



<style lang="scss" scoped>
  @import "~src/styles/partials/importer";

  nav {
    position: fixed;
    width: calc(100% - 50px);
    padding: 0 25px;
    height: 56px;
    z-index: 4;
    background: $color-bg-dark;
    align-items: center;
    @include shadow-1;

    a {
      margin: 0 15px;
      font-size: 0.9em;
    }
    .logo {
      height: 22px;
    }
    @media (max-width: $breakpoint-m) {
      position: fixed;
      background: $color-bg-dark;
      @include shadow-1;
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
