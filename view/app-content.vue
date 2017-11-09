<!--
We'll use this component as helper template in all page views. It allows us to
adjust the main content (without nav or sidebar), for example when dragging out
the sidebar. This also keeps our app.vue more clean.
-->
<template>
  <div class="transition-wrapper">
    <transition appear name="zoom">
      <div>
        <div class="app-content" :class="{ activeSidebar, deltaX }"
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

.app-content {
  will-change: transform;

  // Disable accidental text selection on sidebar touch
  &.deltaX {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  & > .g-ct {
    will-change: padding;
  }
}

.zoom-enter-active {
  @include ease-out(0.65s);
}
.zoom-enter, .zoom-leave-to {
  transform: scale(1.01);
  opacity: 0.5;
}
.transition-wrapper {
  position: relative;
  overflow: hidden;
}

@media (min-width: $breakpoint-m) {
  .app-content {
    @include ease-out(0.45s);

    & > .g-ct {
      @include ease-out(0.45s);
    }
  }
  .activeSidebar {
    margin-right: calc(262px + 5vw);
    transform: translateX(calc(262px + 5vw));

    & > .g-ct {
      padding: 0 96px !important;
    }
  }
}
</style>
