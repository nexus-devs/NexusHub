<template>
<nav v-bind:class="{ active }">
  <div class="nav-upper" v-on:click="toggle">
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
    active: false
  },
  mutations: {
    toggleSidebar(sidebar) {
      sidebar.active = !sidebar.active
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
    toggle() {
      this.$store.commit('toggleSidebar')
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
    /deep/ .ico-a-ie + .tooltip {
      opacity: 0 !important;
      pointer-events: none;
    }
    .ico-wrapper {
      &:first-of-type::before {
        transform: translateX(0);
      }

      /deep/ .panel-container {
        transform: translateX(0);

        .panel {
          opacity: 1;
        }
      }
    }
  }

  .nav-upper {
    background: $colorBackgroundDarkest;
    @include shadow-1;
  }

  .nav-lower {
    height: calc(100vh - 64px);
    background: $colorBackgroundLight;
    @include shadow-1;

    .ico-wrapper:first-of-type {
      background: rgba(0,5,10,0.4);
    }

    @media (max-width: $breakpoint-s) {
      transform: translateX(-100%);
    }
  }

  /deep/ {
    .ico-wrapper {
      position: relative;
      padding: 12px;

      // Background for panels
      &:first-of-type::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 64px;
        top: 64px;
        height: 100vh;
        width: 286px;
        background: $colorBackgroundDark;
        transform: translateX(-300px);
        @include ease-out(0.6s);
        @include shadow-3;
      }

      @media (max-width: $breakpoint-s) {
        padding: 8px;
      }
    }

    .ico-a-ie {
      @include ie(24);
      display: inline-block;

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
