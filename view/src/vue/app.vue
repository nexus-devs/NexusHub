<template>
  <div id='app'>
    <sidebar></sidebar>
    <navigation></navigation>
    <transition>
      <router-view></router-view>
    </transition>
    <notification></notification>
    <bottom></bottom>
  </div>
</template>


<script>
  import navigation from 'src/vue/components/ui/nav.vue'
  import sidebar from 'src/vue/components/ui/sidebar.vue'
  import notification from 'src/vue/components/ui/notification.vue'
  import bottom from 'src/vue/components/ui/footer.vue'

  export default {
    components: {
      navigation,
      sidebar,
      notification,
      bottom
    }
  }
</script>


<style lang='scss'>
  @import '~src/styles/partials/importer';
  @import '~src/styles/reset';
  @import '~src/styles/grid';
  @import '~src/styles/modules/importer';

  #app {
    // Layout Properties / Sticky Footer
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    // Base Colors
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

</style>
