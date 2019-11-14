<template>
  <div class="select region">
    <div class="interactive" @click="toggle">
      <span>{{ region }}</span>
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active }" class="dropdown">
      <div class="body">
        <span :class="{ active: region === 'All Regions' }" @click="selectRegion('All Regions'); toggle()">All Regions</span>
        <span :class="{ active: region === 'EU' }" @click="selectRegion('EU'); toggle()">EU</span>
        <span :class="{ active: region === 'US' }" @click="selectRegion('US'); toggle()">US</span>
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
    region () {
      return this.$store.state.servers.selectedRegion
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
    },

    selectRegion (region) {
      if (this.region === region) return

      let route = this.$route.fullPath.replace(`/${this.region.toLowerCase()}`, '')
      route = route.replace(`/${utility.serverSlug(this.$store.state.servers.selectedServer)}`, '')

      this.$store.commit('setRegion', region)
      this.$store.commit('setServer', 'All Servers')
      utility.pushUrl(this, route)
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
