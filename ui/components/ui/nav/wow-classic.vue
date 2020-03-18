<template>
  <nav class="row">
    <div class="col nav-l">
      <router-link :to="`/wow-classic/${activeServer.slug}`" exact>
        <img src="/img/brand/nexushub-logo-typeface-wow-classic.svg" alt="Nexushub Logo" class="logo ico-h-20">
      </router-link>
    </div>
    <div v-if="!landingPage" class="middle-content">
      <search placeholder="Search items...">
        <span class="shortcut">SHIFT + F</span>
      </search>
      <select-server :fn="generateSwitchUrl" />
    </div>
    <div class="col nav-r">
      <notifications />
    </div>
  </nav>
</template>



<script>
import notifications from 'src/components/ui/notifications.vue'
import search from 'src/components/search/wow-classic.vue'
import selectServer from 'src/components/wow-classic/select-server.vue'
import storeModule from 'src/store/wow-classic/servers.js'

// Client-side-only requirements
let shortcut, listener
try {
  shortcut = require('keyboardjs')
} catch (err) {}

export default {
  components: {
    notifications,
    search,
    selectServer
  },

  props: ['landingPage'],

  async asyncData ({ store, route }) {
    const serverlist = await this.$cubic.get(`/wow-classic/v1/servers/full`)
    store.commit('setServerlist', serverlist)

    const slug = route.params.slug
    if (slug) {
      const serverQuery = slug.split('-')
      const faction = serverQuery.pop()
      const server = { ...serverlist.find(s => s.slug === serverQuery.join('-')) } // Clone object to avoid mutating serverlist
      if (server) {
        server.faction = faction.toLowerCase()
        store.commit('setActiveServer', server)
      }
    }
  },

  computed: {
    activeServer () {
      return this.$store.state.servers.activeServer
    }
  },

  methods: {
    generateSwitchUrl (server) {
      return this.$route.fullPath.replace(this.activeServer.slug, server)
    }
  },

  mounted () {
    listener = shortcut.bind('shift + f', (e) => {
      e.preventDefault() // Don't type in input on keyup
      this.$el.querySelector('input').focus()
    })
  },

  beforeDestroy () {
    shortcut.unbind('shift + f', listener)
  },

  storeModule
}
</script>



<style lang="scss" scoped>
@import "~src/styles/partials/wow-classic/importer";

nav {
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: calc(100% - 30px);
  padding: 0 15px;
  height: 56px;
  top: 0;
  z-index: 4;
  background: $color-bg-dark;
  @include shadow-1;

  a {
    font-size: 0.9em;

    &:nth-of-type(3) {
      margin-left: 25px;
    }
  }
  .logo {
    height: 22px;
    padding-left: 10px;
    padding-right: 20px; // For search bar margin
  }
  @media (max-width: $breakpoint-s) {
    width: calc(100% - 28px);
    padding: 0 14px;
  }
}
.nav-l {
  a:first-of-type {
    @media (max-width: $breakpoint-s) {
      img {
        margin-top: 1px;
      }
    }
  }

  .sub {
    position: relative;
    top: 1px;
    vertical-align: middle;
    @include uppercase;
    font-size: 0.75em;
    margin-left: -12px;
    color: $color-font-body !important;
    @include ease(0.3s);

    @media (max-width: $breakpoint-s) {
      display: none;
    }
  }
}
.nav-r {
  text-align: right;
  margin-left: 10px;

  @media (max-width: $breakpoint-s) {
    a span {
      display: none;
    }
  }

  @media (max-width: $breakpoint-xs) {
    a img {
      display: none;
    }
  }
}

// Context icon for mobile
.ctx {
  display: none;
  float: right;

  @media (max-width: $breakpoint-xs) {
    display: block;
  }
}

.shortcut {
  position: absolute;
  z-index: 2;
  right: 15px;
  top: 7px;
  font-size: 0.65em;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid $color-subtle;
  color: $color-font-subtle;
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.middle-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex: initial;
  width: 100%;
  max-width: $max-width;
}

/deep/ .select {
  font-size: 0.9em;
  flex-shrink: 0;
}
/deep/ .select.region {
  margin-left: 5px;
}

/deep/ .search {
  position: relative;
  font-size: 0.9em;
  width: 100%;
  max-width: $max-width;
  background: $color-bg-darker;

  @media (max-width: $breakpoint-s) {
    display: none;
  }

  label {
    display: none;
  }

  input {
    position: relative; // Overlay autocomplete
    z-index: 2;
    color: white;
    border-radius: 3px;
    padding: 9px 15px;
    border: 1px solid transparent;
    width: 100%;
    @include ease(0.15s);

    &:hover, &:active, &:focus {
      border: 1px solid $color-subtle;
    }

    &::placeholder {
      color: $color-font-subtle !important;
    }
  }

  .autocomplete {
    position: absolute;
    left: 16px;
    top: 10px;
    z-index: 1;
  }
  .autocomplete-type {
    position: absolute;
    z-index: 1;
    right: 90px;
    top: 10px;
  }

  .tools {
    position: absolute;
    border-radius: 2px;
    background: $color-bg-dark;
    width: 100%;
    z-index: 0;
    @include shadow-1;

    // Input Suggestions
    .suggestion {
      padding: 15px;
      cursor: pointer;

      &:hover {
        background: $color-bg-darker;
      }
      .ico-36 {
        position: relative;
        overflow: hidden;
        text-align: center;
        border-radius: 2px;
        margin-right: 10px;

        img {
          position: relative;
          max-width: 200%;
          z-index: 1;
          border: 1px solid $color-bg-darker;
          // Accomodate for border
          left: -1px;
          top: -1px;
        }
      }
      .suggestion-main {
        display: inline-block;
        vertical-align: middle;

        .suggestion-name, .suggestion-type {
          display: block;
        }
        .suggestion-name {
          color: white;
        }
        .suggestion-type {
          margin-top: -3px;
          font-size: 0.9em;
        }
      }
      .suggestion-data {
        display: inline-block;
        vertical-align: middle;
        font-size: 1.1em;
        color: white;
        font-family: 'Circular';
        margin: 7px 10px;
        padding: 3px 10px;
        border-left: 1px solid $color-subtle;
      }
    }
  }
}
</style>
