<template>
  <div id='app'>
    <notification></notification>
    <div class="app-view" >
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
import notification from 'src/components/ui/notification.vue'
import bottom from 'src/components/ui/footer.vue'

/**
 * Vue Component
 */
export default {
  components: {
    notification,
    bottom
  },
  mounted() {
    Vue.use(VueAnalytics, {
      id: 'UA-81233976-2',
      checkDuplicatedScript: true,
      router: this.$router
    })
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

// Sticky Footer
.app-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
