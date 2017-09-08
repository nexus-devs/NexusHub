<template>
  <div>
    <search></search>
  </div>
</template>

<script>
  import Search from 'src/components/search/index.vue'
  export default {
    components: {
      Search
    }
  }
</script>

<style lang='scss' scoped>
  @import '~src/styles/partials/importer';

  /deep/ .search-components {
    display:flex;
    height: 45vh;
    min-height: 500px;
    width: 100%;
    align-items: center;
    background: url('/img/warframe/index/search-bg.jpg');
    background-size: cover;

    @media (max-width: $breakpoint-s) {
      padding-top: 60px;
    }
  }
</style>
