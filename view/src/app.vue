<template>
  <div id='app'>
    <sidebar></sidebar>
    <top-nav></top-nav>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
  import TopNav from 'src/components/nav.vue'
  import Sidebar from 'src/components/sidebar.vue'
  export default {
    components: {
      'top-nav': TopNav,
      Sidebar
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
