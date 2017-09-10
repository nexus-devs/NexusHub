<template>
  <div class="ico-wrapper" v-bind:class="{ active, inactive }" v-on:click="toggle">
    <slot></slot>
  </div>
</template>



<script>
export default {
  beforeCreate() {
    this.$store.commit('incrementId')
  },
  data() {
    return {
      // Unique id for panel received at create
      id: this.$store.state.sidebar.id
    }
  },
  computed: {
    // Check if the selected panel is this one
    active() {
      return this.$store.state.sidebar.activeId === this.id
    },
    // Id > 0 -> another panel is selected, and it's not this one
    inactive() {
      return this.$store.state.sidebar.activeId && !this.active
    }
  },
  methods: {
    toggle() {
      if (!this.$store.state.sidebar.active) {
        this.$store.commit('toggleSidebar')
      }
      if (this.$store.state.sidebar.activeId !== this.id) {
        this.$store.commit('setActivePanel', this.id)
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.ico-wrapper:not(.active) {
  .panel-container {
    // Overwrite inline style in panel. Without the inline style, there's no
    // non-div-soupy way to position the panel on top when active.
    top: 0 !important;
  }
}

.active {
  /deep/ .panel {
    .panel-head {
      cursor: auto;
      &:hover {
        background: none;
      }
      .shortcut {
        pointer-events: none;
        opacity: 0;
      }
      .back {
        pointer-events: all;
        opacity: 1;
      }
    }
    .panel-body {
      transition-delay: 0.25s;
      opacity: 1;
    }
  }
}

.inactive {
  &::before {
    pointer-events: none;
  }

  .panel-container {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
