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
  @import '~src/styles/base';
</style>
