<template>
  <v-touch tag="nav" ref="touch" v-on:pan="move" v-bind:class="{ active }">
    <div class="nav-upper" v-on:click="toggle(true)">
      <div class="ico-wrapper">
        <div class="panel-backdrop" v-bind:style="{ transform: [transform], 'transition-duration': deltaX ? '0s' : '0.45s' }"></div>
        <div class="ico-a-ie">
          <img src="/img/nav/side-nav.svg" alt="Sidebar Navigation" class='ico-20'>
        </div>
        <tooltip>Tools</tooltip>
      </div>
    </div>
    <div class="nav-lower" v-bind:class="{ dragged: deltaX || active }">
      <div class="nav-lower-backdrop"></div>
      <slot></slot>
    </div>
  </v-touch>
</template>



<script>
import tooltip from './modules/tooltip.vue'

const store = {
  state: {
    active: false,
    expanded: false,
    id: 0,
    activeId: 0,
    deltaX: 0
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
    setSidebarDeltaX(state, pos) {
      state.deltaX = pos
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
    },
    deltaX() {
      return this.$store.state.sidebar.deltaX
    },
    transform() {
      const open = this.$store.state.sidebar.active
      const deltaX = this.deltaX
      const thing = `translate(${open || deltaX ? `${deltaX}px` : `calc(${deltaX - 320}px - 5vw)`}, 0)`
      return thing
    }
  },

  methods: {
    toggle(expanded) {
      this.$store.commit('toggleSidebar', expanded)
    },
    move(e) {
      // Reset on end
      if (e.isFinal) {
        return this.reset()
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
    reset() {
      // close
      if (this.$store.state.sidebar.active && this.$store.state.sidebar.deltaX < -75) {
        this.$store.commit('toggleSidebar')
      }
      // open
      else if (!this.$store.state.sidebar.active && this.$store.state.sidebar.deltaX > -285) {
        this.$store.commit('toggleSidebar', true)
      }
      this.$store.commit('setSidebarDeltaX', 0)
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
  z-index: 3;
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
      .panel-backdrop {
        content: '';
        position: absolute;
        z-index: -1;
        left: 56px;
        top: 56px;
        height: 100vh;
        width: calc(206px + 5vw);
        background: $colorBackgroundDark;
        will-change: transform;
        @include ease-out(0.45s);
        @include shadow-3;

        @media (max-width: $breakpoint-s) {
          transform: translateX(calc(-320px - 5vw));
          width: calc(250px + 5vw);
        }
      }
    }

    .nav-lower {
      height: 100vh;
      @include ease-out(0.45s);
      @include gradient-background($colorBackgroundLight, $colorBackground);

      .nav-lower-backdrop {
        position: absolute;
        height: 100vh;
        width: 100%;
        @include shadow-1;
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

      &:nth-of-type(2) {
        background: rgba(0, 5, 10, 0.4);
      }
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
