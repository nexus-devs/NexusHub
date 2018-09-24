<template>
  <nav class="row">
    <div class="nav-l">
      <router-link to="/warframe" exact>
        <img src="/img/brand/nexushub-logo-typeface.svg" alt="Nexushub Logo" class="logo ico-h-20">
      </router-link>
      <search :placeholder="'Search item...'"/>
    </div>
    <div class="nav-r">
      <notifications/>
    </div>
  </nav>
</template>



<script>
import notifications from 'src/components/ui/notifications.vue'
import search from 'src/components/search/input.vue'

export default {
  components: {
    notifications,
    search
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
  justify-content: space-between;
  width: calc(100% - 50px);
  padding: 0 25px;
  height: 56px;
  top: 0;
  z-index: 4;
  background: $color-bg-dark;
  align-items: center;
  @include shadow-1;

  a {
    margin: 0 15px;
    font-size: 0.9em;

    &:nth-of-type(3) {
      margin-left: 25px;
    }
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

/deep/ .search {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  font-size: 0.9em;
  border-radius: 3px;
  background: $color-bg-darker;
  padding: 6px 12px;

  @media (max-width: $breakpoint-s) {
    display: none;
  }

  label, br {
    display: none;
  }

  input {
    position: relative;
    min-width: 200px;
    color: white;
    z-index: 1;

    &::placeholder {
      color: $color-font-subtle !important;
    }
  }

  .autocomplete {
    position: absolute;
    left: 12px;
    top: -1px;
    margin-top: 7px;
    z-index: 0;
  }
  .autocomplete-type {
    display: none;
  }

  .tools {
    position: absolute;
    border-radius: 2px;
    background: $color-bg-dark;
    left: 0;
    width: 100%;
    margin-top: 6px;
    z-index: 2;
    @include shadow-1;

    @media (max-width: $breakpoint-s) {
      width: calc(100% - 2px);
      background: $color-bg-darker;
    }

    // Input Suggestions
    .suggestion {
      padding: 10px 12px;
      cursor: pointer;
      @include ease(0.1s);
      border-top: 1px solid $color-subtle-dark;

      &:hover {
        background: $color-bg-darker;
      }
      .ico-36 {
        position: relative;
        overflow: hidden;
        text-align: center;
        border-radius: 2px;
        margin-right: 20px;
        margin-left: 10px;
        height: 24px;
        width: 24px;

        img {
          position: relative;
          left: -50%;
          max-width: 200%;
          z-index: 1;
        }
      }
      .suggestion-main {
        display: inline-block;
        vertical-align: middle;

        .suggestion-name, .suggestion-type {
          display: block;
        }
        .suggestion-name {
          color: white;
        }
        .suggestion-type {
          margin-top: -3px;
          font-size: 0.9em;
          opacity: 0.8;
        }
      }
      .suggestion-data {
        position: absolute;
        display: inline-block;
        vertical-align: middle;
        right: 0;
        font-size: 0.9em;
        margin: 7px 0;
        padding: 3px 10px;
      }
    }
  }
}
</style>
