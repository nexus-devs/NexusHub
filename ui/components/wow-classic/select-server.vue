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
export default {
  data () {
    return {
      active: false,
      deactivated: false,
      server: 'All Servers',
      serverlist: []
    }
  },

  watch: {
    $route (to, from) {
      const routeArgs = to.fullPath.split('/')

      const regionIndex = routeArgs.findIndex(x => x === 'eu' || x === 'us')
      if (regionIndex >= 0) {
        this.deactivated = false
        this.serverlist = this.$store.state.servers[routeArgs[regionIndex].toUpperCase()]
      } else {
        this.deactivated = true
        this.serverlist = []
      }

      const server = this.serverlist.filter(v => routeArgs.includes(v.toLowerCase()))
      if (server.length > 0) this.server = server[0]
      else this.server = 'All Servers'
    }
  },

  created () {
    const routeArgs = this.$route.fullPath.split('/')

    const regionIndex = routeArgs.findIndex(x => x === 'eu' || x === 'us')
    if (regionIndex >= 0) {
      this.deactivated = false
      this.serverlist = this.$store.state.servers[routeArgs[regionIndex].toUpperCase()]
    } else {
      this.deactivated = true
      this.serverlist = []
    }

    const server = this.serverlist.filter(v => routeArgs.includes(v.toLowerCase()))
    if (server.length > 0) this.server = server[0]
    else this.server = 'All Servers'
  },

  methods: {
    toggle () {
      this.active = !this.active
    },

    selectServer (server) {
      if (this.server === server)

      let route = ''
      if (!this.serverlist.includes(server)) route = this.$route.fullPath.replace(this.server.toLowerCase() + '/', '')
      else {
        const args = this.$route.fullPath.split('/')
        if (args.includes(this.server.toLowerCase())) route = this.$route.fullPath.replace(this.server.toLowerCase(), server.toLowerCase())
        else {
          const regionIndex = args.findIndex(x => x === 'eu' || x === 'us')
          if (regionIndex >= 0) {
            args.splice(regionIndex + 1, 0, server.toLowerCase())
            route = args.join('/')
          } else {
            // TODO: Display error message
            this.server = 'All Servers'
            return
          }
        }
      }

      this.$router.push(route)
      this.server = server // So it displays already on select
    }
  }
}
</script>



<style lang="scss" scoped>
  @import '~src/styles/partials/importer';

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
