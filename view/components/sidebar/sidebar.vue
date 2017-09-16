<template>
<nav v-bind:class="{ active }">
  <div class="nav-upper" v-on:click="toggle(true)">
    <div class="ico-wrapper">
      <div class="ico-a-ie">
        <img src="/img/nav/side-nav.svg" alt="Sidebar Navigation" class='ico-20'>
      </div>
      <tooltip>Expand</tooltip>
    </div>
  </div>
  <div class="nav-lower">
    <slot></slot>
  </div>
</nav>
</template>



<script>
import tooltip from './modules/tooltip.vue'

const store = {
  state: {
    active: false,
    expanded: false,
    id: 0,
    activeId: 0
  },
  mutations: {
    toggleSidebar(state, expanded = false) {
      state.expanded = expanded
      state.active = !state.active
      state.activeId = 0
    },
    setActivePanel(state, id) {
      state.activeId = id
    },
    incrementId(state) {
      state.id++
    }
  }
}

export default {
  beforeCreate() {
    this.$store.registerModule('sidebar', store)
  },

  components: {
    tooltip
  },

  computed: {
    active() {
      return this.$store.state.sidebar.active
    }
  },

  methods: {
    toggle(expanded) {
      this.$store.commit('toggleSidebar', expanded)
    }
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

nav {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: fixed;

  &.active {
    .ico-wrapper {
      &:first-of-type::before {
        transform: translateX(0) !important;
      }

      /deep/ .panel-container {
        .panel {
          opacity: 1;
        }
      }
    }

    .ico-wrapper:not(.active) {
      /deep/ .panel-container {
        // Overwrite inline style in panel. Without the inline style, there's no
        // non-div-soupy way to position the panel on top when active.
        transform: translate(0, 0) !important;
      }
    }

    .nav-lower {
      transform: translateX(0);
    }
  }

  // Move panels back in when sidebar is inactive
  &:not(.active) {
    /deep/ .panel-container {
      transform: translate(calc(-300px - 5vw), 0) !important;
    }
  }

  .nav-upper {
    background: $colorBackgroundDarkest;

    .ico-a-ie {
      margin: 0;
      left: -1px;

      img {
        height: 20px;
        width: 20px;
      }
    }

    // Background for panels
    .ico-wrapper:first-of-type::before {
      content: '';
      pointer-events: none;
      position: absolute;
      z-index: -1;
      left: 56px;
      top: 56px;
      height: 100vh;
      width: calc(206px + 5vw);
      background: $colorBackgroundDark;
      transform: translateX(calc(-300px - 5vw));
      @include ease-out(0.45s);
      @include shadow-3;
    }
  }

  .nav-lower {
    height: 100vh;
    @include gradient-background(rgba(67, 74, 80, 0.8), $colorBackgroundLight);
    @include ease-out(0.45s);

    .ico-wrapper:first-of-type {
      background: rgba(0,5,10,0.4);
    }

    @media (max-width: $breakpoint-m) {
      transform: translateX(calc(-300px - 5vw));
    }
  }

  /deep/ {
    .ico-wrapper {
      position: relative;
      padding: 8px;
    }

    .ico-a-ie {
      @include ie(24);
      margin: 1px 0;
      position: relative;
      left: 1px;
      display: inline-block;

      img {
        height: 18px;
        width: 18px;
      }

      &:hover {
        & + .tooltip {
          opacity: 1;
          transform: translateX(10px);
        }
      }
    }
  }
}
</style>
