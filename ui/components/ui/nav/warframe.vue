<template>
  <nav class="row">
    <div class="col nav-l">
      <router-link to="/warframe" exact>
        <img src="/img/brand/nexushub-logo-typeface.svg" alt="Nexushub Logo" class="logo ico-h-20">
      </router-link>
    </div>
    <search placeholder="Search items...">
      <span class="shortcut">SHIFT + F</span>
    </search>
    <div class="col nav-r">
      <notifications />
    </div>
  </nav>
</template>



<script>
import notifications from 'src/components/ui/notifications.vue'
import search from 'src/components/search/input.vue'

// Client-side-only requirements
let shortcut, listener
try {
  shortcut = require('keyboardjs')
} catch (err) {}

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

  mounted () {
    listener = shortcut.bind('shift + f', (e) => {
      e.preventDefault() // Don't type in input on keyup
      this.$el.querySelector('input').focus()
    })
  },

  beforeDestroy () {
    shortcut.unbind('shift + f', listener)
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

.shortcut {
  position: absolute;
  z-index: 2;
  right: 15px;
  top: 7px;
  font-size: 0.65em;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid $color-subtle;
  color: $color-font-subtle;
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

/deep/ .search {
  position: relative;
  font-size: 0.9em;
  width: 100%;
  max-width: $max-width;
  flex-grow: 1;
  background: $color-bg-darker;

  @media (max-width: $breakpoint-s) {
    display: none;
  }

  label {
    display: none;
  }

  input {
    position: relative; // Overlay autocomplete
    z-index: 2;
    color: white;
    border-radius: 3px;
    padding: 9px 15px;
    border: 1px solid transparent;
    width: 100%;
    @include ease(0.15s);

    &:hover, &:active, &:focus {
      border: 1px solid $color-subtle;
    }

    &::placeholder {
      color: $color-font-subtle !important;
    }
  }

  .autocomplete {
    position: absolute;
    left: 16px;
    top: 10px;
    z-index: 1;
  }
  .autocomplete-type {
    position: absolute;
    z-index: 1;
    right: 90px;
    top: 10px;
  }

  .tools {
    position: absolute;
    border-radius: 2px;
    background: $color-bg-dark;
    width: 100%;
    z-index: 0;
    @include shadow-1;

    // Input Suggestions
    .suggestion {
      padding: 15px;
      cursor: pointer;

      &:hover {
        background: $color-bg-darker;
      }
      .ico-36 {
        position: relative;
        overflow: hidden;
        text-align: center;
        border-radius: 2px;
        margin-right: 10px;

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
        }
      }
      .suggestion-data {
        display: inline-block;
        vertical-align: middle;
        font-size: 1.1em;
        color: white;
        font-family: 'Circular';
        margin: 7px 10px;
        padding: 3px 10px;
        border-left: 1px solid $color-subtle;
      }
    }
  }
}
</style>
