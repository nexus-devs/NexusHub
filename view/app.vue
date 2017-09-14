<template>
  <div id='app'>
    <sidebar></sidebar>
    <navigation></navigation>
    <notification></notification>
    <div class="app-content" v-bind:class="{ activeSidebar }">
      <transition>
        <router-view></router-view>
      </transition>
      <bottom></bottom>
    </div>
  </div>
</template>


<script>
  import navigation from 'src/components/ui/nav.vue'
  import sidebar from 'src/components/sidebar/index.vue'
  import notification from 'src/components/ui/notification.vue'
  import bottom from 'src/components/ui/footer.vue'

  export default {
    components: {
      navigation,
      sidebar,
      notification,
      bottom
    },
    computed: {
      activeSidebar() {
        return this.$store.state.sidebar ? this.$store.state.sidebar.active : false
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
      @include ease(0.1s);

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
    will-change: transform margin-right;

    .g-ct {
      will-change: padding;
    }

    @media (max-width: $breakpoint-s) {
      min-height: 100vh;
    }
  }

  @media (min-width: $breakpoint-m) {
    .app-content {
      @include ease-out(0.45s);

      /deep/ .g-ct {
        @include ease-out(0.45s);
      }
    }
    .activeSidebar {
      margin-right: calc(302px + 5vw);
      transform: translateX(calc(302px + 5vw));

      /deep/ .g-ct {
        padding: 0 96px 0 96px;
      }
    }
  }
</style>
