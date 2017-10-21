<template>
  <div id='app'>
    <sidebar></sidebar>
    <navigation></navigation>
    <notification></notification>
    <div class="app-content" :class="{ activeSidebar, deltaX }"
         :style="breakpoint && deltaX ? { transform: [`translate(calc(${deltaX + 262}px + 5vw), 0px)`],
                'margin-right': `calc(${deltaX + 262}px + 5vw)`,
                'transition-duration': deltaX ? '0s' : '0.45s'} : {}">
      <transition>
        <router-view></router-view>
      </transition>
      <bottom></bottom>
    </div>
  </div>
</template>



<script>
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import navigation from 'src/components/ui/nav.vue'
import sidebar from 'src/components/sidebar/index.vue'
import notification from 'src/components/ui/notification.vue'
import bottom from 'src/components/ui/footer.vue'

/**
 * Determine which game is currently being viewed
 * Useful for dynamic components like nav logo, notification listeners, etc
 */
const store = {
  state: {
    name: ''
  },
  mutations: {
    setActiveGame(state, name) {
      state.name = name
    }
  }
}

/**
 * Vue Component
 */
export default {
  beforeCreate() {
    this.$store.registerModule('game', store)
  },
  components: {
    navigation,
    sidebar,
    notification,
    bottom
  },
  data() {
    return {
      breakpoint: false
    }
  },
  mounted() {
    // JS breakpoint to ensure correct content movement behaviour when sidebar
    // is moved. (move content on $breakpoint-m, don't move it below)
    window.addEventListener('resize', () => this.updateBreakpoint())
    this.breakpoint = document.documentElement.clientWidth > 1150 ? true : false

    // Google Analytics
    Vue.use(VueAnalytics, {
      id: 'UA-81233976-2',
      checkDuplicatedScript: true,
      router: this.$router
    })
  },
  computed: {
    activeSidebar() {
      return this.$store.state.sidebar ? this.$store.state.sidebar.active : false
    },
    // Horizontal position for content when swiping out the sidebar
    deltaX() {
      return this.$store.state.sidebar ? this.$store.state.sidebar.deltaX : 0
    }
  },
  methods: {
    // Check if we reached $breakpoint-m. If so, don't "squeeze" the app content on menu swipe
    updateBreakpoint() {
      this.breakpoint = document.documentElement.clientWidth > 1150 ? true : false
    }
  }
}
</script>



<style lang='scss'>
@import '~src/styles/partials/importer';
@import '~src/styles/reset';
@import '~src/styles/grid';
@import '~src/styles/modules/importer';

#app {
  background: $colorBackgroundDark;
  color: $colorFontBody;

  input::placeholder {
    color: $colorFontBody;
  }
  a {
    color: white;
    @include ease(0.3s);
    &:hover {
      opacity: 0.8;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: white;
  }
}

.a-ie {
  @include ie();
}

.app-content {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
  will-change: transform;

  // Disable accidental text selection on sidebar touch
  &.deltaX {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  & > .g-ct {
    will-change: padding;
  }
  @media (max-width: $breakpoint-m) {
    min-height: 100vh;
  }
}

@media (min-width: $breakpoint-m) {
  .app-content {
    @include ease-out(0.45s);

    .g-ct {
      @include ease-out(0.45s);
    }
  }
  .activeSidebar {
    margin-right: calc(262px + 5vw);
    transform: translateX(calc(262px + 5vw));

    .g-ct {
      padding: 0 96px !important;
    }
  }
}
</style>
