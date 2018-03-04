<template>
  <div class="ico-wrapper" v-bind:class="{ active, inactive }" v-on:mousedown="toggle">
    <slot></slot>
  </div>
</template>



<script>
export default {
  // Increase id on each wrapper load. This way we can enumerate the number of
  // sidebar tools. We also use this id as multiplier for vertical offsets for
  // animations since there's no way to dynamically add however many tools we
  // want otherwise. (without breaking your head at least)
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
.panel-body {
  pointer-events: none;
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
      transition-delay: 0.15s;
      opacity: 1;
      pointer-events: all;
    }
  }
}

.inactive {
  &::before {
    pointer-events: none;
  }
  .panel-head {
    pointer-events: none;
  }
  .panel-container {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
