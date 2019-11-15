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
    }
  },
  beforeCreate () {
    Vue.use(VueTouch)
  },
  mounted () {
    Vue.use(VueAnalytics, {
      id: 'UA-128905436-1',
      checkDuplicatedScript: true,
      router: this.$router
    })
  },
  head: {
    /* eslint no-undef: "off" */
    title: 'NexusHub' + ($STAGING ? ' [staging]' : ($PRODUCTION ? '' : ' [dev]')),
    link: [
      { rel: 'preload', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', as: 'font' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400' }
    ],
    script: [
      { src: 'https://static.nitropay.com/nads/nads-34.min.js' }
    ]
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';
:global {
  @import '~src/styles/modules/importer';
}

.app {
  background: $color-bg-dark;
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';
:global {
  @import '~src/styles/modules/wow-classic/importer';
}

.app {
  background: $color-bg-dark;
}
</style>

<style lang='scss'>
@import '~src/styles/partials/importer';
@import '~src/styles/reset';
@import '~src/styles/grid';

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
