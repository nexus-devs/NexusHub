<template>
  <div class="select">
    <div class="interactive" @click="toggle">
      <span>{{ activeServer.name }}</span>
      <img :src="`/img/wow-classic/ui/${activeServer.faction}.svg`" :alt="`${activeFactionPretty} Logo`" class="faction-logo">
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active }" class="dropdown">
      <div class="body">
        <span :class="{ active: activeServer.slug === '' }" @click="toggle()">Select Server</span>

        <!-- Europe Servers -->
        <span :class="{ active: activeServer.region === 'EU' }" @click="selectRegion('EU')">Europe</span>
        <template v-for="s in serverlist.EU">
          <span :key="s.slug" :class="{ active: activeServer.name === s.name, selected: selectedRegion === 'EU' }"
                class="server" @click="selectServer(s)"
          >{{ s.name }}</span>
          <div :key="s.slug + 'faction'" :class="{ selected: selectedServer === s.slug }" class="faction">
            <router-link :to="generateSwitchUrl(s.slug + '-alliance')" class="image-wrapper" @click.native="toggle();">
              <img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo">
            </router-link>
            <router-link :to="generateSwitchUrl(s.slug + '-horde')" class="image-wrapper" @click.native="toggle();">
              <img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo">
            </router-link>
          </div>
        </template>

        <!-- TODO: Make this more modular (e.g. a click function) -->

        <!-- United States Servers -->
        <span :class="{ active: activeServer.region === 'US' }" @click="selectRegion('US')">United States</span>
        <template v-for="s in serverlist.US">
          <span :key="s.slug" :class="{ active: activeServer.name === s.name, selected: selectedRegion === 'US' }"
                class="server" @click="selectServer(s)"
          >{{ s.name }}</span>
          <div :key="s.slug + 'faction'" :class="{ selected: selectedServer === s.slug }" class="faction">
            <router-link :to="generateSwitchUrl(s.slug + '-alliance')" class="image-wrapper" @click.native="toggle();">
              <img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo">
            </router-link>
            <router-link :to="generateSwitchUrl(s.slug + '-horde')" class="image-wrapper" @click.native="toggle();">
              <img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo">
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data () {
    return {
      active: false
    }
  },

  computed: {
    activeServer () {
      return this.$store.state.servers.activeServer
    },
    activeFactionPretty () {
      return this.activeServer.faction.charAt(0).toUpperCase() + this.activeServer.faction.slice(1)
    },
    serverlist () {
      return {
        EU: this.$store.state.servers.serverlist.filter(s => s.region === 'EU'),
        US: this.$store.state.servers.serverlist.filter(s => s.region === 'US')
      }
    },
    selectedRegion () {
      return this.$store.state.servers.selected.region
    },
    selectedServer () {
      return this.$store.state.servers.selected.server
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
      else this.$store.commit('selectServer', server.slug)
    },
    generateSwitchUrl (server) {
      return this.$route.fullPath.replace(this.activeServer.slug, server)
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
    min-height: 40px; // Fucking safari
  }
}
</style>
