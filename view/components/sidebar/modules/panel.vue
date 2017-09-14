<template>
  <div class="panel-container" v-bind:style="{ transform: [`translate(0, ${-56 * (id - 1)}px)`] }">
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
  top: 0;
  left: 56px;
  width: calc(246px + 5vw);
  z-index: -1;
  will-change: transform;
  @include ease-out(0.45s);
}

.panel {
  opacity: 0;
  @include ease(0.35s);

  .panel-head {
    padding: 17px 35px;
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
        font-size: 0.65em;
        padding: 5px;
        border-radius: 2px;
        border: 1px solid $colorSubtle;
      }
    }

    @media (max-width: $breakpoint-s) {
      &:hover {
        background: $colorBackgroundDark;
      }
    }
  }

  .panel-body {
    padding: 10px 35px;
    pointer-events: none;
    opacity: 0;
    @include ease(0.25s);
  }
}
</style>
