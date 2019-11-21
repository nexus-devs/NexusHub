<template>
  <div :class="{ deactivated }" class="select server">
    <div class="interactive" @click="toggle">
      <span>{{ server }}</span>
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active }" class="dropdown">
      <div class="body">
        <span :class="{ active: server === 'All Servers' }" @click="selectServer('All Servers'); toggle()">All Servers</span>
        <span v-for="s in serverlist" :key="s" :class="{ active: server === s }" @click="selectServer(s); toggle()">{{ s }}</span>
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
    server () {
      return this.$store.state.servers.selectedServer
    },
    deactivated () {
      return this.$store.state.servers.selectedRegion === 'All Regions'
    },
    serverlist () {
      if (this.deactivated) return []
      else return this.$store.state.servers[this.$store.state.servers.selectedRegion]
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
    },

    selectServer (server) {
      if (this.server === server) return

      let route = this.$route.fullPath.replace(`/${this.$store.state.servers.selectedRegion.toLowerCase()}`, '')
      route = route.replace(`/${utility.serverSlug(this.server)}`, '')

      this.$store.commit('setServer', server)
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

  &.deactivated {
    pointer-events: none;
    opacity: 0.5;
  }
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
    overflow-y: scroll;
    max-height: calc(250px + 10vh);

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
