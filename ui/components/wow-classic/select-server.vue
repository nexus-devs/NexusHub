<template>
  <div class="select">
    <div class="interactive" @click="toggle">
      <span>{{ serverPretty.name }}</span>
      <img :src="`/img/wow-classic/ui/${serverPretty.faction}.svg`" :alt="`${serverPretty.faction} Logo`" class="faction-logo">
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active: !active }" class="dropdown">
      <div class="body">
        <span :class="{ active: server === '' }" @click="toggle()">Select Server</span>

        <!-- Europe Servers -->
        <span :class="{ active: activeRegion === 'EU' }" @click="selectRegion('EU')">Europe</span>
        <template v-for="s in serverlist.EU">
          <span :key="s" :class="{ active: serverPretty.name === s, selected: selectedRegion === 'EU' }"
                class="server" @click="selectServer(s)"
          >{{ s }}</span>
          <div :key="s + 'faction'" :class="{ selected: selectedServer === s }" class="faction">
            <div class="image-wrapper" @click="setServer(s, 'alliance'); toggle();">
              <img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo">
            </div>
            <div class="image-wrapper" @click="setServer(s, 'horde'); toggle();">
              <img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo">
            </div>
          </div>
        </template>

        <!-- United States Servers -->
        <span :class="{ active: activeRegion === 'US' }" @click="selectRegion('US')">United States</span>
        <template v-for="s in serverlist.US">
          <span :key="s" :class="{ active: serverPretty.name === s, selected: selectedRegion === 'US' }"
                class="server" @click="selectServer(s)"
          >{{ s }}</span>
          <div :key="s + 'faction'" :class="{ selected: selectedServer === s }" class="faction">
            <div class="image-wrapper" @click="setServer(s, 'alliance'); toggle();">
              <img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo">
            </div>
            <div class="image-wrapper" @click="setServer(s, 'horde'); toggle();">
              <img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo">
            </div>
          </div>
        </template>
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
    selectedServer () {
      return this.$store.state.servers.selected.server
    },
    serverPretty () {
      if (this.server === '') return 'Select Server'

      const serverSplit = this.server.split('-')
      const faction = serverSplit.pop()
      const serverlist = this.serverlist.EU.concat(this.serverlist.US)
      const serverIndex = serverlist.map((x) => utility.serverSlug(x)).indexOf(serverSplit.join('-'))
      return { name: serverlist[serverIndex], faction }
    },
    activeRegion () {
      if (this.serverlist.EU.includes(this.serverPretty.name)) return 'EU'
      else return 'US'
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
      if (!this.active) {
        this.$store.commit('selectRegion', '')
      }
    },
    selectRegion (region) {
      if (region === this.selectedRegion) this.$store.commit('selectRegion', '')
      else this.$store.commit('selectRegion', region)
    },
    selectServer (server) {
      if (server === this.selectedServer) this.$store.commit('selectServer', '')
      else this.$store.commit('selectServer', server)
    },
    setServer (server, faction) {
      server = utility.serverSlug(server)
      if (this.server === server) return
      server = `${server}-${faction}`
      const region = this.activeRegion.toLowerCase()

      const route = this.$route.fullPath.replace(this.server, server)
      this.$router.push(route)
      this.$store.commit('setServer', { server, region })
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

  .faction-logo {
    vertical-align: middle;
    height: 20px;
  }
}
.dropdown {
  position: absolute;
  top: 0;
  padding: 5px 0;
  background: $color-bg-dark;
  @include ease(0.15s);
  @include shade-1;

  @media (max-width: $breakpoint-s) {
    position: fixed;
    top: 56px;
    left: 0;
    width: 100vw;
  }

  .body {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: calc(250px + 10vh);

    @media (max-width: $breakpoint-s) {
      max-height: 100vh;
    }

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
  padding: 0 15px !important;
  @include ease(0.35s);
  overflow: hidden;
  background: $color-bg;

  &.selected {
    opacity: 1;
    max-height: 100%;
    padding: 10px 15px !important;
    overflow: visible;
  }
  &:hover {
    background: darken($color-bg, 5%) !important
  }
}
.faction {
  background: lighten($color-bg, 10%);
  display: none;
  justify-content: space-around;
  @include ease(0.35s);

  .image-wrapper{
    width: 100%;
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;

    img {
      max-height: 20px;
    }

    &:hover {
      background: lighten($color-bg, 5%);
    }
  }

  &.selected {
    display: flex;
  }
}
</style>
