<!--
We'll use this component as helper template in all page views. It allows us to
adjust the main content (without nav or sidebar), for example when dragging out
the sidebar. This also keeps our app.vue more clean.
-->
<template>
  <div class="app-container">
    <transition appear name="zoom">
      <div>
        <div class="app-content">
          <slot>
            <!-- page content goes here -->
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>



<style lang="scss">
@import '~src/styles/partials/importer';

// Prevent page transition from clipping
.app-container {
  max-width: 100vw;
  position: relative;
  overflow: hidden;
  @include ease(0.15s);
}

.app-content {
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

.zoom-enter-active, .fade-leave-active {
  @include ease(0.4s);
}
.zoom-enter, .zoom-leave-to {
  transform: scale(1.010);
  transform-origin: top;
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
