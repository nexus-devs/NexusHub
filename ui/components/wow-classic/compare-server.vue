<template>
  <div class="select">
    <div class="interactive" @click="toggle">
      <img src="/img/ui/compare.svg" class="ico-h-20" alt="Compare">
      <span>Compare {{ activeServer.slug ? activeServer.name : 'Realm' }}</span>
      <img v-if="activeServer.slug" :src="`/img/wow-classic/ui/${activeServer.faction}.svg`" :alt="`${activeFactionPretty} Logo`" class="faction-logo">
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active }" class="dropdown">
      <div class="body">
        <span :class="{ active: !activeServer.slug }" @click="toggle()">Compare Realm</span>

        <!-- Europe Servers -->
        <span :class="{ active: activeServer.region === 'EU' }" @click="selectRegion('EU')">Europe</span>
        <template v-for="s in serverlist.EU">
          <span :key="s.slug" :class="{ active: activeServer.name === s.name, selected: selected.region === 'EU' }"
                class="server" @click="selectServer(s)"
          >{{ s.name }}</span>
          <div :key="s.slug + 'faction'" :class="{ selected: selected.server === s.slug }" class="faction">
            <div class="image-wrapper" @click="toggle(); fn(s.slug + '-alliance');">
              <img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo">
            </div>
            <div class="image-wrapper" @click="toggle(); fn(s.slug + '-horde');">
              <img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo">
            </div>
          </div>
        </template>

        <!-- United States Servers -->
        <span :class="{ active: activeServer.region === 'US' }" @click="selectRegion('US')">United States</span>
        <template v-for="s in serverlist.US">
          <span :key="s.slug" :class="{ active: activeServer.name === s.name, selected: selected.region === 'US' }"
                class="server" @click="selectServer(s)"
          >{{ s.name }}</span>
          <div :key="s.slug + 'faction'" :class="{ selected: selected.server === s.slug }" class="faction">
            <div class="image-wrapper" @click="toggle(); fn(s.slug + '-alliance');">
              <img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo">
            </div>
            <div class="image-wrapper" @click="toggle(); fn(s.slug + '-horde');">
              <img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo">
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: ['fn', 'activeServer'],

  data () {
    return {
      active: false,
      selected: {
        region: '',
        server: ''
      }
    }
  },

  computed: {
    activeFactionPretty () {
      return this.activeServer.faction.charAt(0).toUpperCase() + this.activeServer.faction.slice(1)
    },
    serverlist () {
      return {
        EU: this.$store.state.servers.serverlist.filter(s => s.region === 'EU'),
        US: this.$store.state.servers.serverlist.filter(s => s.region === 'US')
      }
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
      if (!this.active) this.selectRegion('')
    },
    selectRegion (region) {
      if (region === this.selected.region) this.selected.region = ''
      else this.selected.region = region
      this.selected.server = ''
    },
    selectServer (server) {
      if (server === this.selected.server) this.selected.server = ''
      else this.selected.server = server.slug
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.select {
  position: relative;
  z-index: 2;
  color: white;

  &.deactivated {
    pointer-events: none;
    opacity: 0.5;
  }
}
.interactive {
  padding: 6px 10px;
  font-family: inherit !important;
  @include uppercase;

  .faction-logo {
    vertical-align: middle;
    height: 20px;
  }

  span {
    font-family: inherit !important;
  }
}
.dropdown {
  position: absolute;
  top: 0;
  padding: 5px 0;
  background: $color-bg;
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
    max-height: calc(175px + 10vh);

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
  background: lighten($color-bg, 5%);

  &.selected {
    opacity: 1;
    max-height: 100%;
    padding: 10px 15px !important;
    overflow: visible;
  }
  &:hover {
    background: lighten($color-bg, 2.5%) !important
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
      background: lighten($color-bg, 7.5%);
    }
  }

  &.selected {
    display: flex;
    min-height: 40px; // Fucking safari
  }
}
</style>
