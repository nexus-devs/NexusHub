<!--
We'll use this component as helper template in all page views. It allows us to
adjust the main content (without nav or sidebar), for example when dragging out
the sidebar. This also keeps our app.vue more clean.
-->
<template>
  <div class="app-container">
    <transition appear name="zoom">
      <div>
        <div class="app-content" :class="{ activeSidebar, visibleSidebar, deltaX }"
             :style="breakpoint && deltaX ? { transform: [`translate(calc(${deltaX + 262}px + 5vw), 0px)`],
                    'margin-right': `calc(${deltaX + 262}px + 5vw)`,
                    'transition-duration': deltaX ? '0s' : '0.45s'} : {}">
            <slot>
              <!-- page content goes here -->
            </slot>
        </div>
      </div>
    </transition>
  </div>
</template>



<script>

export default {
  data() {
    return {
      breakpoint: false
    }
  },

  mounted() {
    // JS breakpoint to ensure correct content movement behaviour when sidebar
    // is moved. (move content on $breakpoint-m, don't move it below)
    window.addEventListener('resize', () => this.updateBreakpoint())
    this.breakpoint = document.documentElement.clientWidth > 1150 ? true : false
  },

  computed: {
    activeSidebar() {
      return this.$store.state.sidebar ? this.$store.state.sidebar.active : false
    },
    visibleSidebar() {
      return this.$store.state.sidebar ? !this.$store.state.sidebar.hidden : false
    },
    // Horizontal position for content when swiping out the sidebar
    deltaX() {
      return this.$store.state.sidebar ? this.$store.state.sidebar.deltaX : 0
    }
  },

  methods: {
    // Check if we reached $breakpoint-m. If so, don't "squeeze" the app content on menu swipe
    updateBreakpoint() {
      this.breakpoint = document.documentElement.clientWidth > 1150 ? true : false
    }
  }
}
</script>



<style lang="scss">
@import '~src/styles/partials/importer';

// Prevent page transition from clipping
.app-container {
  max-width: 100vw;
  position: relative;
  overflow: hidden;
}

.app-content {
  will-change: transform;

  // Disable accidental text selection on sidebar touch
  &.deltaX {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  & > .container {
    will-change: padding;
  }
}

// Compensate for sidebar width so the page content would stay "centered"
.visibleSidebar .container {
  padding-left: 160px;
}

.zoom-enter-active, .fade-leave-active {
  @include ease(0.3s);
}
.zoom-enter, .zoom-leave-to {
  transform: scale(1.005) translateY(3px);
  transform-origin: 50%;
  opacity: 0.75;
}

@media (min-width: $breakpoint-m) {
  .app-content {
    @include ease-out(0.45s);

    & > .container {
      @include ease-out(0.45s);
    }
  }
  .activeSidebar {
    margin-right: calc(262px + 5vw);
    transform: translateX(calc(262px + 5vw));

    & > .container {
      padding: 0 96px !important;
    }
  }
}
</style>
