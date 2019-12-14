<template>
  <nav class="row">
    <div class="col nav-l">
      <router-link to="/" exact>
        <img src="/img/brand/nexushub-logo-typeface.svg" alt="Nexushub Logo" class="logo ico-h-20">
      </router-link>
    </div>
    <div class="col nav-r">
      <notifications />
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
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: calc(100% - 30px);
  padding: 0 15px;
  height: 56px;
  top: 0;
  z-index: 4;
  background: $color-bg-dark;
  @include shadow-1;

  a {
    font-size: 0.9em;

    &:nth-of-type(3) {
      margin-left: 25px;
    }
  }
  .logo {
    height: 22px;
    padding-left: 10px;
    padding-right: 20px; // For search bar margin
  }
  @media (max-width: $breakpoint-s) {
    width: calc(100% - 28px);
    padding: 0 14px;
  }
}
.nav-l {
  a:first-of-type {
    @media (max-width: $breakpoint-s) {
      img {
        margin-top: 1px;
      }
    }
  }

  .sub {
    position: relative;
    top: 1px;
    vertical-align: middle;
    @include uppercase;
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
  margin-left: 10px;

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
