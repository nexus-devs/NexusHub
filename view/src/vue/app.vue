<template>
  <div id='app'>
    <sidebar></sidebar>
    <navigation></navigation>
    <transition>
      <router-view></router-view>
    </transition>
    <notification></notification>
  </div>
</template>


<script>
  import navigation from 'src/vue/components/nav.vue'
  import sidebar from 'src/vue/components/sidebar.vue'
  import notification from 'src/vue/components/notification.vue'

  export default {
    components: {
      navigation,
      sidebar,
      notification
    }
  }
</script>


<style lang='scss'>
  @import '~src/styles/partials/importer';
  @import '~src/styles/reset';
  @import '~src/styles/grid';
  @import '~src/styles/base';
</style>
