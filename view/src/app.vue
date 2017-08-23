<template>
  <app>
    <top-nav></top-nav>
    <div class="view">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </app>
</template>


<script>
  import TopNav from "./views/components/nav.vue"
  export default {
    components: {
      "top-nav": TopNav
    },
    head: {
      title: "什么他妈的你他妈的刚才说我？",
      link: [{
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:400,700"
      }]
    }
  }
</script>


<style lang="scss">
  @import "./styles/partials/importer";
  @import "./styles/reset";
  @import "./styles/grid";
  @import "./styles/base";
</style>
