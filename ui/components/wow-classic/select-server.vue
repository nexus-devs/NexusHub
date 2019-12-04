<template>
  <div class="select">
    <div class="interactive" @click="toggle">
      <span>{{ serverPretty }}</span>
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active }" class="dropdown">
      <div class="body">
        <span :class="{ active: server === '' }" @click="toggle()">Select Server</span>
        <span>Europe</span>
        <span v-for="s in serverlist.EU" :key="s"
              :class="{ active: server === s, selected: selectedRegion === 'EU' }"
              class="server"
        >{{ s }}</span>
        <span>United States</span>
        <span v-for="s in serverlist.US" :key="s" :class="{ active: server === s, selected: selectedRegion === 'US' }"
              class="server"
        >{{ s }}</span>
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
      return this.$store.state.servers.server
    },
    serverlist () {
      return { EU: this.$store.state.servers.EU, US: this.$store.state.servers.US }
    },
    selectedRegion () {
      return this.$store.state.servers.selected.region
    },
    serverPretty () {
      if (this.server === '') return 'Select Server'
      return 'Select Server'

      const serverSplit = this.server.split('-')
      const faction = serverSplit.pop()
      const serverIndex = this.serverlist.map((x) => utility.serverSlug(x)).indexOf(serverSplit.join('-'))
      return `${this.serverlist[serverIndex]} - ${faction.charAt(0).toUpperCase() + faction.slice(1)}`
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
    },

    selectServer (server) {
      server = utility.serverSlug(server)
      if (this.server === server) return
      server = `${server}-alliance` // TODO: Remove

      const route = this.$route.fullPath.replace(this.server, server)
      this.$router.push(route)
      this.$store.commit('setServer', server)
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

.server {
  opacity: 0;
  max-height: 0;
  padding: 0 !important;
  @include ease(0.35s);
  overflow: hidden;

  &.selected {
    opacity: 1;
    max-height: 100%;
  }
}
</style>
