<template>
  <div class="select region">
    <div class="interactive" @click="toggle">
      <span>{{ faction }}</span>
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active }" class="dropdown">
      <div class="body">
        <span :class="{ active: faction === 'All Factions' }" @click="selectFaction('All Factions'); toggle()">All Factions</span>
        <span :class="{ active: faction === 'Alliance' }" @click="selectFaction('Alliance'); toggle()">Alliance</span>
        <span :class="{ active: faction === 'Horde' }" @click="selectFaction('Horde'); toggle()">Horde</span>
      </div>
    </div>
  </div>
</template>



<script>
import utility from './utility'

export default {
  data () {
    return {
      active: false
    }
  },

  computed: {
    faction () {
      return this.$store.state.servers.selectedFaction
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
    },

    selectFaction (faction) {
      if (this.faction === faction) return
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.select {
  position: relative;
  z-index: 2;
  font-size: 1.1em;
  color: white;
}
.interactive {
  padding: 6px 10px;
}
.dropdown {
  position: absolute;
  top: 0;
  padding: 5px 0;
  background: $color-bg;
  @include ease(0.15s);
  @include shade-1;

  .body {
    display: flex;
    flex-direction: column;

    span {
      cursor: pointer;
      padding: 10px 15px;
      @include ease(0.15s);
    }
    span:hover {
      background: rgba(0,0,0,0.15);
    }
    span:not(.active) {
      color: $color-font-body;
    }
  }
  &:not(.active) {
    pointer-events: none;
    opacity: 0;
    transform: translateY(-5px);
    transform-origin: top;
    @include ease(0.15s);
  }
}
</style>
