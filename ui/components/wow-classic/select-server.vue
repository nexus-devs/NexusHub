<template>
  <div class="module-time">
    <div class="interactive" @click="toggle">
      <span>{{ server }}</span>
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active }" class="dropdown">
      <div class="body">
        <span :class="{ active: server === 'All' }" @click="selectServer('All'); toggle()">All</span>
        <span v-for="s in serverlist" :key="s" :class="{ active: server === s }" @click="selectServer(s); toggle()">{{ s }}</span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: ['serverlist'],

  data () {
    return {
      active: false,
      server: 'All'
    }
  },

  created () {
    const routeArgs = this.$route.fullPath.split('/')
    for (const arg of routeArgs) {
      const server = arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase()
      if (this.serverlist.includes(server)) {
        this.server = server
        break
      }
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
    },

    selectServer (server) {
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
            this.server = 'All'
            return
          }
        }
      }

      this.$router.push(route)
      this.server = server
    }
  }
}
</script>



<style lang="scss" scoped>
  @import '~src/styles/partials/importer';

  .module-time {
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
