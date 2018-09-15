<template>
  <v-touch ref="touch" :class="{ active }" tag="nav" @pan="move">
    <div class="nav-upper" @click="toggle()">
      <div class="ico-wrapper">
        <div :style="{ transform: [transform], 'transition-duration': deltaX ? '0s' : '0.45s' }" class="panel-backdrop"/>
        <div class="ico-a-ie">
          <img src="/img/nav/side-nav.svg" alt="Sidebar Navigation" class="ico-20">
        </div>
      </div>
    </div>
    <div :class="{ dragged: deltaX || active, hidden }" class="nav-lower">
      <div class="nav-lower-backdrop"/>
      <slot/>
    </div>
  </v-touch>
</template>



<script>
import tooltip from './modules/tooltip.vue'

export default {
  components: {
    tooltip
  },

  computed: {
    active () {
      return this.$store.state.sidebar.active
    },
    deltaX () {
      return this.$store.state.sidebar.deltaX
    },
    transform () {
      const open = this.$store.state.sidebar.active
      const deltaX = this.deltaX
      const pos = `translate(${open || deltaX ? `${deltaX}px` : `calc(${deltaX - 320}px - 5vw)`}, 0)`
      return pos
    },
    hidden () {
      return this.$store.state.sidebar.hidden
    }
  },

  beforeCreate () {
    // Reset counters for panel id's when loading a new page
    // These id's also act as mulitpliers for the `top: x px` distance of
    // expanded sections.
    if (this.$store.state.sidebar && this.$store._mutations.toggleSidebar) {
      this.$store.commit('setId', 0)
    }
  },

  methods: {
    toggle () {
      // Make sidebar-bar visible, not panels
      if (this.hidden) {
        this.$store.commit('showSidebar')
      }
      else if (!this.$store.state.sidebar.keepVisible && !this.hidden) {
        this.$store.commit('hideSidebar')
      }

      // Full toggle with panels
      this.$store.commit('toggleSidebar')
    },
    move (e) {
      // Make visible if hidden by default (hide again on e.isFinal)
      if (this.hidden) {
        this.$store.commit('showSidebar')
      }
      // Reset on end
      if (e.isFinal) {
        this.reset()
        if (!this.$store.state.sidebar.active && !this.$store.state.sidebar.keepVisible) {
          this.$store.commit('hideSidebar')
        }
      }
      // Horizontal only
      if (e.eventType <= 4) {
        if (this.$store.state.sidebar.active && e.deltaX < 0) {
          this.$store.commit('setSidebarDeltaX', e.deltaX)
        }
        if (!this.$store.state.sidebar.active && e.deltaX > 0 && e.deltaX <= 300) {
          this.$store.commit('setSidebarDeltaX', -300 + e.deltaX)
        }
      }
    },
    reset () {
      // close
      if (this.$store.state.sidebar.active && this.$store.state.sidebar.deltaX < -75) {
        this.$store.commit('toggleSidebar')
      }
      // open
      else if (!this.$store.state.sidebar.active && this.$store.state.sidebar.deltaX > -225) {
        this.$store.commit('toggleSidebar')
      }
      this.$store.commit('setSidebarDeltaX', 0)
    }
  },

  storeModule: {
    name: 'sidebar',
    state: {
      active: false,
      hidden: true,
      keepVisible: false,
      id: 0,
      activeId: 0,
      deltaX: 0
    },
    mutations: {
      toggleSidebar (state) {
        if (!state.hidden) {
          state.active = !state.active
          state.activeId = 0
        }
      },
      hideSidebar (state) {
        state.active = false
        state.hidden = true
      },
      showSidebar (state) {
        state.hidden = false
      },
      keepSidebarVisible (state, bool) {
        state.keepVisible = bool
      },
      setActivePanel (state, id) {
        state.activeId = id
      },
      setSidebarDeltaX (state, pos) {
        if (!state.hidden) {
          state.deltaX = pos
        }
      },
      incrementId (state) {
        state.id++
      },
      setId (state, num) {
        state.id = num
      }
    }
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  position: fixed;

  &.active {
    /deep/ {
      .ico-wrapper {
        .panel-container {
          .panel {
            opacity: 1;
          }
        }
      }
      .nav-lower {
        transform: translateX(0);
      }
    }
  }

  /deep/ {
    .nav-upper {
      background: $color-bg-darkest;

      .ico-a-ie {
        margin: 0;
        left: -1px;

        img {
          height: 20px;
          width: 20px;
        }
      }

      // Background for panels
      .panel-backdrop {
        content: '';
        position: absolute;
        z-index: -1;
        left: 56px;
        top: 56px;
        height: 100vh;
        width: calc(206px + 5vw);
        background: $color-bg-dark;
        will-change: transform;
        @include ease-out(0.45s);
        @include shade-1;

        @media (max-width: $breakpoint-s) {
          transform: translateX(calc(-320px - 5vw));
          width: calc(250px + 5vw);
        }
      }
      &:hover {
        & ~ .nav-lower.hidden {
          opacity: 1 !important;

          .ico-a-ie {
            background: rgba(200,225,255,0.1);
          }
          .tooltip {
            opacity: 1;
            background: transparent;
            box-shadow: none;
            transition-delay: 0s;

            .tooltip-pointer {
              opacity: 0;
              transition-delay: 0s;
            }
          }
        }
      }
    }

    .nav-lower {
      height: 100vh;
      @include ease-out(0.45s);

      &.hidden {
        opacity: 0;
        pointer-events: none;

        .tooltip {
          @include ease(0s);
          transition-delay: 1s;

          .tooltip-pointer {
            transition-delay: 1s;
          }
        }
      }
      &.dragged {
        .nav-lower-backdrop {
          background: $color-bg;
        }
      }
      .nav-lower-backdrop {
        position: absolute;
        height: 100vh;
        width: 100%;
        z-index: 1;
      }
    }

    @media (max-width: $breakpoint-m) {
      .nav-lower:not(.dragged) {
        transform: translateX(calc(-300px - 5vw));
      }
    }

    .ico-wrapper {
      position: relative;
      padding: 8px;
    }

    .ico-a-ie {
      position: relative;
      z-index: 1;
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
