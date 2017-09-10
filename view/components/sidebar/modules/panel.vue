<template>
  <div class="panel-container" v-bind:style="{top: -100 * (id - 1) + '%'}">
    <div class="panel">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: this.$store.state.sidebar.id
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.panel-container {
  position: absolute;
  left: 64px;
  width: 286px;
  z-index: -1;
  transform: translateX(-400px);
  will-change: top;
  @include ease-out(0.6s);

  @media(max-width: $breakpoint-s) {
    left: 56px;
  }
}

.panel {
  opacity: 0;
  transition-delay: 0.2s;
  @include ease(0.5s);

  .panel-head {
    padding: 21px 35px;
    cursor: pointer;
    border-top: 1px solid $colorSubtleDark;
    @include ease(0.3s);

    &:hover {
      background: $colorBackgroundDarker;
    }

    h3 {
      display: inline-block;
      vertical-align: middle;
      font-size: 1em;

      // Shortcut
      & ~ span {
        display: inline-block;
        vertical-align: middle;
        float: right;
        margin-top: -0.2em;
        @include ease(0.15s);
      }

      & ~ .shortcut {
        pointer-events: all;
        font-size: 0.65em;
        padding: 5px;
        border-radius: 2px;
        border: 1px solid $colorSubtle;
      }
    }

    @media (max-width: $breakpoint-s) {
      padding: 17px 35px;

      &:hover {
        background: $colorBackgroundDark;
      }
    }
  }

  .panel-body {
    padding: 20px 35px;
    pointer-events: none;
    opacity: 0;
    @include ease(0.4s);
  }
}
</style>
