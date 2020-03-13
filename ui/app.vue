<template>
  <div id="app" :class="theme.app">
    <div class="app-view">
      <router-view />
      <bottom />
    </div>
    <status />
  </div>
</template>



<script>
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueTouch from 'vue-touch-hotfix'
import bottom from 'src/components/ui/footer.vue'
import getTheme from 'src/components/_theme.js'
import status from 'src/components/ui/status.vue'

/**
 * Main application wrapper. Anything 'global' goes here.
 */
export default {
  components: {
    status,
    bottom
  },

  computed: {
    theme () {
      return getTheme(this)
    },
    route () {
      return this.$route
    }
  },

  watch: {
    // Apply query params to state if applicable.
    route () {
      this.$store.dispatch('applyInputQuery', this.$route)
    },
    $route (to, from) {
      this.$store.commit('setActiveGame', to.fullPath.split('/')[1])
    }
  },

  beforeCreate () {
    Vue.use(VueTouch)
    this.$store.commit('setActiveGame', this.$route.fullPath.split('/')[1])
  },

  mounted () {
    document.body.className = this.theme.body // Hack so the progress bar can be styled
    Vue.use(VueAnalytics, {
      id: 'UA-128905436-1',
      checkDuplicatedScript: true,
      router: this.$router
    })
  },

  storeModule: {
    name: 'game',
    state: {
      name: ''
    },
    mutations: {
      setActiveGame (state, game) {
        state.name = game
      }
    }
  },

  head: {
    /* eslint no-undef: "off" */
    title: 'NexusHub' + ($STAGING ? ' [staging]' : ($PRODUCTION ? '' : ' [dev]')),
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'preload', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', as: 'font' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400' }
    ],
    script: [
      { src: 'https://s.nitropay.com/ads-227.js' }
    ]
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.app {
  background: $color-bg-dark;
  :global {
    @import '~src/styles/modules/importer';

    .btn, button {
      @include gradient-background-dg($color-primary, $color-accent);

      &:after {
        @include gradient-background-dg($color-primary, $color-accent);
      }
    }
  }
}

.body {
  :global {
    @import '~src/styles/gdpr';

    // Style progress here because it gets defined in cubic-ui
    .progress {
      @include gradient-background-dg($color-primary, $color-accent);
    }
  }
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.app {
  background: $color-bg-dark;

  :global {
    @import '~src/styles/modules/wow-classic/importer';

    .btn, button {
      background: linear-gradient(to bottom right, $color-primary 33%, $color-accent);

      &:after {
        @include gradient-background-dg($color-primary, $color-accent);
      }
    }
    .btn-subtle {
      &:hover {
        background: rgba(222, 200, 187, 0.1);
      }
    }
    .btn-outline {
      &:hover {
        background: rgba(222, 200, 187, 0.1);
      }
    }

    .interactive {
      &:hover {
        background: rgba(222, 200, 187, 0.1);
      }
    }
  }
}

.body {
  :global {
    @import '~src/styles/gdpr_wow-classic';

    // Style progress here because it gets defined in cubic-ui
    .progress {
      @include gradient-background-dg($color-primary, $color-accent);
    }
  }
}
</style>

<style lang='scss'>
@import '~src/styles/partials/importer';
@import '~src/styles/reset';
@import '~src/styles/grid';

@font-face {
  font-family: 'Circular';
  src: url('/fonts/circular-std.woff');
}

#app {
  color: white;
}

.interactive {
  @include ie();
}

// Sticky Footer
.app-view {
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: calc(100vh - 56px);
  top: 56px; // nav bar
}
</style>
