<template>
  <div>
    <header>
      <search></search>
    </header>
  </div>
</template>



<script>
import search from 'src/components/search/index.vue'

export default {
  beforeMount() {
    this.$store.commit('setActiveGame', 'warframe')
  },
  components: {
    search
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

header {
  display:flex;
  height: 45vh;
  min-height: 500px;
  width: 100%;
  align-items: center;
  background: url('/img/warframe/index/search-bg.jpg');
  background-size: cover;

  .search-components {
    width: 100%;
  }
  @media (max-width: $breakpoint-m) {
    padding-top: 40px;
  }
}
</style>
