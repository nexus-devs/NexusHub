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
  import navigation from 'src/components/nav.vue'
  import sidebar from 'src/components/sidebar.vue'
  import notification from 'src/components/notification.vue'

  export default {
    components: {
      navigation,
      sidebar,
      notification
    },
    head: {
      title: '什么他妈的你他妈的刚才说我？',
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,400,700'
      }]
    }
  }
</script>


<style lang='scss'>
  @import '~src/styles/partials/importer';
  @import '~src/styles/reset';
  @import '~src/styles/grid';
  @import '~src/styles/base';

  .a-ie {
    @include ie()
  }
</style>
